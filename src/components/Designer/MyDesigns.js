import React, { Component } from 'react'
import './MyDesigns.css';
import ListItem from './ListItem';

class MyDesigns extends Component {

    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:
            {
                file:'',
                key:''
            }
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.file !==""){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem:{
            file:'',
            key:''
          }
        })
        }
      }

    handleInput(e){
        this.setState({
          currentItem:{
            file: e.target.files,
            key: Date.now()
          }
        })
      }

    render() {
        return (
            <div className="mydesigns">
                {/* <h1>My designs</h1> */}
                <form className="label" onSubmit={this.addItem}>
                <input type="file" name="imageupload" id="input" accept="image/*" 
                value={this.state.currentItem.file} onChange={this.handleInput}/>
                <br/>
                <button  className="add-design">Upload new Design</button>
                </form>

                <ListItem items={this.state.items}></ListItem>
            </div>
        )
    }
}

export default MyDesigns
