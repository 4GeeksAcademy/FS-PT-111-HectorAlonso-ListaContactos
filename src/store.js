export const initialStore=()=>{
  return{
    message: null,
    todos: [
       {
        "name":"hector",
        "phone":"",
        "email":"",
        "address": "",
        "id": "",  
      }		
    ],
    contactos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "setContacts":
      return{
        ...store,
          contactos: action.payload

      }
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
