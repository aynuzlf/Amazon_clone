import './App.css';
import Header from './Header';
import Home from './Home';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvide';
import { useEffect } from 'react';
import { auth } from './Firebase';
import Payment from './Payment';
import{loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise=loadStripe("pk_test_51KXFcLBeYzD6b8scA9OLphSURQ4K7wu14jzWH1hdzaoL8QjzQJlA57XJbyXmEE9yYgtZ7UWJrk2YCl0X4ylaLzKM00Ng1Efh5m")

function App() {
  const [{},dispatch]=useStateValue();
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{

    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser,
      })
    }
    else{
      dispatch({
        type:"SET_USER",
        user:null,
      })
    }
  })
})
  return (      
    <Router>
<Routes>
 
        {/* <Route path='/'element={<Home className='App'/>}/> */}
        {/* <Route path='/Checkout'element={<Checkout/>}/>  if it is two component together <><compo/></>*/}
        
        <Route  path='/Payment' element= {<><Header/> <Elements stripe={promise}> <Payment/></Elements> </>}/>
        <Route  path='/Login' element= {<Login/>}/>
        <Route  path='/Checkout' element= {<><Header/><Checkout/></>}/>
        <Route path='/'element={<><Header/><Home className='App'/></>}/>

</Routes>

  </Router>
  ); 
}

export default App;
