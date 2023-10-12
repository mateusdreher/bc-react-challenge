import { Button, Card } from "react-bootstrap";
import { IGif } from "../../interfaces/gif.interface";
import css from './Thumbnail.module.css';


interface Props {
	giphy: IGif;
	onClick: () => void;
}

export function Thumbnail (props: Props) {
	const {giphy,} = props
	return (
		<Card >
			<Card.Img className={css.image} variant="top" src={giphy.image.url} />
			<Card.Body>
				<Card.Title>{giphy.title}</Card.Title>
				<Button variant="primary" onClick={props.onClick}>Open</Button>
			</Card.Body>
    </Card>
	)
}