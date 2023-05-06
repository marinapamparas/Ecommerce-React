import { useState } from "react"
import { withFormValidation } from "./withFormValidation"
import { Form } from "./Form"

const FormWithValidation = withFormValidation(Form)

export const FormContainer = ()=> {
    const [ formData, setFormData ] = useState({name: '', phone:'', email: '', confirmEmail: ''})

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }   

    return (
        <div>
            <FormWithValidation formData={formData} onChange={onChange} />
        </div>
    )
}
