import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../contexts/AdminContext";

import { GetAllProducts,PostProduct } from "../../../services/ProductsServices";
import { getCategories } from "../../../services/CategoriesServices";
import './Products.scss';

export const Products = () => {
    const { setAdminTitle } = useContext(AdminContext);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [listOfCategories, setListOfCategories] = useState([]);
    const [product, setProduct] = useState({
        productoNombre: '',
        productoDescription: '',
        productoPrecio: 0,
        productoImagen: '',
        categoriaId: '',
    });

    const [bandera, setBandera] = useState(false);

    console.log(product,"hola")

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCategories();
            setListOfCategories(response.content);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setAdminTitle('Products');
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
    }, [bandera])

    const createProduct = async (event) => {
        event.preventDefault();
        try {
            const response = await PostProduct(product);
            if (response.success) {
                setBandera(!bandera);
                setProduct({
                    productoNombre: '',
                    productoDescription: '',
                    productoPrecio: 0.00,
                    productoImagen: '',
                    categoriaId: 0,
                })
                console.log('El producto se ha creado correctamente.')
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'productoPrecio') {
            return setProduct({ ...product, [name]: parseFloat(value) });
        }else if(name === 'categoriaId'){
            return setProduct({ ...product, [name]: parseInt(value) });
        }else{
            return setProduct({ ...product, [name]: value });
        }
    };

    return (
        <div className='Products'>
            <h4 className='Products-subtitle'>All products</h4>
            <div className='Products-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Product Image</th>
                            <th>Product Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOfProducts.length>0 && listOfProducts.map(product => (
                                <tr key={product.productId}>
                                    <td>{product.productoNombre}</td>
                                    <td>{product.productoDescription}</td>
                                    <td>{product.productoPrecio}</td>
                                    <td>{product.productoImagen}</td>
                                    <td>{product.categoriaId}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <h4 className='Products-subtitle'>Create product</h4>
            <form className='Products-create-form' onSubmit={createProduct}>
                <div className="form-group">
                    <label htmlFor="productoNombre">Product Name</label>
                    <input
                        type="text"
                        name='productoNombre'
                        id='productoNombre'
                        value={product.productoNombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productoDescription">Product Description</label>
                    <input
                        type="text"
                        name='productoDescription'
                        id='productoDescription'
                        value={product.productoDescription}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productoPrecio">Product Price</label>
                    <input
                        type="number"
                        min={0}
                        step={0.1}
                        name='productoPrecio'
                        id='productoPrecio'
                        value={product.productoPrecio}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="productoImagen">Product Image</label>
                    <input
                        type="text"
                        name='productoImagen'
                        id='productoImagen'
                        value={product.productoImagen}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoriaId">Product Category</label>
                    {/* <input
                        type='text'
                        name='categoriaId'
                        id='categoriaId'
                        value={product.categoriaId}
                        onChange={handleInputChange}
                    /> */}
                    <select
                        name="categoriaId"
                        id="categoriaId"
                        value={product.categoriaId}
                        onChange={handleInputChange}
                    >
                        <option value="">Elegir Categoria</option>
                        {
                            listOfCategories.map((category,index)=>(
                                <option key={index} value={category.categoriaId} >{category.categoriaNombre}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <button className='Products-create-button'>Create product</button>
                </div>
            </form>
        </div>
    )
}