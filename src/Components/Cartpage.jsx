import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart,decrease,increase } from '../features/counter/CartSlice';
import { useLocation } from 'react-router-dom';


function Cartpage() {

const {cart,total,price} = useSelector((state)=>state.allCart)
   const dispatch = useDispatch();
     
         
  return (
    <div>
      
    <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cart.length} items</h5>
          </div>
          <div className="card-body">
             {cart.map((item)=>(
              <div key={item.id} className="row">
              <hr className='my-4'/>
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={item.image}
                    className="w-100" alt='xyz' />
                  <a href="#!">
                    <div className="mask" style={{backgroundcolor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
                
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                
                <p><strong>{item.title}</strong></p>
                {/* <p>Type: {item.category} </p> */}
                <p>Rating: {item.rating.rate}</p>

                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                  title="Remove item"
                  onClick={()=>dispatch(removeCart(item))}>
                  <i className="fas fa-trash"></i>
                </button>
                                
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                
                <div className="d-flex mb-4" style={{maxwidth:"300px"}} >
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2"
                    onClick={()=>dispatch(decrease(item))}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <div data-mdb-input-init className="form-outline">
                    <input id="form1" min="0" name="quantity"  type="number" className="form-control" />
                    <label className="form-label" for="form1">{item.rating.count}</label>
                  </div>

                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2"
                     onClick={()=>dispatch(increase(item))}  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                

                
                <p className="text-start text-md-center">
                  <strong>${item.price}</strong>
                </p>
                             
              </div>
            </div>





              ) )
              

             }
             <hr className='my-4'/>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Quantity
                <span>{total}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Delhivery</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>${price.toFixed(2)}</strong></span>
              </li>
            </ul>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </div>
  )
}

export default Cartpage