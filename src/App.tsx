import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

interface resultTypes {
	climate: string;
	created: string;
	diameter: string;
	edited: string;
	films: string[];
	gravity: string;
	name: string;
	orbitalPeriod: string;
	population: string;
	redients: string[];
	rotationPeriod: string;
	surface_water: string;
	terrain: string;
	url: string;
}

function App() {
	const [planetsList, setPlanetsList] = useState([]);
	const url = "https://swapi.dev/api/planets/";
	const { isLoading, error, data } = useQuery("repoData", () =>
		axios.get(url).then((res) => res.data)
	);
	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className="App">
			{data.results.map((planet: resultTypes) => {
				return <h1>{planet.name]{{asd}}dafdsfs}</h1>;
			})}
		</div>
	);
}

export default App;
