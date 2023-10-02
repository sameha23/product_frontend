import React from 'react'

const Card = ({item, openModal, setDetails, addToCart}) => {
    const baseUrl = process.env.REACT_APP_API_URL;
  return (
   <>
     <div className="product-card">
        <div className="product-card-img">
            <img src={baseUrl+item?.image} alt="Red MI Note 8" style={{ height: 198 }} />
        </div>
        <div className="product-card-body">
            {/* <p className="product-brand">MI</p> */}
            <h5 className="product-name">
            <p>{item?.name}</p>
            </h5>
            <div>
            <span className="selling-price">${item?.price}</span>
            {/* <span className="original-price">${item?.price}</span> */}
            </div>
            <div className="mt-2">
            <a onClick={() => addToCart(item)} className="btn btn-info mx-2">
                Add To Cart
            </a>
       
            <a onClick={() => {openModal(); setDetails(item)}} className="btn btn-success">
                {" "}
                View{" "}
            </a>
            </div>
        </div>
    </div>

    
   </>
    
  )
}

export default Card