import React from "react";
import Header from "../components/Header.jsx";

import { miscStyles } from "../styles/misc";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { Title } from "../styles/components";
import { NavLink } from "react-router-dom";

function CadastroVenda() {
	const [codigo, setCodigo] = React.useState("");
	const [valor, setValor] = React.useState("");
	const [selectedDate, setdDate] = React.useState("");

	const handleCodigoChange = (e) => {
		setCodigo(e.target.value);
	};

	const handleValorChange = (e) => {
		setValor(e.target.value);
	};

	const handleDateChange = (e) => {
		setdDate(e.target.value);
	};

	return (
		<div>
			<Header />
			<Container maxWidth="lg">
				<Grid
					container
					direction="column"
					spacing={3}
					style={miscStyles.mt5}>
					<Grid item xs={12}>
						<Title>Nova Venda</Title>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={3}>
							<Grid item>
								<TextField
									fullWidth
									required
									label="Código"
									onChange={handleCodigoChange}
									variant="outlined"
								/>
							</Grid>
							<Grid item>
								<TextField
									fullWidth
									required
									type="number"
									label="Valor"
									onChange={handleValorChange}
									variant="outlined"
								/>
							</Grid>
							<Grid item>
								<TextField
									fullWidth
									required
									type="date"
									onChange={handleDateChange}
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container justify="flex-end" spacing={3}>
							<Grid item>
								<NavLink
									style={miscStyles.btlink}
									exact
									to="/lista-cashback">
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
			</Container>
		</div>
	);
}

export default CadastroVenda;
