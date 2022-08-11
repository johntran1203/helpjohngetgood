import { useNavigate } from "react-router-dom";

const About = () => {
    let navigate = useNavigate()
    return ( <div>
        <h1>Hello, my name is John Tran</h1>
        <p>I am 30 years old and currently live in Orange County California</p>
        <p>I live with a lot of roomates and will have a friendly match in many games such as table tennis, pool, and DDR</p>
        <p>I created thsi website to make like mind people.</p>
        <button onClick={()=>{
            navigate("/table")
        }}>Change to the table tennis page</button>
    </div> );
}
 
export default About;