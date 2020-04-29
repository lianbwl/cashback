import { theme } from "./theme";

const sizeBase = 10;

export const logoutLink = {
	fontSize: "14px",
	color: theme.white,
	lineHeight: 1,
	textDecoration: "underline",
	border: "none",
};

export const viewLayoutBox = {
	padding: "10px 20px",
	width: "100%",
	boxSizing: "border-box",
	background: "#E8E9E8",
};

export const mt5 = {
	marginTop: sizeBase * 5,
};

export const btlink = {
	color: "none",
	textDecoration: "none",
};

export const boxTotal = {
	background: theme.colors.coral,
	padding: sizeBase,
	borderRadius: "4px",
	color: theme.white,
	textAlign: "center",
};

export const spanTotal = {
	fontWeight: 700,
};

export const miscStyles = {
	logoutLink,
	viewLayoutBox,
	mt5,
	btlink,
	boxTotal,
	spanTotal,
};
