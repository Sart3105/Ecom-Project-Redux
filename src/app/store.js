import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../features/counter/counterSlice'
import todosReducer from '../features/counter/todosSlice'
import cartReducer  from '../features/counter/CartSlice'

 export const store = configureStore({
  reducer: {
    allCart: cartReducer
  },
})
 
