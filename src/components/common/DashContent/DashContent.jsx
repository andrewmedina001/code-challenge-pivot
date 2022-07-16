import { useEffect, useState } from 'react'
import { PostProduct } from '@services/ProductsServices';
import './DashContent.scss'


const DashContent = () => {

    const [listOfProducts, setListOfProducts] = useState([
        {
            productId: 1,
            productName: 'Vestido Loa',
            productDescription: 'Product Brand',
            productPrice: 45.90,
            productImage: 'https://www.pngitem.com/pimgs.png',
            productCategory: 'Ropa',
        },
        {
            productId: 2,
            productName: 'Blue Shoes Prime',
            productDescription: 'Product Brand',
            productPrice: 20.00,
            productImage: 'https://www.pngitem.com/pimgs.png',
            productCategory: 'Zapatos',
        }
    ]);

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
    }, [])

    const [product, setProduct] = useState({
        productName: '',
        productDescription: '',
        productPrice: 0,
        productImage: '',
        productCategory: '',
    });

    const createProduct = async (event) => {
        event.preventDefault();
        try {
            const response = await PostProduct(product);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'productPrice') {
            return setProduct({ ...product, [name]: parseFloat(value) });
        }
        return setProduct({ ...product, [name]: value });
    };

    return (
        <div className='DashContent'>
            <div className='DashContent-container'>
                <div className='DashContent-title'>Products</div>
                <div className='DashContent-products'>
                    <h4 className='DashContent-products-title'>All products</h4>
                    <table className='DashContent-products-table'>
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Product description</th>
                                <th>Product price</th>
                                <th>Product image</th>
                                <th>Product category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listOfProducts.map(product => (
                                    <tr key={product.productId}>
                                        <td>{product.productName}</td>
                                        <td>{product.productDescription}</td>
                                        <td>{product.productPrice}</td>
                                        <td>{product.productImage}</td>
                                        <td>{product.productCategory}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='DashContent-create-product'>
                    <h4 className='DashContent-create-product-title'>Create product</h4>
                    <form className='DashContent-create-product-form' onSubmit={createProduct}>
                        <div className="form-group">
                            <label htmlFor="productName">Product name</label>
                            <input
                                type="text"
                                name='productName'
                                id='productName'
                                value={product.productName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productDescription">Product description</label>
                            <input
                                type="text"
                                name='productDescription'
                                id='productDescription'
                                value={product.productDescription}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Product price</label>
                            <input
                                type="number"
                                min={0}
                                step={0.1}
                                name='productPrice'
                                id='productPrice'
                                value={product.productPrice}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productImage">Product image</label>
                            <input
                                type="file"
                                name='productImage'
                                id='productImage'
                                value={product.productImage}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Product category</label>
                            <input
                                type='text'
                                name='productCategory'
                                id='productCategory'
                                value={product.productCategory}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='form-group'>
                            <button className='create-product-button'>Create product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { DashContent };