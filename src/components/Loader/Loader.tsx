import Spinner from 'react-bootstrap/Spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.loader}>
		<Spinner animation="border" role="status">
			<span className="visually-hidden">Loading...</span>
		</Spinner>
	</div>
  );
}
