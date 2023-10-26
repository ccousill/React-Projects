import PageContent from "../components/PageContent"
import { useRouteError } from "react-router-dom"
const Error = () =>{
    const error = useRouteError()
    let title = 'An error occured';
    let message = 'Something went wrong'


    if(error.status === 500){
        message = JSON.parse(error.data).message
    }
    if(error.status === 404){
        message = "Could not find resources"
        title= "Not found"
    }
    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}   

export default Error