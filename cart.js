import { useContext } from "react";
import { globalContext } from "./app";
import Navigation from "./navigation";
import Three from "./Three";
import StarRating from "./starrating";

function Cart(){
    const {cart,setcart}=useContext(globalContext);
    
    return(
        <div>
            <Navigation/>
            {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Your Cart</h2>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {cart.map((dataItem, index) => (
            <div key={index} className="card" style={{ width: '20rem', margin: '12px', display: 'flex', flexDirection: 'column' }}>
              <div className="card-body" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="card-title" style={{ textAlign: 'center' }}>
                  <img src={dataItem.image} alt="product" width={100} style={{ border: '10px', borderRadius: '50px', display: 'block', margin: '0 auto', height: '20vh' }} />
                  <br />
                  <h6>{dataItem.title}</h6>
                  <div>{dataItem.category}</div>
                  <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <StarRating rating={dataItem.rating.rate} /> ({dataItem.rating.count})
                    </div>
                  <div>${dataItem.price}</div>
                  <Three/>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      )}
        </div>
    );
}
export default Cart;