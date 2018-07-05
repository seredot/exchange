import { StyleSheet } from "react-native";

export default StyleSheet.create({
	list: {
		flex: 1
	},
	item: {
		padding: 8,
		alignItems: "center",
	},
	values: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "baseline",
	},
	date: {
		color: "#444",
		fontSize: 16
	},
	currency: {
		color: "#426DA9",
		fontSize: 16,
		fontWeight: "900",
		paddingHorizontal: 4
	},
	amount: {
		color: "#444",
		fontSize: 20,
		fontWeight: "900",
		paddingHorizontal: 4
	},
	equals: {
		color: "#ccc",
		fontSize: 16,
		paddingHorizontal: 10
	}
});
