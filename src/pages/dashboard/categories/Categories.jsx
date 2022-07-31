import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../contexts/AdminContext";
import { getCategories } from "../../../services/CategoriesServices";
import { postCategory } from "../../../services/CategoriesServices";

export const Categories = () => {

    const { setAdminTitle } = useContext(AdminContext);
    const [listOfCategories, setListOfCategories] = useState([]);
    const [category, setCategory] = useState({
        categoriaNombre:"",
        categoriaDescription:""
    });
    const[bandera,setBandera]=useState([false])
    console.log(category);

    useEffect(() => {
        setAdminTitle('Categories');
    }, []);
    
    useEffect(() => {
        const fetchData=async()=>{
            const response=await getCategories();
            setListOfCategories(response.content);
        }
        fetchData();
    }, [bandera]);

    const createCategory = async (event) => {
        event.preventDefault();
        try {
            const response=await postCategory(category)
            if(response.success){
                setBandera(!bandera)
                setCategory({
                    categoriaNombre:"",
                    categoriaDescription:""
                })
                console.log('La categoria se ha creado correctamente.')
            }else{
                alert('La categoria NO se puedo crear.')
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        return setCategory({ ...category, [name]: value });
    };

    return (
        <div className='Products'>
            <h4 className='Products-subtitle'>All categories</h4>
            <div className='Products-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Category Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOfCategories.length>0 && listOfCategories.map(category => (
                                <tr key={category.categoriaId}>
                                    <td>{category.categoriaNombre}</td>
                                    <td>{category.categoriaDescription}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <h4 className='Products-subtitle'>Create product</h4>
            <form className='Products-create-form' onSubmit={createCategory}>
                <div className="form-group">
                    <label htmlFor="productName">Category name</label>
                    <input
                        type="text"
                        name='categoriaNombre'
                        id='categoriaNombre'
                        value={category.categoriaNombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Category Description</label>
                    <input
                        type="text"
                        name='categoriaDescription'
                        id='categoriaDescription'
                        value={category.categoriaDescription}
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