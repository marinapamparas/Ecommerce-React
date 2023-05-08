import { useState} from "react"
import { useCartContext } from "../../context/CartContext"
import { getFirestore, collection, addDoc} from "firebase/firestore";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import "./Formulario.css"



export const Formulario = ({ formData, errors, validateForm, onChange }) => {
    
    const [id, setId] = useState(null)
    const {cart, totalPrice, clearCart} = useCartContext ()
    const [modalShow, setModalShow] = useState(false);
    

    const [ order, setOrder ] = useState({
        buyer: null,
        items: null,
        total: null        
    })
    
    const handleForm = (event) => {
        
        
        event.preventDefault()

        if(validateForm()) {
            if(cart.length > 0){
            generarOrden()
            setModalShow(true)   
            }
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
        .finally (()=> clearCart())
    }

    function ModalCentral (props) {
        return (
            <> 
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    keyboard={false}
                    className="modalEntero"
                >
                    <Modal.Header className="modalHeader">
                    <Modal.Title id="contained-modal-title-vcenter">
                    ¡FELICITACIONES!
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <h4>Su compra esta siendo procesada</h4><br></br>
                        <p>Valor de tu compra: ${order.total}</p>
                        <p>N° de orden generada: {id}</p>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <Link to={'/'}><Button variant="secondary" className="botonModal">Volver al inicio</Button></Link>
                    </Modal.Footer>
                </Modal>
   
            </>
        );
      }
      

    return (
        <center>
            <Form onSubmit={handleForm} className="contForm"> 
                {errors && errors.name && <div className="text-danger">{errors.name}</div>}
                <InputGroup className="mb-3 + inputGroup">
                    <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                    <Form.Control
                    type="text"
                    name='name'
                    placeholder="Ingrese su nombre"
                    aria-label="Ingrese su nombre"
                    aria-describedby="basic-addon1"
                    onChange={(event)=>onChange(event)}
                    value={formData.name}
                    
                    />

                </InputGroup>
                
                {errors && errors.phone && <div className="text-danger">{errors.phone}</div>}
                <InputGroup className="mb-3 + inputGroup">
                    <InputGroup.Text id="basic-addon1">Teléfono</InputGroup.Text>
                    <Form.Control
                    type='number'
                    name='phone'
                    placeholder="Ingrese su telefono"
                    aria-label="Ingrese su telefono"
                    aria-describedby="basic-addon1"
                    onChange={(event)=>onChange(event)}
                    value={formData.phone}
                    />

                </InputGroup>
                
                {errors && errors.email && <div className="text-danger">{errors.email}</div>}
                <InputGroup className="mb-3 + inputGroup">
                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    <Form.Control
                    type='text' 
                    name='email'
                    placeholder="Ingrese su e-mail"
                    aria-label="Ingrese su e-mail"
                    aria-describedby="basic-addon1"
                    onChange={(event)=>onChange(event)}
                    value={formData.mail}
                    
                    />
                   
                </InputGroup>
                                
                {errors && errors.confirmEmail && <div className="text-danger">{errors.confirmEmail}</div>}
                <InputGroup className="mb-3 + inputGroup">
                    <InputGroup.Text id="basic-addon1">Confirmar email</InputGroup.Text>
                    <Form.Control
                    type='text' 
                    name='confirmEmail' 
                    placeholder="Confirme su e-mail"
                    aria-label="Confirme su e-mail"
                    aria-describedby="basic-addon1"
                    onChange={(event)=>onChange(event)}
                    value={formData.confirmEmai}
                    
                    />
                    
                </InputGroup>
                               
                <br></br>

                <Button type='submit' className="botonSubmit">Realizar compra</Button>
                
                
                <ModalCentral show={modalShow} onHide={() => setModalShow(false)}/>
                
            </Form>

           
        </center>
    )
}


// onClick={() => (formData != undefined) ? setModalShow(true) : setModalShow (false)}