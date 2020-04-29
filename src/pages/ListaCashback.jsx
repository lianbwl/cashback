import React from "react";
import Header from "../components/Header.jsx";
import TableDados from "../components/TableDados";

import { miscStyles } from "../styles/misc";
import { Container, Grid, Button } from "@material-ui/core";
import { Title } from "../styles/components";
import { NavLink } from "react-router-dom";

function ListaCashback() {
	const rows = [
		{
			id: 1,
			cod: "08445392",
			value: "12.54",
			date: "09/06/2020 - 20h32",
			cashbackPercent: "10%",
			cashbackValue: "1.25",
			status: "em validação",
		},
		{
			id: 2,
			cod: "908120",
			value: "320.99",
			date: "12/06/2020 - 10h13",
			cashbackPercent: "20%",
			cashbackValue: "64.00",
			status: "aprovado",
		},
		{
			id: 3,
			cod: "891223",
			value: "120.00",
			date: "14/06/2020 - 11h34",
			cashbackPercent: "5%",
			cashbackValue: "6.00",
			status: "aprovado",
		},
		{
			id: 1,
			cod: "190922",
			value: "53.00",
			date: "09/06/2020 - 18h12",
			cashbackPercent: "1%",
			cashbackValue: "0.53",
			status: "reprovado",
		},
	];

	return (
		<div>
			<Header />
			<Container maxWidth="lg">
				<Grid container direction="column" spacing={3}>
					<Grid item xs={12} style={miscStyles.mt5}>
						<Title>Dashboard</Title>
					</Grid>

					<Grid item xs={12}>
						<Grid container xs={12} justify="flex-end">
							<Grid item>
								<NavLink
									style={miscStyles.btlink}
									exact
									to="/cadastro-venda">
									<Button
										variant="contained"
										color="secondary">
										Cadastrar Novo
									</Button>
								</NavLink>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<TableDados data={rows} />
					</Grid>

					<Grid item xs={12}>
						<Grid
							container
							direction="column"
							justify="flex-end"
							lg={12}
							style={miscStyles.boxTotal}>
							<Grid item>
								<span style={miscStyles.spanTotal}>
									Total Acumulado: &nbsp;
								</span>
								Parabens você acumulou &nbsp;
								<span style={miscStyles.spanTotal}>
									R$ 71,79
								</span>
								, continue acumulando.
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default ListaCashback;
