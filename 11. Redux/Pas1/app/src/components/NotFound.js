import { Link } from "react-router-dom";

const NotFound = ()=>{
    return(
        <>
            <p>Page not found</p>
            <Link to={"/"}>Go to Home page</Link>
        </>
    )
}

export default NotFound;