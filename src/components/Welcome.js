import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
// import { useHistory } from 'react-router-dom';

export default function Welcome() {
	// when using a browser router, we get an implicit property "navigation"
	// let history = useHistory();

	return (
		<div className="full">
			<h1 style={{ marginTop: 50 }}>Designr</h1>
			<div style={styles.row}>
				<Link to={'/login'} className="button">
					Login
				</Link>

				<Link to={'/register'} className="button">
					Register
				</Link>
			</div>
		</div>
	);
}

export const styles = {
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
};
