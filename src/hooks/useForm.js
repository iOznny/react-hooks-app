import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // Change value input's
    const handleInputChange = ({ target }) => {
        setValues({
            ...values, 
            [target.name]: target.value
        });
    }

    return [values, handleInputChange];
}
