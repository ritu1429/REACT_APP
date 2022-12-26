import React from 'react'
import '../../components/Shopping_App/Product.css'
import '../../components/Shopping_App/Wishlist.css'
import heartfill from '../../accets/heartfill.svg'

const Wishlist = ({ cartItemss, handleRemoveProduct }) => {
    return (
        <div className="wishlist-items">
            <div className='wishlist-items-headers'>
                Wishlist
            </div>
            {cartItemss.length === 0 && <div className='wishlist-items-headers'> Currently not any item of wishlist</div>}



            <div className='products'>
                {cartItemss.map((productItem) => (
                    <div className='card' key={productItem.id}>

                        <div onClick={() => handleRemoveProduct(productItem.id)}>

                            <div><img src={heartfill} /></div>

                        </div>
                        {/* <div>
                            <img className='product-image' src={productItem.image} alt={productItem.name} />
                        </div> */}
                        <div>
                            <h3 className='product-name'>
                               {productItem.id} {productItem.name}
                            </h3>
                        </div>
                       
                    </div>
                ))}
            </div>
 </div>
    )
}

export default Wishlist