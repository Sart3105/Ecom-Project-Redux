import React, { useEffect,useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { cartText1, cartText2, cart1} from "../features/counter/CartSlice";

function Navbar() {
  const { cart, text, textState } = useSelector((state) => state.allCart);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const { pathname } = location;

  const [Cartname, setCartname] = useState(false);


       const handleRoute = () => {
    if (pathname == "/") {
      Navigate("/Cart");
      dispatch(cartText1());
    } else if (pathname == "/Cart") {
      Navigate("/");
      dispatch(cartText2());
    }
  }


//   function currentRoute(){
//       console.log(pathname)
//     if(pathname == "/"){
//       setCartname(true)
//     }
// else{
//   setCartname(false)
// }

//   }

    function getLink(){ 
     if (pathname == "/Cart"){
   console.log(pathname);
    dispatch(cart1());
  }
  console.log("hello world");
    }
useEffect(() => {
  getLink()
  }, []);

 

  return (
    <MDBNavbar className="sticky-top" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <h5>Drroms Shopping</h5>
        </MDBNavbarBrand>
        <h3 className="product">All Products</h3>
        <MDBBtn className="me-1" onClick={handleRoute}>
          {textState ? text +" ("+cart.length +")": text}
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
