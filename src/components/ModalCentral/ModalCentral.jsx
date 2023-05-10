import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import './ModalCentral.css'


export const ModalCentral = ({id, order, ...props}) => {
    
    let orderTotal = order;
        if (typeof order === 'object') {
            orderTotal = order.total;
        }

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
                    <p>Valor de tu compra: ${orderTotal}</p>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Link to={'/'}><Button variant="secondary" className="botonModal">Volver al inicio</Button></Link>
                </Modal.Footer>
            </Modal>

        </>
    );
  }