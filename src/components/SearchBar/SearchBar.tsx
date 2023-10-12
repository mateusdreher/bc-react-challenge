import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import css from './SearchBar.module.css';

interface Props {
	onSearch: (term: string) => void;
}

export function SearchBar (props: Props) {
	const [term, setTerm] = useState('');

	function hanleKeyboardClick(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			props.onSearch(term);
		}
	}

	return (
		<div className={css.search}>
			<InputGroup className="mb-3">
				<Form.Control
					placeholder="Type to search"
					onChange={event => setTerm(event.target.value)}
					onKeyUp={hanleKeyboardClick}
				/>
			</InputGroup>
		</div>
	)
}