import './Home.scss'
import dress from '@assets/dress.png'
import { PublicHeader } from '@components/common/PublicHeader/PublicHeader';
import { ProductCard } from '@components/products/productCard/ProductCard';
import { GetAllProducts } from '@services/ProductsServices';
import { useEffect, useState } from 'react';

export const Home = () => {

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetAllProducts();
                if (response.success) {
                    setListOfProducts(response.content);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [listOfProducts]);

    // 

    useEffect(()=>{
        fetch('https://tareas-codigo-and.herokuapp.com/autorizacion/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                correo:"gmail03@gmail.com",
                password:"password03"
            })
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
    },[])

    // 

    return (
        <>
            <PublicHeader />

            <div className='NewHero'>
                <div className="u_wrapper">
                    <div className='NewHero-container'>
                        <div className='NewHero-content'>
                            <p className='NewHero-text'>Absolutely hot collections <span>🔥</span></p>
                            <h1 className='NewHero-title'>The Best Place To Find And Buy Amazing <span>Products</span></h1>
                            <p className='NewHero-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptatum optio accusantium molestiae saepe.</p>
                            <div className='NewHero-button'>
                                <button>Explore Now</button>
                            </div>
                            <div className='NewHero-indicators'>
                                <div className='NewHero-indicator-container'>
                                    <div className='NewHero-indicator-number'>20k+</div>
                                    <div className='NewHero-indicator-text'>Collections</div>
                                </div>
                                <div className='NewHero-indicator-container'>
                                    <div className='NewHero-indicator-number'>16k</div>
                                    <div className='NewHero-indicator-text'>Users</div>
                                </div>
                            </div>
                        </div>
                        <div className='NewHero-art'>
                            <img src={dress} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='Show-products'>
                <div className="u_wrapper">
                    <div className="Show-products-container">
                        {
                            [1, 2, 3, 4, 5].map((product, index) => <ProductCard key={index} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}