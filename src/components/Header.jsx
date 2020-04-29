import React from "react";

import {
	HeaderBlock,
	UserLogged,
	MenuHeader,
	MenuHeaderItem,
	Button,
} from "../styles/components";
import { Grid } from "@material-ui/core";
import { miscStyles } from "../styles/misc";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<HeaderBlock logoheight="70px" backColor="#716A4D">
			<Grid container justify="space-between">
				<Grid item>
					<Grid container>
						<Grid item>
							<img
								className="logo"
								alt="Logo Cashback"
								src={require("../assets/imgs/logo.svg")}></img>
						</Grid>
						<Grid item>
							<MenuHeader alignY="center" alignX="center">
								<MenuHeaderItem
									padX="20px"
									height="70px"
									alignY="center"
									alignX="center">
									<NavLink
										exact
										to="/lista-cashback"
										activeclassname="is-active">
										Cashbacks
									</NavLink>
								</MenuHeaderItem>
							</MenuHeader>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid
						container
						style={{ height: "74px" }}
						alignItems="center"
						justify="center">
						<Grid item>
							<UserLogged>BC</UserLogged>
						</Grid>
						<Grid item>
							<NavLink exact to="/">
								<Button style={miscStyles.logoutLink}>
									Sair
								</Button>
							</NavLink>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</HeaderBlock>
	);
}

export default Header;
