import React, {useState, useEffect} from "react";

export const AddContacto = () => {
    const[Agenda, setAgenda]= useState("");
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");
    const[address, setAddress] = useState("");

    const getAgenda = async () => {
		let resultado = await fetch
        ("https://playground.4geeks.com/contact/agendas/HectorAgenda");
		let data = await resultado.json();
		setAgenda(data.slug);
		console.log(data.slug);
        
	}
	useEffect(() =>{
		getAgenda();
	},[]);

    const nuevoContacto = async () =>{
        const AñadirContacto =
            {
                "name": name,
                "phone": phone,
                "email": email,
                "address": address,
                "id": 0,
            }		
		await fetch("https://playground.4geeks.com/contact/agendas/HectorAgenda/contacts",{
			method: "POST",
			body: JSON.stringify(AñadirContacto),
			headers: {"content-type":"application/json"}
		});
		getAgenda();
	}  
      return(
        <div>
            <form id="añadir contacto">
            <h1>Añadir contacto a {Agenda}</h1>
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
                <button onClick={nuevoContacto}>Guardar</button>
            </form>   
        </div>
    )
}