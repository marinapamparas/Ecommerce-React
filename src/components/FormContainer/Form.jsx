


export const Form = ({ formData, errors, validateForm, onChange }) => {

    /**
     * If the form is valid, then log 'enviar formulario' to the console.
     */
    const hanleSubmit = (event) => {
        event.preventDefault()
        
        if(validateForm()){
            console.log('enviar formulario')
        }
    }

    return (
        <center>
            <form onSubmit={hanleSubmit} > 
                <label>Nombre:</label><br></br>

                <input 
                    type='text' 
                    name='nombre' 
                    placeholder="ingrese el nombre" 
                    onChange={(e)=>onChange(e)}
                    value={formData.nombre}
                />                    
                <br/>
                {errors && errors.nombre && <span>{errors.nombre}</span>}
                <br/>

                <label>Telefono:</label><br></br>
                <input 
                    type='number' 
                    name='telefono' 
                    placeholder="ingrese su telefono" 
                    onChange={(e)=>onChange(e)}
                    value={formData.telefono}
                />                    
                <br/>
                {errors && errors.telefono && <span>{errors.telefono}</span>}
                <br/>
                <label>Email:</label><br></br>
                <input 
                    type='text' 
                    name='email' 
                    placeholder="ingrese el e-mail" 
                    onChange={(e)=>onChange(e)} 
                    value={formData.email}
                />
                <br />
                {errors && errors.email && <span>{errors.email}</span>}
                <br/>

                <label>Confirme su Email:</label><br></br>
                <input 
                    type='text' 
                    name='email' 
                    placeholder="re ingrese su e-mail" 
                    onChange={(e)=>onChange(e)} 
                    value={formData.email}
                />
                <br />
                {errors && errors.email && <span>{errors.email}</span>}
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </center>
    )
}
