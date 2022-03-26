import React, { useContext } from "react";
import { PlanetsContext } from "../../App";
import PlanetCard from "./PlanetCard";

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
						<svg
							fill="#ffe81f"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							width="150px"
							height="150px"
						>
							<path d="M 25 2 C 19.484375 2 15 6.484375 15 12 L 15 14 L 23 14 L 23 9 L 27 9 L 27 14 L 35 14 L 35 12 C 35 6.484375 30.515625 2 25 2 Z M 17.265625 10 L 21 10 L 21 12 L 17 12 C 17 11.308594 17.097656 10.640625 17.265625 10 Z M 30 11 C 30.550781 11 31 11.449219 31 12 C 31 12.550781 30.550781 13 30 13 C 29.449219 13 29 12.550781 29 12 C 29 11.449219 29.449219 11 30 11 Z M 10 16 C 9.445313 16 9 16.449219 9 17 L 9 19 L 8 19 L 8 21 L 9 21 L 9 36.683594 C 9 36.789063 9.019531 36.898438 9.054688 37 L 10 40 L 13 40 L 13 17 C 13 16.449219 12.554688 16 12 16 Z M 16 16 C 15.445313 16 15 16.449219 15 17 L 15 37 C 15 37.550781 15.445313 38 16 38 L 34 38 C 34.554688 38 35 37.550781 35 37 L 35 17 C 35 16.449219 34.554688 16 34 16 Z M 38 16 C 37.445313 16 37 16.449219 37 17 L 37 40 L 40 40 L 40.949219 37 C 40.980469 36.898438 41 36.789063 41 36.683594 L 41 21 L 42 21 L 42 19 L 41 19 L 41 17 C 41 16.449219 40.554688 16 40 16 Z M 18 19 L 32 19 L 32 21 L 18 21 Z M 23 24 L 27 24 L 27 36 L 23 36 Z M 31 34 L 33 34 L 33 36 L 31 36 Z M 17.132813 40 L 18.167969 41.554688 C 18.355469 41.832031 18.664063 42 19 42 L 31 42 C 31.335938 42 31.644531 41.832031 31.832031 41.554688 L 32.867188 40 Z M 10 42 L 8.105469 45.550781 C 8.035156 45.691406 8 45.84375 8 46 L 8 47 C 8 47.550781 8.445313 48 9 48 L 12 48 C 12.554688 48 13 47.550781 13 47 L 13 42 Z M 37 42 L 37 47 C 37 47.550781 37.445313 48 38 48 L 41 48 C 41.554688 48 42 47.550781 42 47 L 42 46 C 42 45.84375 41.964844 45.691406 41.894531 45.550781 L 40 42 Z" />
						</svg>
					</svg>
					Search your favorite planet!
				</div>
			)}
		</main>
	);
};

export default CardsContainer;
