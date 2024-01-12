import React from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";
export default function Kubika(){
    return(
        <>
        <Navbar/>
        <div className="kubika">
            <h1 className="kubikaa">to package our rice</h1>
            <p>
            Certainly! Here's a paragraph describing the packaging process of rice:

"The packaging phase is a critical juncture in the journey of rice from the fields to consumers' 
tables, where precision and attention to detail ensure the preservation of quality. 
Following the careful drying process, the rice is meticulously weighed and packaged 
to meet industry standards and consumer expectations. In modern rice mills, advanced 
machinery facilitates the efficient packaging of different rice varieties, ranging from 
long-grain to basmati. The packaging material is chosen with care, balancing the need for
 protection against external elements with the convenience of handling for consumers. 
 Vacuum-sealed bags or sturdy containers may be employed to safeguard the rice from moisture, 
 pests, and other potential contaminants, ensuring its freshness and nutritional value. 
 The packaging phase symbolizes the culmination of efforts in the rice production chain, 
 providing consumers with a neatly presented, high-quality product ready for distribution and culinary delight."
  </p>
        </div>
        <Footer/>
        </>
    )
}