import { IGif } from "./interfaces/gif.interface";

const baseUrl = "https://api.giphy.com/v1/gifs";
const apiKey = process.env.REACT_APP_GIPHY_API_KEY ?? '';

export async function searchGifs(term: string): Promise<IGif[]> {
	const url = `${baseUrl}/search?api_key=${apiKey}&q=${term}`;

	try {
		const result = await fetch(url);
		console.log({result})
		const data = await result.json();

		if (!data) {
			return [];
		}

		return data.data.map((item: any) => {
			return {
				id: item.id,
				url: item.url,
				username: item.username,
				title: item.title,
				image: {
					height: item.images.original.height,
					widht: item.images.original.width,
					size: item.images.original.size,
					url: item.images.original.url,
					hash: item.images.original.hash,
				}
			}
		});
	} catch(err: any) {
		throw new Error(err.message ?? 'Error on fetch giphy api');
	}
	
} 