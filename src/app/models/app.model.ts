export interface AppStore {

}

export interface Asset {
	created: Date;
	id: string;
	fileName: string;
	lastModified: Date;
	ossUrn: string;
	userId: string;
	status?: any;
	type?: string; // design, image, thumbnail
}

export interface Item {
	created: Date;
	id: string;
	lastModified: Date;
	name: string;
	slides: Slide[];
	urn: string;
	userId: string;
	userRole: string;
}

export interface Slide {

}
