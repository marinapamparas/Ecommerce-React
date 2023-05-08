import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';


export const ModalCent = ({id, order, props}) =>{
    const [modalShow, setModalShow] = useState(false);
    const launch = () => {
      setModalShow(true)}

      return (
        <>
        {launch()}
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow} onHide={() => setModalShow(false)}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            ¡FELICITACIONES!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h4>Su compra esta siendo procesada</h4>
              <p>Valor de tu compra: ${order.total}</p>
              <p>N° de orden generada: {id}</p>
          </Modal.Body>
          <Modal.Footer>
              <Link to={'/'}><Button variant="secondary">Volver al inicio</Button></Link>
          </Modal.Footer>
        </Modal>
        </>
      );
  }