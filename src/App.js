import "./App.css";
//import axios from "axios";
//import {useState} from "react";



function App(){

  //Definimos el evento en el que se va a subir la imágen
  //el console.log lo pueden eliminar despúes es solo
  //para poder checar en la consola que todo esta fincionando
  const subirImagen = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertB64(file);
    console.log(base64);
  };

  // Aquí es dónde transformamos el archivo
  // a base64
  const convertB64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //Definimos el tipo de input como file
  return (
    <div className="App">
      <main>
        <form>
          <p>Elige la imagen que quieres subir</p>
          <input
            type="file"
            onChange={(e) => {
              subirImagen(e);}
 
          }
          ></input>

          <br></br>
             <button
             className="boton"
             //onClick={enviarInfo}
             >
               Guardar imagen
               
             </button>
        
        </form>
      </main>
    </div>
  );
}

export default App;
