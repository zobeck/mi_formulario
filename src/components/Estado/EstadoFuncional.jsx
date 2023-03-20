//import { useState } from "react";
import "../../styles/App.css";

function FichaHack() {
  //const [hack, setHack] = useState("");
  return (
    <>
      <form className="ficha">
        <label>
          <p>Nombre:</p>
          <input type={Text}></input>
        </label>

        <label>
         <p>Edad:  </p>
          <input type={Number}></input>
        </label>
      
        <label>
          <p>País:  </p>
          <select name="Selecciona tu país" defaultValue={""}>
            <option value="pais1">México</option>
            <option value="pais2">Colombia</option>
            <option value="pais3">Venezuela</option>
            <option value="pais4">Brazil</option>
          </select>
        </label>

        <button>Guardar datos</button>
       
      </form>
    </>
  );
}
export default FichaHack;
