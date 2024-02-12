import Navbar from "../component/header"
import Cards from "../component/cards"
import  Footer  from "../component/footer"




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
           <Footer/>
          
        </>
    )
}
export default Product