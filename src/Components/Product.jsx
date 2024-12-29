import React, { useCallback, useEffect, useState } from 'react';
import {MDBCard,MDBCardBody,MDBCardTitle,
    MDBContainer, MDBRow, MDBCol,
    MDBCardText,MDBCardImage,MDBBtn,MDBRipple} from 'mdb-react-ui-kit';

import { useDispatch, useSelector} from 'react-redux';
import { addCart } from '../features/counter/CartSlice';
import "./Product.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';




function Product() {
  const {items }= useSelector((state)=> state.allCart); 
  
  const [showMore, setShowMore] = useState({
    check:false,
    text:"Show more"
  });
    
  useCallback(
    () => {
      first
    },
    [second],
  )
  
  
   const dispatch =  useDispatch();
          
   
  return (
        
    <>
      
      <MDBContainer className='mt-3'>
      <MDBRow>
      
      { items.map((item)=>{
        return(
        <MDBCol  className='pt-3 col-12 col-md-6 col-lg-4' key={item.id}>
       
       <MDBCard>
       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
       {/* <MDBCardImage  style={{height:"120px",width:"55%"}}  src={item.image}   loading="lazy"        
       
       fluid alt='...' /> */}
       <LazyLoadImage src={item.image}
        style={{height:"120px",width:"55%"}}
        alt="Image Loading..." 
        
      />
       <a>
         <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
       </a>
       </MDBRipple>
       <MDBCardBody>
       <MDBCardTitle style={{alignContent:"center"}}>{`${item.title.substring(0,25)}` }</MDBCardTitle>
       <MDBCardText>

         {`${item.description.substring(0,70)}`}
            
           {/* <span  onClick={()=>setShowMore({check: !check , text:"Show less"})}  style={{color:"salmon", fontWeight:"bold" ,cursor:"pointer", 
           border:"2px solid red", borderRadius:"10px"}}>

           {showMore.text}
           
           </span> */}

        </MDBCardText>
       
       <MDBBtn className='me-1' color='warning' onClick={()=>dispatch(addCart(item))} >
            {item.rating.text}
          </MDBBtn>
       
       <MDBBtn className='me-1'  href='#'>${item.price}</MDBBtn>
       
       
       </MDBCardBody>
       </MDBCard>
       
       
       </MDBCol>
       
      )}
      
    ) }
        
    </MDBRow>  
       </MDBContainer>
       
    

    
    </>
  )
  
  };
export default Product;