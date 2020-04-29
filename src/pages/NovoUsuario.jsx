import React from "react";

import { Container, Grid, TextField, Button } from "@material-ui/core";
import { miscStyles } from "../styles/misc";
import { Title } from "../styles/components";
import { NavLink } from "react-router-dom";

function NovoUsuario() {
	const [name, setName] = React.useState("");
	const [cpf, setCPF] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleCpf = (e) => {
		setCPF(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<Container maxWidth="xs">
			<form autoComplete="off">
				<Grid
					container
					style={miscStyles.mt5}
					spacing={3}
					direction="column">
					<Grid item>
						<Title>Novo Usuário</Title>
					</Grid>
					<Grid item>
						<TextField
							fullWidth
							required
							label="Nome Completo"
							onChange={handleName}
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<TextField
							fullWidth
							required
							type="number"
							label="CPF"
							onChange={handleCpf}
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<TextField
							fullWidth
							required
							label="Senha"
							onChange={handlePassword}
							type="password"
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<TextField
							fullWidth
							required
							label="Confirme sua senha"
							type="password"
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<Grid container justify="space-between">
							<Grid item>
								<NavLink style={miscStyles.btlink} exact to="/">
									<Button color="secondary">Voltar</Button>
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
										Cadastrar
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

export default NovoUsuario;
