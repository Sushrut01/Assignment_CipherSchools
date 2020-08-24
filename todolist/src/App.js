import React, { Component } from 'react';
import './App.css';
import ShowItems from './components/showItems';
import { text } from '@fortawesome/fontawesome-svg-core';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
        text:'',
        key:'',
        edit : false,
        list : 'TO DO LIST'
    }
  }

  //for adding items on list
  addItems = (event) => {
    event.preventDefault();
    const newItem = {
      key : this.state.key,
      title : this.state.text
    }

    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
        text:'',
        key:'',
        edit : false
    })
    }
  }

  handleChange = (event) => {
    this.setState({
        text: event.target.value,
        key: Date.now()
    })
  }

  //for deleting all the items from the list
  clearAll = () => {
    this.setState({
      items : []
    });
  }

  //for deleting single item from the list
  deleteItem = (key) => {
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    });

  }

  //for editing the item in the list
  editItem = (key) =>{
    const filteredItems= this.state.items.filter(item =>
    item.key!==key);

    const selectedItems= this.state.items.find(item =>
      item.key===key);

    this.setState({
      items: filteredItems,
      text : selectedItems.title,
      edit : true,
      key : key
    });
  }

render()
{
    return(
        <div className="additems">
          {/* if item list is empty - h1 will be in center else it will be adjusted to left and a cancel button is added to the left of it */}
         
          {this.state.items.length ? (<h1 className="withCancel">TO-DO LIST<button type="submit" className="cancel" onClick={this.clearAll}>Clear All</button></h1>) : (<h1 className="none">TO-DO LIST</h1>)}
            <form onSubmit={this.addItems} autoComplete="off">
                <input type="text" placeholder="Add something here..." id="add" onChange={this.handleChange} value={this.state.text}></input>
                <button type="submit" id="button" className={
                  this.state.edit ? "buttonEdit" : "buttonAdd"
                }>{this.state.edit ? "Edit" : "Add"}</button>
            </form>
            
            <ShowItems items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem}/>
        </div>
    );
  }
}

export default App;
