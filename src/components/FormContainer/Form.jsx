import { useState} from "react"
import { useCartContext } from "../../context/CartContext"
import { getFirestore, collection, addDoc} from "firebase/firestore";
import OrderId from "../OrderId/OrderId";
import Button from 'react-bootstrap/esm/Button';
import "./Form.css"



export const Form = ({ formData, errors, validateForm, onChange }) => {

    const [id, setId] = useState(null)
    const {cart, totalPrice, clearCart} = useCartContext ()
    const [ order, setOrder ] = useState({
        buyer: null,
        items: null,
        total: null        
    })

    const handleForm = (event) => {
        
        event.preventDefault()
        if(validateForm()) {
        generarOrden()
    }
    }

        
    const generarOrden = () => {
        
        setOrder({
            buyer: formData, 
            items: cart.map(({id, name, price})=>({id, name, price})), 
            total: totalPrice()
        })
       
        const db = getFirestore ()
        const queryCollection = collection (db, "orders")

        addDoc(queryCollection, order)
        .then(resp => setId(resp.id))
        .catch(error => console.log(error))
        .finally (()=> finalizeOrder())
    }

    const finalizeOrder = () => {
        clearCart()   
    }

    return (
        
        <> {(id !== null & order.total != null) ?

            <OrderId id={id} order={order}/>
        :
            <center>
                <form onSubmit={handleForm} className="contForm"> 
                    <label>Nombre:</label><br></br>

                    <input 
                        type='text' 
                        name='name' 
                        placeholder="Ingrese su nombre" 
                        onChange={(event)=>onChange(event)}
                        value={formData.name}
                    />                    
                    <br/>
                    {errors && errors.name && <div>{errors.name}</div>}
                    <br/>

                    <label>Telefono:</label><br></br>
                    <input 
                        type='number' 
                        name='phone' 
                        placeholder="Ingrese su telefono" 
                        onChange={(event)=>onChange(event)}
                        value={formData.phone}
                    />                    
                    <br/>
                    {errors && errors.phone && <span>{errors.phone}</span>}
                    <br/>
                    <label>Email:</label><br></br>
                    <input 
                        type='text' 
                        name='email' 
                        placeholder="Ingrese su e-mail" 
                        onChange={(event)=>onChange(event)} 
                        value={formData.email}
                    />
                    <br />
                    {errors && errors.email && <span>{errors.email}</span>}
                    <br/>

                    <label>Confirme su Email:</label><br></br>
                    <input 
                        type='text' 
                        name='confirmEmail' 
                        placeholder="Confirme su e-mail" 
                        onChange={(event)=>onChange(event)} 
                        value={formData.confirmEmail}
                    />
                    <br />
                    {errors && errors.confirmEmail && <span>{errors.confirmEmail}</span>}
                    <br/>
                    <Button type="submit" className="botonSubmit">Enviar</Button>
                </form>
            </center>
        }
        </>
        )
}


