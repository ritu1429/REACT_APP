import React, { useState } from 'react'
import '../Shopping_App/Product.css'
import heart from '../../accets/heart.svg'
import heartfill from '../../accets/heartfill.svg'
import Pagination from '../Shopping_App/Pagination'

const Product = ({ productItems, handleAddProduct, cartItems }) => {
   
    return (
        <>
            <div className='products'>
                {productItems.map((productItem) => (
                    <div className='card' key={productItem.id}>

                        <div onClick={() => handleAddProduct(productItem)}>
                            {cartItems.findIndex((x) => x === productItem.id) >= 0 ? (
                                <div><img src={heartfill} /></div>
                            ) : (
                                <div><img src={heart} /></div>
                            )}
                        </div>
                        {/* <div>
                        <img className='product-image' src={productItem.image} alt={productItem.name} />
                    </div> */}
                        <div>
                            <h3 className='product-name'>
                                {productItem.name}
                            </h3>
                        </div>


                    </div>
                ))}
            </div>
           
        </>
    )
}

export default Product