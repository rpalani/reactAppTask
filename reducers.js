const initialState = { quantity: '', items: 0 }
export default function reducers(state = initialState, action) {

  switch(action.type){
    case 'ADD_ITEMS':{
      const items = state.items + action.payload;
      console.log( state.items,  action.payload )
      return {...state, items:items}
    }
    case 'REMOVE_ITEMS':{
      const items = state.items - action.payload;
      return {...state, items:items}
    }
    default:
      return state;
  }

}
