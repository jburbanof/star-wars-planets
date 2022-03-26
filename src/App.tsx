import React, { createContext, useEffect, useState } from "react";
import { planetContextTypes, resultTypes } from "./Types";
import "./App.scss";
import axios from "axios";
import { useSnackbar } from "notistack";
import CardsContainer from "./Components/CardsContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Autocomplete, Icon, SvgIcon, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const theme = createTheme({
	palette: {
		primary: {
			main: "#EB212E",
			light: "#ef4d57",
			dark: "#a41720",
			contrastText: "#fff",
		},
		secondary: {
			main: "#000000",
		},
	},
});

export const PlanetsContext = createContext<planetContextTypes>({
	value: [],
	setValue: null,
});

function App() {
	const [search, setSearch] = useState("");
	const url = `https://swapi.dev/api/planets/?search=${search}`;
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [planetsList, setPlanetsList] = useState<resultTypes[]>([]);
	const [searchResults, setSearchResults] = useState([]);
	const fetchData = async () => {
		const response = await axios.get(url).then((res) => res.data);
		setSearchResults(response.results);
	};
	const handleSearchField = (value: resultTypes) => {
		if (planetsList.includes(value) || !value) {
			enqueueSnackbar(`You have already selectes ${value.name}`, {
				variant: "error",
			});
		} else {
			setPlanetsList([...planetsList, value]);
			setSearch("");
		}
	};
	useEffect(() => {
		fetchData();
	}, [search]);


	return (
		<ThemeProvider theme={theme}>
			<PlanetsContext.Provider
				value={{
					value: planetsList,
					setValue: setPlanetsList,
				}}
			>
				<div className="App">
					<header className="header">
						<h1 style={{ margin: "0 0 20px 0" }}>Star wars planets</h1>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "row",
							}}
						>
							<Autocomplete
								color="secondary"
								id="free-solo-demo"
								options={searchResults}
								inputValue={search}
								filterSelectedOptions
								getOptionLabel={(option: resultTypes) => option.name}
								onChange={(e, value: any) => handleSearchField(value)}
								popupIcon={
									<SvgIcon width={100} fontSize="large">
										<SearchIcon />
									</SvgIcon>
								}
								renderInput={(params) => (
									<TextField
										color="secondary"
										{...params}
										sx={{ backgroundColor: "white", width: 300, color: "black" }}
										onChange={(e) => setSearch(e.target.value)}
									/>
								)}
							/>
						</div>
					</header>
					<CardsContainer />
				</div>
			</PlanetsContext.Provider>
		</ThemeProvider>
	);
}

export default App;
