import { useState } from "react"


function InscriptionForm(){

    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [stateInfo,setStateInfo] = useState();
    const [city,setCity] = useState();
    const [suburb,setSuburb] = useState();
    const [street,setStreet] = useState();
    const [logo,setLogo] = useState();

    const handleSubmit =() =>{
        return(
            <>
            console.log(response);
            </>
        )
    }

    return (
        <>
        <form className="ficha">
            <label>
                <p>Nombre:</p>
                <input type="text"
                value={name}
                onChange={({target : {value}}) => setName(value)}
                >
                </input>
            </label>

            <label>
                <p>Descripción:</p>
                <input type="text-area"
                value={description}
                onChange={({target : {value}}) => setDescription(value)}
                >
                </input>
            </label>

            <label>
                <p>Estado:</p>
                <input type="text"
                value={stateInfo}
                onChange={({target : {value}}) => setStateInfo(value)}
                >
                </input>
            </label>
            
            <label>
                <p>Ciudad:</p>
                <input type="text"
                value={city}
                onChange={({target:{value}}) => setCity(value)}
                >
                </input>
            </label>

            <label>
                <p>Colonia:</p>
                <input type="text"
                value={suburb}
                onChange={({target : {value}}) => setSuburb(value)}
                >
                </input>
            </label>

            <label>
                <p>Calle:</p>
                <input type="text"
                value={street}
                onChange={({target : {value}}) => setStreet(value)}
                >
                </input>
            </label>

            <label>
                <p>Agrega un logo:</p>
                <input type="file"
                value={logo}
                onChange={({target : {value}}) => setLogo(value)}
                >
                </input>
            </label>

            <button
            onSubmit={({target : {value}}) => handleSubmit(value)}
            >Envíar información</button>

        </form>
        </>
    )




};

export default InscriptionForm;