import { useState } from 'react';
import css from './Modal.module.css';
import { Image } from 'react-bootstrap';

interface Props {
	images: {
		url: string;
		title: string;
		gifUrl: string;
	}[];
	clickedIamge: number;
	showModal: boolean;
	onClose: () => void;
}

export function Modal (props: Props) {
	const [currentIndexImage, setCurrentIndexImage] = useState(props.clickedIamge);
	const modalClassName = props.showModal ? `${css.popup} ${css.show}` : css.popup

	function prevNextImage(type: 'prev' | 'next') {
		if (type === 'next') {
			if (currentIndexImage === props.images.length - 1) return;
			setCurrentIndexImage(currentIndexImage+1);
			return;
		}

		if (currentIndexImage === 0) return;
		setCurrentIndexImage(currentIndexImage-1);
	}

	function handleBgClick(event: any) {
		if(event.target.classList.contains(css.popup)) {
			props.onClose();
		}
	}

	return (
		<div className={modalClassName} onClick={handleBgClick}>
			<div className={css.popup__content}> 
			<div className={css.popup__title}>
				<a href={props.images[currentIndexImage].gifUrl} target='_blank' rel="noreferrer">
					<h3>{props.images[currentIndexImage].title}</h3>
				</a>
			</div>
				<div className={css.slideshow}>
					<i className="fa fa-2x fa-solid fa-chevron-left" onClick={() => prevNextImage('prev')}></i>
					<Image src={props.images[currentIndexImage].url} rounded />
					<i className="fa fa-2x fa-solid fa-chevron-right" onClick={() => prevNextImage('next')}></i>
				</div>
			</div>
		</div>
	)
}