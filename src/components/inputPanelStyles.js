import { StyleSheet } from "react-native";

export default StyleSheet.create({

	container: {
		flex: 0,
	},
	topContainer: {
		flex: 0,
		flexDirection: 'row',
		backgroundColor: "#fff",
		alignItems: "flex-start",
		paddingTop: 20,
		justifyContent: "center",
		paddingBottom: 20,
	},
	bottomContainer: {
		backgroundColor: "#fff",
		flex: 0,
		flexDirection: 'row',
		justifyContent: "center",
		paddingBottom: 10,
	},
	convertButton: {
		padding: 20,
	},
	leftView: {
		
	},
	midView: {
		width: 40,
		height: 44,
		alignItems: "center",
		justifyContent: "center"
	},
	equalsText: {
		fontSize: 20,
	},
	rightView: {
		
	},
	moneyInput: {
		backgroundColor: "#fafafa",
		width: 120,
		paddingVertical: 12,
		borderRadius: 10,
		textAlign: 'center',
		fontSize: 20,
		color: '#444',
	},
	currencySelect: {
		marginTop: 20,
		width: 120,
		backgroundColor: "#ddd",
		paddingHorizontal: 30,
		paddingVertical: 12,
		borderRadius: 10,
		borderWidth: 0,
	},
	currencySelectText: {
		textAlign: 'center',
		fontSize: 20,
		color: '#444',
	},
	currencySelectOptionList: {
		borderWidth: 0,
		flex: 1,
		marginTop: 100,
		marginBottom: 20,
	},
	currencySelectIndicatorStyle: {
		width: 0,
	}
});
