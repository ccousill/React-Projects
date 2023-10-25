import { Link } from "react-router-dom"
const Products = () =>{
    const products = [
        {id:"1",title:"p1"},
        {id:"2",title:"p2"},
        {id:"3",title:"p3"},
    ]

    return <>
        <h1>products</h1>
        <ul>
            {products.map((product) => (
                <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>
            ))}
            
        </ul>
    </>
}
export default Products