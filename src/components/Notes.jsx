import { useContext } from "react";
import { AppContext } from "../App";

const Notes = () => {
    const {userName} = useContext(AppContext)
    
    return ( <div>
        <h1>Hellos this is where the notes go {userName} </h1>
    </div> );
}
 
export default Notes;

// const fetchTours = async () => {
//     setLoading(true)

//     try {
//       const response = await fetch(url)
//       const tours = await response.json()
//       setLoading(false)
//       setTours(tours)
//     } catch(error) {
//       setLoading(false)
//       console.log(error)
//     }
  
//   }

//   useEffect(() => {
//     fetchTours()
//   },[])
//   if (loading) {
//     return <Loading />
//   }