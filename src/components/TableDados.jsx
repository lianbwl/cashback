import React from "react";
import PropTypes from "prop-types";

import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core";

const TableDados = ({ data }) => {
	return (
		<TableContainer width="100%">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="center">Código</TableCell>
						<TableCell align="center">Valor</TableCell>
						<TableCell align="center">Data</TableCell>
						<TableCell align="center">% Cashback</TableCell>
						<TableCell align="center">R$ Cashback</TableCell>
						<TableCell align="center">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.id}>
							<TableCell align="center">{row.cod}</TableCell>
							<TableCell align="center">{row.value}</TableCell>
							<TableCell align="center">{row.date}</TableCell>
							<TableCell align="center">
								{row.cashbackPercent}
							</TableCell>
							<TableCell align="center">
								{row.cashbackValue}
							</TableCell>
							<TableCell align="center">{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

TableDados.propTypes = {
	data: PropTypes.array.isRequired,
};

export default TableDados;
