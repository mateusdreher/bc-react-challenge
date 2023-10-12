import { useEffect, useState } from "react";
import { IGif } from "../../interfaces/gif.interface";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { searchGifs } from "../../api.service";
import { Thumbnail } from "../../components/Thumbnail/Thumbnail";
import { Col, Row } from "react-bootstrap";
import css from './Home.module.css';
import { Modal } from "../../components/Modal/Modal";
import { Loader } from "../../components/Loader/Loader";

export function Home () {
	const [gifs, setGifs] = useState<IGif[]>([]);
	const [term, setTerm] = useState('');
	const [clickedIndex, setClickedIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setGifs([]);
			setLoading(true);
			const data = await searchGifs(term);
			setGifs(data);
			setLoading(false)
		}

		if(!term) return;

		fetchData();
	}, [term])

	function handleSearch(term: string) {
		setTerm(term);
	}

	function handleClickThumbnail(index: number) {
		setClickedIndex(index);
		setShowModal(true);
	}

	function handleCloseModal() {
		setShowModal(false);
	}

	return (
		<>
			{showModal && <Modal onClose={handleCloseModal} images={gifs.map((gif) => {
				return {
					url: gif.image.url, title: gif.title, gifUrl: gif.url
				}
			})} showModal={showModal} clickedIamge={clickedIndex} />}


			<div className={css.container}>
					<h3 className={css.title}>Gifs list from giphy</h3>
					<SearchBar onSearch={handleSearch} />
					{term && !loading && gifs?.length === 0 && <h3>No results found for {term}</h3>}
					{!term && !loading && gifs?.length === 0 && <p><i>Type something to search...</i></p>}
					{loading && <Loader />}

						{gifs?.length > 0 && !loading && gifs.map((_, index) => {
							return (
								(index % 3 === 0) && 
								<Row key={index} className={css.row}>
									{gifs.slice(index, index+3).map((info, infoIndex) => [
										<Col key={info.id} md={4}>
											<Thumbnail giphy={info} onClick={() => handleClickThumbnail(index + infoIndex)} />
										</Col>
									])}
								</Row>
							)
						})}
				</div>
		</>
	)
}