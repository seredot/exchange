import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Picker,
	TextInput,
	Button
} from "react-native";
import { Select, Option } from "react-native-chooser";
import styles from "./inputPanelStyles";

export default class InputPanel extends React.Component {
	constructor(props) {
		super(props);
		this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
	}

	renderCurrencyOptions() {
		if (this.props.rateData)
			return this.props.rateData.rates.map(rate => (
				<Option
					styleText={styles.currencySelectText}
					value={rate.currency}
					key={rate.currency}
				>
					{rate.currency}
				</Option>
			));
		else
			return (
				<Option
					styleText={styles.currencySelectText}
					value={"Loading..."}
				>
					Loading...
				</Option>
			);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topContainer}>
					<View style={styles.leftView}>
						<TextInput
							style={styles.moneyInput}
							keyboardType="numeric"
							value={this.props.fromAmountStr}
							maxLength={10}
							onChangeText={this.props.fromAmountChanged}
						/>
						<Select
							onSelect={this.props.fromCurrencySelected}
							defaultText={this.props.fromCurrency}
							style={styles.currencySelect}
							textStyle={styles.currencySelectText}
							indicatorSize={10}
							optionListStyle={styles.currencySelectOptionList}
							indicator={"down"}
							indicatorColor={"#444"}
						>
							{this.renderCurrencyOptions()}
						</Select>
					</View>
					<View style={styles.midView}>
						<Text style={styles.equalsText}>=</Text>
					</View>
					<View style={styles.rightView}>
						<TextInput
							style={styles.moneyInput}
							keyboardType="numeric"
							value={this.props.calculatedValueStr}
							maxLength={10}
						/>
						<Select
							onSelect={this.props.toCurrencySelected}
							defaultText={this.props.toCurrency}
							style={styles.currencySelect}
							textStyle={styles.currencySelectText}
							indicatorSize={10}
							optionListStyle={styles.currencySelectOptionList}
							indicator={"down"}
							indicatorColor={"#444"}
						>
							{this.renderCurrencyOptions()}
						</Select>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<Button
						style={styles.convertButton}
						onPress={e => this.props.convertButtonPressed(e)}
						title={"Convert"}
					/>
				</View>
			</View>
		);
	}
}
