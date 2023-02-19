export const uuid = (length: number = 4): string => {
	let uuid: string = '';
	let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength: number = characters.length;
	for (let i = 0; i < length; i++) {
		uuid += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return uuid;
};
