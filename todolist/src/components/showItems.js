import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';

const showItems = (props) => {
    const items = props.items;

    // if the list is empty a loader will be shown else data will be displayed
    const listItems = items.length ? (items.map(item =>
   {
       return(
       <div className="showitems" key={item.key}>
            <p>{item.title}
                <span id="edit"><FontAwesomeIcon icon={faPen} onClick={() => {props.editItem(item.key)}}/></span>
                <span><FontAwesomeIcon icon={faTrash} onClick={() => {props.deleteItem(item.key)}} /></span>
            </p>
       </div>
       )
    })) :<div className="loading"><h5>Please add some items...</h5><div className="loader"></div></div>

    return (
        <div>
            {/* for movie the items like it is flipped while adding or deleting any items used FlipMove */}
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    );
}

export default showItems;