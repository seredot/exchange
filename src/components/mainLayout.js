import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import InputPanelContainer from "./inputPanelContainer";
import ConversionHistoryContainer from "./conversionHistoryContainer";
import RateHistoryContainer from "./rateHistoryContainer";
import Tabs from "react-native-tabs";
import styles from "./mainLayoutStyles";

export default class MainLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = { page: "myConversions" };
	}
	renderConverter() {
		return <ConversionHistoryContainer style={styles.myConversions} />;
	}
	renderHistory() {
		return <RateHistoryContainer style={styles.rateHistory} />;
	}
	render() {
		return (
			<SafeAreaView style={styles.layout}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Exchange</Text>
				</View>
				<InputPanelContainer />
				<View style={styles.tabContent}>
					{this.state.page === "myConversions"
						? this.renderConverter()
						: this.renderHistory()}
				</View>
				<Tabs
					selected={this.state.page}
					style={styles.tabs}
					selectedStyle={styles.selectedTab}
					onSelect={el => this.setState({ page: el.props.name })}
				>
					<Text name="myConversions" style={styles.tabText}>
						My Conversions
					</Text>
					<Text name="rateHistory" style={styles.tabText}>
						Rate History
					</Text>
				</Tabs>
			</SafeAreaView>
		);
	}
}
