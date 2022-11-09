import Carrousel from "../carrousel/carrousel";
import Robot from "../Robot/robot";
import './inicio.css';

export default function Inicio(){
    return (
        <div className="sesion">
          <div className="content">
            <div className="nvo">
              <Robot></Robot>
            </div>
            <div className="contentForm">
                <Carrousel />
            </div>
          </div>
          <span className="copyright">&copy; 2015 Todos los derechos reservados NVO</span>
        </div>
      );
}