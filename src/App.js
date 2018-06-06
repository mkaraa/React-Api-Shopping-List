import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buyItems: ["milk", 'bread', 'fruit'],
      message: '',
      count:0
    }
  }
 
  //  add Item function 
  addItem(e) {
    e.preventDefault();
    const { buyItems } = this.state;
    const newItem = this.newItem.value;
    var cnt =0;
    const isOnTheList = buyItems.includes(newItem);

    if (isOnTheList) {    //Check the new item whether is on the list
      this.setState({
        message: "This item on the List!!"
      })
    } else {

      newItem !== '' && this.setState({
        buyItems: [...this.state.buyItems, newItem],
        message: '',
      })
    } 
    console.log(this.state.message);
    console.log(newItem, " is added .");
    this.addForm.reset();
  }


  //remove Item function 
  removeItem(item) {
    console.log(item + " is removed .");

    const newBuyItems = this.state.buyItems.filter(buyItem => {
      return buyItem !== item;
    })

    this.setState({
      buyItems: [...newBuyItems]
    })
    if (newBuyItems.length === 0) {
      this.setState({
        message: "No items on your list, please Add items ."
      })
    }
  }

counter(count){
  this.setState({
    count:+1
  })
}
  //clear All function 
  clearAll() {
    this.setState({
      buyItems: [],
      message: 'No items on your list, please Add items .'
    })
  }


  //render 
  render() {
    const { buyItems, message } = this.state;
    return (
      <div id="container">
        <header>
          <h1>Shopping List</h1>
          <form ref={(input) => { this.addForm = input }} className="form-inline" onSubmit={(e) => { this.addItem(e) }}>
            <div className="form-group">
              <label className="sr-only" htmlFor="newItemInput"> </label>
              <input ref={(input) => { this.newItem = input }} type="text" placeholder="New Item" className="form-control" id="newItemInput" />
            </div>
            <button type="submit" className="addBtn">Add </button>
          </form>
        </header>

        <div className="content">
          {
            (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
          }
          {
            buyItems.length > 0 &&
            <table>
              <tr>
                <th className="myTh" colSpan='2'>Buy</th>
                <th className="myTh" colSpan='2'>Item</th>
                <th className="myTh" colSpan='2'>Remove</th>
              </tr>

              {buyItems.map(item => {
                return (
                  <tr key={item}>
                    <th scope="row"><button className="removeBtn">Buy</button></th>
                    <td colSpan="2">{item}</td>
                    <td colSpan="2">
                      <button className="removeBtn" onClick={(e) => this.removeItem(item)}>
                        Remove Item
                        </button>
                    </td>
                  </tr>
                )
              })}

              <tr>
                <td className="text-right" colSpan=''>
                  <button onClick={(e) => this.clearAll()} className="clearBtn">Clear All  List </button>
                </td>
              </tr>

            </table>
          }

            </div>
        </div>
        );
      }
    }
    
    export default App;
