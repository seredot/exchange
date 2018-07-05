import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import styles from "./rateHistoryStyles";

export default class RateHistory extends React.Component {
	constructor(props) {
		super(props);
	}

	renderItem = ({ item }) => (
		<View style={styles.item}>
			<Text style={styles.date}>{item.date}</Text>
			<View style={styles.values}>
				<Text style={styles.currency}>{item.fromCurrency}</Text>
				<Text style={styles.amount}>1</Text>
				<Text style={styles.equals}>{" = "}</Text>
				<Text style={styles.currency}>{item.toCurrency}</Text>
				<Text style={styles.amount}>{item.parity}</Text>
			</View>
		</View>
	);

	render() {
		return (
			<FlatList
				style={styles.list}
				data={this.props.items}
				renderItem={this.renderItem}
				keyExtractor={(item, index) => index.toString()}
			/>
		);
	}
}
