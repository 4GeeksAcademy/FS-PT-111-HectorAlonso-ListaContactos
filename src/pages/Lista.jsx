import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.


export const Lista = () => {
    const { store, dispatch } = useGlobalReducer()
    const guardarContactos = async () => {
        let result = await fetch("https://playground.4geeks.com/contact/agendas/HectorAgenda/contacts");
		let data = await result.json();
        dispatch({
            type: "setContacts",
            payload: data.contacts
        })
        console.log("esta es la lista de "+ JSON.stringify(data))
    }
    useEffect(() =>{
            guardarContactos();
        },[]);

    const navigate = useNavigate();
        console.log(store.contactos)
    return(
        <div>
            {store.contactos.map((item,index)=>{
				return(
					<div key={index}>
					    <p><strong>{item.name} </strong> id: <strong> {item.id}</strong></p>
                        <button className="btn btn-dark" onClick= { () => navigate(`/editarContacto/${item.id}`)}>editar</button>
				    </div>
				)
            }
        )}
        </div>  
    )
}