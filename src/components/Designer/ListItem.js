import React from 'react'
import './ListItem.css'

function ListItem(props) {
    const items = props.items;
        const listItems = items.map(item=>
            {

                return(<div key="item.key">
                    <p>{item.file}</p>
                    <img src={item.file} alt=""/>
                </div>)
            })
    return (
        <div>
            {listItems}
            </div>
    )
}

export default ListItem
