import './contacto.css'
import Button from 'react-bootstrap/Button';

export default () => {
    return (
        <div className="contacto-class"> 
            <h2> Qué tipo de hacha buscas? </h2>
            <p>Correo</p>
            <input
                className="form-control me-2 my-3"
                placeholder="Correo" 
            />
            <p>Descripción</p>
            <input
                className="form-control me-2 my-3"
                placeholder="Uso que ke dsarás del hacha " 
            />
            <Button variant="danger">Buscar</Button>
            </div>
    )

}