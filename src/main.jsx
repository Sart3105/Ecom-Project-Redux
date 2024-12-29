import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {store} from './app/store.js'
import { Provider } from 'react-redux'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(

  
  <StrictMode>


  <Provider store={store}>
    <App />
  </Provider>
 
    
  </StrictMode>,
 
)
