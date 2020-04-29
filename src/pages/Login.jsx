import React from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { miscStyles } from "../styles/misc";
import { Title } from "../styles/components";
import { NavLink } from "react-router-dom";

function Login() {
	return (
		<Container maxWidth="xs">
			<form autoComplete="off">
				<Grid
					container
					style={miscStyles.mt5}
					spacing={3}
					direction="column">
					<Grid item>
						<Title>Login</Title>
					</Grid>
					<Grid item>
						<TextField
							fullWidth
							required
							label="Email"
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<TextField
							fullWidth
							required
							label="Senha"
							type="password"
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<Grid container justify="space-between">
							<Grid item>
								<NavLink
									style={miscStyles.btlink}
									exact
									to="/novo-usuario">
									<Button color="secondary">
										Novo Usuário
									</Button>
								</NavLink>
							</Grid>
							<Grid item>
								<NavLink
									style={miscStyles.btlink}
									exact
									to="/lista-cashback">
									<Button
										type="submit"
										variant="contained"
										color="secondary">
										Login
									</Button>
								</NavLink>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
}

export default Login;
