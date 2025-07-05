import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters


export const EditarContacto = () => {
    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");
    const[address, setAddress] = useState("");
    const singleContacto = store.contactos?.find(contactos => contactos.id === parseInt(id));

    console.log(singleContacto)
    
	useEffect(() =>{ 

        if (singleContacto){
            setName(singleContacto.name),
            setPhone(singleContacto.phone)
            setEmail(singleContacto.email)
            setAddress(singleContacto.address)
        }
	},[]);

    const GuardarContacto = async () =>{
        const ActualizarContacto =
            {
                "name": name,
                "phone": phone,
                "email": email,
                "address": address,
                "id": parseInt(id),
            }		
		let result =await fetch(`https://playground.4geeks.com/contact/agendas/HectorAgenda/contacts/${id}`,{
			method: "PUT",
			body: JSON.stringify(ActualizarContacto),
			headers: {"content-type":"application/json"}
        })
            let data = await result.json();
            dispatch({
                type: "setContacts",
                payload: data.contacts
        })
		};

            const eliminarContacto = async () => {
                const confirmar = window.confirm("¿seguro de eliminar este contacto?")
                if(confirmar === true){
                    console.log("el contacto fue eliminado")
                    let result =await fetch(`https://playground.4geeks.com/contact/agendas/HectorAgenda/contacts/${id}`,{
		            method: "DELETE",
                    })
                }else if(!confirmar){
                    console.log("no se elimina")
                    return   
                }
            }
      return(
        <div>
            <form id="añadir contacto">
                <p>Nombre</p>
                <label htmlFor="Nombre"></label>
                <input type="text" id="Nombre" name="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <p>Telefono</p>
                <label htmlFor="Telefono"></label>
                <input type="number" id="Telefono" name="Telefono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br /><br />
                <p>Email</p>
                <label htmlFor="Email"></label>
                <input type="Email" id="Email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <p>Direccion</p>
                <label htmlFor="Direccion"></label>
                <input type="text" id="Direccion" name="direccion" value={address} onChange={(e) => setAddress(e.target.value)} />
                <br />
                <div>
                    <button className="btn btn-dark" onClick={(e)=> {e.preventDefault();GuardarContacto();}}>Guardar</button>
                    <button className="btn btn-danger" onClick= { ()=> {eliminarContacto()}}>eliminar</button>

                </div>
            </form>   
        </div>
    )
}