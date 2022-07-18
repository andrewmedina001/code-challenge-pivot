import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
    const [adminTitle, setAdminTitle] = useState("Products");
    const [state, setState] = useState({
        name: "",
        age: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLoading: false,
        isError: false,
        errorMessage: "",
        isSuccess: false,
        successMessage: "",
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false,
        });
        setTimeout(() => {
            setState({
                ...state,
                isLoading: false,
                isSuccess: true,
                successMessage: "Successfully registered",
            });
        }, 2000);
    }

    return (
        <AdminContext.Provider value={{ adminTitle, setAdminTitle, handleChange, handleSubmit }}>
            {children}
        </AdminContext.Provider>
    );
}