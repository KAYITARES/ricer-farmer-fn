import Navbar from "./header"
import Cards from "../component/cards"

function Product(){

    return (
        <>
           <Navbar/>

           <div className="product-container">
            <h1>This is all product available</h1>
            <div className="different-card">
            <Cards/>
            </div>

           </div>
        </>
    )
}
export default Product