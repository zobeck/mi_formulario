import "./App.css";
import axios from "axios";
import {useState} from "react";

function App() {
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  //Hacemos la conexión con la API
  //En este ejemp´lo estamos usando Axios
  //Instala axios ejecutando npm i axios en tu consola, asegurate de estar dentro de tu carpeta
  //del proyecto
 // Esta constante maneja el envio de la img al EP
 //Tambien pueden nombrarla hamdleSubmit
  const enviarInfo = (e) =>{
    e.preventDefault();
    setError('');

    if (image.trim() === '') {
      setError('archivo invalido');
      return(
          <>
          <div> 
              Por favor elige una imágen
          </div>
          </>
      );
  }
  const bodyParameters = {
    urlImagen: image
};

axios.post(`https://mi-primer-formulario-b9dcc-default-rtdb.firebaseio.com/imagen`, 
bodyParameters,
)
.then((response) => {
    console.log(response);
    if(response.statusText === "OK"){
        setSuccess(true);
    }            
});


  }

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
            value={image}
            onClick= {(e) =>
              setImage(e.currentTarget.value)}
            onChange={(e) => {
              subirImagen(e);}
           
        
            
             // => setLink(event.currentTarget.value)}
               // placeholder="Ingresa el link de tu video"/
          }
          ></input>

          <br></br>
             <button
             className="boton"
             onClick={enviarInfo}
             >
               Guardar imagen
               
             </button>
        
        </form>
      </main>
    </div>
  );
}

export default App;
