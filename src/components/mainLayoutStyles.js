import { StyleSheet } from "react-native";

export default StyleSheet.create({
	layout: { flex: 1, flexDirection: "column", backgroundColor: '#f8f8f8'},
	tabContent: { flex: 1, paddingBottom: 30,  },
	myConversions: { flex: 1, flexDirection: "column" },
	rateHistory: { flex: 1, flexDirection: "column" },
	header: {
		flex: 0,
		paddingVertical: 10,
		alignItems: "center"
	},
	headerText: {
		color: "#426DA9",
		fontSize: 24,
		fontWeight: "900"
	},
	tabs: {
		height: 80
	},
	selectedTab: {
		color: "#426DA9"
	},
	tabText: {
		color: '#666',
		fontSize: 16,
		fontWeight: "900"
	}
});
