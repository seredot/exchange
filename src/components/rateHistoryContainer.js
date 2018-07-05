import React from "react";
import RateHistory from "./rateHistory";
import EventTypes from "../constants/eventTypes";
import {
  RateHistoryStore,
  getItems,
  getRatesBetweenCurrencies
} from "../stores/rateHistoryStore";
import {
  CurrencySelectionStore,
  getCurrencies
} from "../stores/currencySelectionStore";

export default class RateHistoryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.onChange();
    CurrencySelectionStore.addListener(
      EventTypes.CURRENCIES_CHANGED,
      this.onChange
    );
  }

  componentWillUnmount() {
    CurrencySelectionStore.removeListener(
      EventTypes.CURRENCIES_CHANGED,
      this.onChange
    );
  }

  onChange() {
    let currencies = getCurrencies();
    this.setState({
      items: getRatesBetweenCurrencies(currencies.fromCurrency, currencies.toCurrency)
    });
  }

  render() {
    return <RateHistory {...this.state} />;
  }
}
