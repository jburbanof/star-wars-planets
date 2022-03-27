export interface resultTypes {
	climate: string;
	created: string;
	diameter: string;
	edited: string;
	films: string[];
	gravity: string;
	name: string;
	orbital_period: string;
	population: string;
	redients: string[];
	rotation_period: string;
	surface_water: string;
	terrain: string;
	url: string;
}
export interface planetContextTypes {
	value: resultTypes[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setValue: any;
}
