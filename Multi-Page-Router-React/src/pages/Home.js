import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Home = () =>{
    const navigate = useNavigate()

    function navigateHandler(){
        navigate('/products')
    }

    return <>
    <h1>hello</h1>
    <button onClick={navigateHandler}>Navigate</button>
    </>
}
export default Home