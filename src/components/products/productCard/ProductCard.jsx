import './ProductCard.scss'
import ropa from '@assets/ropa.jpg'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'

const ProductCard = ({ product }) => {

    const [likedProduct, setLikedProduct] = useState(true);

    return (
        <div className='Card'>
            <div className="Card-header">
                <img className='Card-product-image' src={ropa} alt="" />
                <span className='Card-product-name'>Vestido Loa</span>
                <div className='Card-product-icon'>
                    {
                        likedProduct ? <AiFillHeart className='Card-product-heart-liked' /> : <AiOutlineHeart className='Card-product-heart' />
                    }
                </div>
            </div>
            <div className="Card-body">
                <div className='Card-product-description'>
                    <h3>Vestido Loa</h3>
                    <p>Product Brand</p>
                </div>
                <div className='Card-product-price'>
                    <button className='Card-price-button'>$60</button>
                </div>
            </div>
        </div>
    )
}

export { ProductCard };