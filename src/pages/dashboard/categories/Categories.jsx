import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../contexts/AdminContext";

export const Categories = () => {

    const { setAdminTitle } = useContext(AdminContext);
    const [listOfCategories, setListOfCategories] = useState([
        {
            categoryId: 1,
            categoryName: 'Pantalones',
            categoryDescription: 'Product Brand',
        },
        {
            categoryId: 2,
            categoryName: 'Zapatillas',
            categoryDescription: 'Product Brand',
        },
        {
            categoryId: 3,
            categoryName: 'Sudaderas',
            categoryDescription: 'Product Brand',
        },
        {
            categoryId: 4,
            categoryName: 'Camisas',
            categoryDescription: 'Product Brand',
        }
    ]);
    const [category, setCategory] = useState({
        categoryName: '',
        categoryDescription: '',
    });

    useEffect(() => {
        setAdminTitle('Categories');
    }, []);

    const createProduct = async (event) => {
        event.preventDefault();
        try {
            // const response = await PostProduct(product);
            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        return setProduct({ ...product, [name]: value });
    };

    return (
        <div className='Products'>
            <h4 className='Products-subtitle'>All categories</h4>
            <div className='Products-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Product description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOfCategories.map(category => (
                                <tr key={category.categoryId}>
                                    <td>{category.categoryName}</td>
                                    <td>{category.categoryDescription}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <h4 className='Products-subtitle'>Create product</h4>
            <form className='Products-create-form' onSubmit={createProduct}>
                <div className="form-group">
                    <label htmlFor="productName">Product name</label>
                    <input
                        type="text"
                        name='productName'
                        id='productName'
                        value={category.categoryName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Product description</label>
                    <input
                        type="text"
                        name='productDescription'
                        id='productDescription'
                        value={category.categoryDescription}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group'>
                    <button className='Products-create-button'>Create category</button>
                </div>
            </form>
        </div>
    )
}