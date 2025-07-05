import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{/*<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>}
					{<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>*/}
				<div className="ml-auto">
					<Link to="/AddContacto">
						<button className="btn btn-primary">añadir contacto</button>
					</Link>
					<Link to="/Lista">
						<button className="btn btn-primary" onClick={() => {window.location.href = '/Lista'}}>lista</button>
					</Link>
					<Link to="/EditarContacto">
						<button className="btn btn-primary">EditarContacto</button>
					</Link>
					<Link to="/Home">
						<button className="btn btn-primary">Home</button>
					</Link>
				</div>	
			</div>
		</nav>
	);
};