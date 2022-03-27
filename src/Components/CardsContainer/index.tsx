import React, { useContext } from "react";
import { PlanetsContext } from "../../App";
import PlanetCard from "./PlanetCard";
import {ReactComponent as Icon} from "../Icons/R2-D2Icon.svg";

const CardsContainer = () => {
	const { value, setValue } = useContext(PlanetsContext);
	return (
		<main className="container">
			{value.length !== 0 ? (
				<div className="planetsGrid">
					{value.map((planet) => {
						return (
							<PlanetCard key={planet.name} planetData={planet} setValues={setValue} />
						);
					})}
				</div>
			) : (
				<div className="placeholder">
					<svg width="150" height="200">
						<Icon />
					</svg>
					<p>Search your favorite planet!</p>
				</div>
			)}
		</main>
	);
};

export default CardsContainer;
