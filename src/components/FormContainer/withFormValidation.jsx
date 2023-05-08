import { useState } from "react";

export const withFormValidation = (WrappedComponent) =>{ 
    
    const WithFormValidation = (props) => {

        const [errors, setError] = useState({})
        
        const emailValidation= (email) => {
            
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
            return regex.test(email) ?  true :  false;
        }

        const validateForm = () => {
            let newErrors = {}         
            let isValid = true
            
            if (!props.formData.name) {
                newErrors.name = 'El nombre es obligatorio'  
                isValid = false              
            }
            if (!props.formData.phone) {
                newErrors.phone = 'El teléfono es obligatorio'  
                isValid = false              
            }
            
            if (!props.formData.confirmEmail) {
                newErrors.confirmEmail = 'Confirmar el mail es obligatorio'                
                isValid = false
            }
            if (props.formData.confirmEmail !== props.formData.email) {
                newErrors.confirmEmail = 'El mail debe ser igual al anterior'                
                isValid = false
            }
            if(!emailValidation(props.formData.email)) {
                newErrors.email = 'El e-mail no es valido'                
                isValid = false
            }
    
            
            setError(newErrors)     
            return isValid    
        }
        
        
        return (
            <WrappedComponent {...props} errors={errors} validateForm={validateForm} /> 
        )
        
        }
        
        return WithFormValidation
    
}