import React from "react";
import InputPanel from "./inputPanel";
import getRates from "../api/getRates";
import findParity from "../utils/findParity";
import { addConversionToHistory } from "../actions/conversionHistoryActionCreator";
import selectCurrencies from "../actions/currencySelectionActionCreator";
import EventTypes from "../constants/eventTypes";
import {
  RateHistoryStore,
  getLatest
} from "../stores/rateHistoryStore";

export default class InputPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onRatesChange = this.onRatesChange.bind(this);
    this.fromAmountChanged = this.fromAmountChanged.bind(this);
    this.convertButtonPressed = this.convertButtonPressed.bind(this);
    this.fromCurrencySelected = this.fromCurrencySelected.bind(this);
    this.toCurrencySelected = this.toCurrencySelected.bind(this);
    this.state = {
      rateData: null,
      fromAmountStr: "1",
      fromCurrency: "EUR",
      toCurrency: "EUR",
      calculatedValue: 1,
      calculatedValueStr: "1"
    };
  }

  componentDidMount() {
    RateHistoryStore.addListener(
      EventTypes.RATE_HISTORY_CHANGED,
      this.onRatesChange
    );

    // Get rates from API. It will notify this view through store.
    getRates();
  }

  componentWillUnmount() {
    RateHistoryStore.removeListener(
      EventTypes.RATE_HISTORY_CHANGED,
      this.onRatesChange
    );
  }

  onRatesChange(data) {
    this.setState({
      rateData: getLatest()
    });
  }

  render() {
    return (
      <InputPanel
        rateData={this.state.rateData}
        fromAmountChanged={this.fromAmountChanged}
        convertButtonPressed={this.convertButtonPressed}
        fromCurrencySelected={this.fromCurrencySelected}
        toCurrencySelected={this.toCurrencySelected}
        {...this.state}
      />
    );
  }

  fromAmountChanged(text) {
    this.setState({
      fromAmountStr: text,
      calculatedValueStr: ""
    });
  }

  convertButtonPressed(e) {
    if (this.state.rateData === null) return;

    let fromAmount = parseFloat(this.state.fromAmountStr);
    let parity = findParity(this.state.rateData.rates, this.state.fromCurrency, this.state.toCurrency);
    let newAmount = Math.round(fromAmount * parity * 10000) / 10000;
    let newAmountStr = newAmount.toFixed(4);
    this.setState({
      calculatedValue: newAmount,
      calculatedValueStr: newAmountStr
    });

    addConversionToHistory(
      this.state.rateData.time,
      this.state.fromCurrency,
      this.state.fromAmountStr,
      this.state.toCurrency,
      newAmountStr
    );
  }

  fromCurrencySelected(value) {
    this.setState({
      fromCurrency: value,
      calculatedValueStr: ""
    });
    selectCurrencies(value, this.state.toCurrency);
  }

  toCurrencySelected(value) {
    this.setState({
      toCurrency: value,
      calculatedValueStr: ""
    });
    selectCurrencies(this.state.fromCurrency, value);
  }
}
