import Robot from "../Robot/robot";
import Carrousel from "../carrousel/carrousel";
import './inicio.css';

export default function Inicio(){
    return (
        <div className="sesion">
          <div className="content">
            <div className="nvo">
              <Robot></Robot>
            </div>
            <div className="contentForm">
              <div className="contenedor">
                    <p>NVO</p>
                    <ul>
                        <li><b>Conectividad</b></li>
                        <li><b>Software</b></li>
                        <li><b>Electronica</b></li>
                    </ul>
                </div>
                <Carrousel />
            </div>
          </div>
          <span className="copyright">&copy; 2015 Todos los derechos reservados NVO</span>
        </div>
      );
}