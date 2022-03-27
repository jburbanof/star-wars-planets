import { Button } from "@mui/material";
import React from "react";
import { resultTypes } from "../../Types";

interface propsTypes {
	planetData: resultTypes;
	setValues: any;
}

const PlanetCard = ({ planetData, setValues }: propsTypes) => {
	const handleDelete = () => {
		setValues((prev: resultTypes[]) => {
			const index = prev.indexOf(planetData);
			return prev.filter((_, i) => i !== index);
		});
	};
	return (
		<div className="card" data-cy={planetData.name}>
			<h3>{planetData.name}</h3>
			<div className="planetData">
				<strong>Climate: </strong> <span>{planetData.climate}</span>
				<strong>Diameter:</strong> <span>{planetData.diameter}km</span>
				<strong>Films:</strong>
				<span>{planetData.films.length}</span>
				<strong>Gravity:</strong>
				<span>
					{planetData.gravity} {planetData.gravity === "N/A" ? "" : "G"}
				</span>
				<strong>Orbital period:</strong>{" "}
				<span>{planetData.orbital_period} days</span>
				<strong>Surface water:</strong> <span>{planetData.surface_water}%</span>
				<strong>Terrain:</strong> <span>{planetData.terrain}</span>
				<strong>Population:</strong>
				<span>
					{parseInt(planetData.population) / 1000000}
					{parseInt(planetData.population) ? " millions" : ""}
				</span>
				<strong>Rotation period: </strong>
				<span>{planetData.rotation_period} hours</span>
			</div>
			<div style={{ textAlign: "right", marginTop: "15px" }}>
				<Button color="primary" variant="contained" onClick={handleDelete} data-cy="delete">
					Delete
				</Button>
			</div>
		</div>
	);
};

export default PlanetCard;
