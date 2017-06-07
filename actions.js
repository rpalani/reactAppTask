export function ADDITEMS(value){
  console.log(value);
 return { type: 'ADD_ITEMS', payload: value};
}

export function REMOVEITEMS(value){
 return { type: 'REMOVE_ITEMS', payload: value};
}
