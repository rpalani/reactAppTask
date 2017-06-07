import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ADDITEMS, REMOVEITEMS} from './actions';
import Collapsible from 'react-collapsible';

class App extends Component{

  constructor (){
    super()

    this.state = {
      quantity: '',
      items: 0
    }
  }
  updateQuantity(e) {
    this.setState({ quantity: e.target.value })
  }
  handleSubmit(e){
    const {dispatch} = this.props;
    const quantity = parseInt(this.state.quantity);
    let quantCheck = 0;
    if(!isNaN(quantity)){
      quantCheck = quantity;
    }
    dispatch({type:"ADD_ITEMS",payload: quantCheck})
  }
  clearItems(e){
    const {dispatch} = this.props;
    let quantCheck = 0;
    this.setState({quantity: ''});
    dispatch({type:"REMOVE_ITEMS", payload: quantCheck})
  }

  render (){
    const { items } = this.props;
    return (
      <div>
          <input
          type="text"
          name="inputQuantity"
          value={this.state.quantity}
          onChange={event => this.updateQuantity(event)}
          autoComplete="off"
          />
          <br />
          <button  onClick={event => this.handleSubmit(event)} type='submit'>Add</button>

        <Collapsible trigger="Add to Cart >">
          <div>
            {
              items > 0 ? <div> You have added {items} items <a href="" onClick={event => this.clearItems(event)}>X</a> </div>
              : <div>No items added</div>
            }
          </div>
        </Collapsible>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {items} = state;
  return {items};
}

export default connect(mapStateToProps)(App);
