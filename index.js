const redux =require('redux');
const createStore =redux.createStore;
//Action
const CAKE_ORDERED= 'CAKE_ORDERED';

function orderCake(){
return {
  type: CAKE_ORDERED,
}
};

//Reducer

const initialState ={
  numberOfCakes: 10,
}

const reducer =(state=initialState, action)=>{
  if(action.type==='CAKE_ORDERED'){
   return {
    numberOfCakes : state.numberOfCakes-1,
   }
  }else {
   return state;
  } 
}

//Redux store
const store =createStore(reducer);
console.log('initialState  ', store.getState())
const unsubscribe =store.subscribe(()=>{
  console.log('Updated state  ', store.getState())
})

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe()
