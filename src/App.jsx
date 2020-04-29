import React from "react";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import ListaCashback from "./pages/ListaCashback";
import NovoUsuario from "./pages/NovoUsuario";
import CadastroVenda from "./pages/CadastroVenda";

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Switch>
					<Route exact path="/" component={Login}></Route>
				</Switch>
				<Switch>
					<Route
						exact
						path="/lista-cashback"
						component={ListaCashback}></Route>
				</Switch>
				<Switch>
					<Route
						exact
						path="/novo-usuario"
						component={NovoUsuario}></Route>
				</Switch>
				<Switch>
					<Route
						exact
						path="/cadastro-venda"
						component={CadastroVenda}></Route>
				</Switch>
			</ThemeProvider>
		</Router>
	);
}

export default App;
