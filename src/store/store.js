//****Store is not a component or functi simply import 
//creatstore from redux in order to create a store then 
//import your reducer function and pass it as an argument 
//inside the createstre function****
import {createStore} from 'redux';
import CounterReducer from './reducer/CounterReducer';
const store=createStore(CounterReducer)
export default store;
//agr ek s zyda reducer components hngy tw phir rootReducer=combineReducer(reducer1,reducer2,...)
//createstore(rootReducer) aesy krengy