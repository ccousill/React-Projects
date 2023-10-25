import { useParams,Link } from "react-router-dom";
const ProductDetal = (props) => {
    const params = useParams();

    return <>
        <h1>{params.productId}</h1>
        <Link to=".." relative="path">Back</Link>
    </>
}

export default ProductDetal