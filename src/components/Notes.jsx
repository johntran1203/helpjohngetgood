import { useContext } from "react";
import { AppContext } from "../App";

const Notes = () => {
    const {userName} = useContext(AppContext)
    
    return ( <div>
        <h1>Hellos this is where the notes go {userName} </h1>
    </div> );
}
 
export default Notes;