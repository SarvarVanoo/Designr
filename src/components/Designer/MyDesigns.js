import React, { Component } from 'react';
import ListItem from './ListItem';
import './MyDesigns.css';

class MyDesigns extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				file: '',
				key: ''
			}
		};
		this.addItem = this.addItem.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	addItem(e) {
		e.preventDefault();
		const newItem = this.state.currentItem;
		if (newItem.file !== '') {
			const items = [ ...this.state.items, newItem ];

			console.log('Items array: ', items);
			this.setState({
				items: items,
				currentItem: {
					file: '',
					key: ''
				}
			});
		} else {
			alert('please select a file');
		}
	}

	handleInput(e) {
		// alert(URL.createObjectURL(e.target.files[0]));
		if (e.target.files[0])
			this.setState({
				currentItem: {
					file: URL.createObjectURL(e.target.files[0]),
					key: new Date().getTime()
				}
			});
		else alert('Please select a file');
	}

	render() {
		return (
			<div className="mydesigns">
				{/* <h1>My designs</h1> */}
				<form className="label" onSubmit={this.addItem}>
					<input type="file" accept="image/*" onChange={this.handleInput} />
					<br />
					<button className="add-design">Upload new Design</button>
				</form>
				<div style={styles.row}>
					{this.state.currentItem.file && (
						<img alt="current design" src={this.state.currentItem.file} style={styles.preview} />
					)}
				</div>
				{this.state.items.length > 0 && <ListItem items={this.state.items} />}
			</div>
		);
	}
}

export default MyDesigns;

const styles = {
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	preview: {
		width: '300px',
		height: '300px'
	}
};
