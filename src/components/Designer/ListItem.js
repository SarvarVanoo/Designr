import React from 'react';
import './ListItem.css';

function ListItem(props) {
	return (
		<div style={styles.row}>
			{props.items.map((item) => (
				<div key={item.key} style={styles.listItem}>
					<img src={item.file} alt={'items' + item.key} style={styles.preview} />
					<p style={styles.key}>Image Key: {item.key}</p>
				</div>
			))}
		</div>
	);
}

export default ListItem;

const styles = {
	listItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '10px 20px'
	},
	preview: {
		width: '300px',
		height: '300px',
		border: 'solid 1px black'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap'
	}
};
