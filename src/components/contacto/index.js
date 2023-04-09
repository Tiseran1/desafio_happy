import './contacto.css'
import Button from 'react-bootstrap/Button';

export default () => {
    return (
        <div className="contacto-class"> 
            <h2> Qué tipo de hacha buscas? </h2>
            <input
                className="form-control me-2 my-3"
                placeholder="Correo" 
            />
            <input
                className="form-control me-2 my-3"
                placeholder="Uso que ke dsarás del hacha " 
            />
            <Button variant="danger">Buscar</Button>
            </div>
    )

}