import React from "react";
import ConversionHistory from "./conversionHistory";
import EventTypes from "../constants/eventTypes";
import {
  ConversionHistoryStore,
  getItems
} from "../stores/conversionHistoryStore";

export default class ConversionHistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onHistoryChange = this.onHistoryChange.bind(this);

    this.state = {
      items: getItems()
    };
  }

  componentDidMount() {
    ConversionHistoryStore.addListener(
      EventTypes.CONVERSION_HISTORY_CHANGED,
      this.onHistoryChange
    );
  }

  componentWillUnmount() {
    ConversionHistoryStore.removeListener(
      EventTypes.CONVERSION_HISTORY_CHANGED,
      this.onHistoryChange
    );
  }

  onHistoryChange(data) {
    // slice(0) copies the array allowing react-native to rerender on
    // change of the array reference. Copied array has same objects of
    // the source array so there's no significant memory impact.
    this.setState({
      items: getItems().slice(0)
    });
  }
  
  render() {
    return <ConversionHistory {...this.state} />;
  }
}
