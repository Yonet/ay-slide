export interface AppStore {
	// list: Item[];

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
