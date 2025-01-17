import Footer from "../components/Footer"
import Navbar from "../components/Nav"
import electronic from "../../public/Data/electronic"


function Electronics(){
    return(
        <>
        <Navbar/>
        <div className="h-min w-full">
            {
                electronic.map((el)=>{
                    return(
                        <>
                        <div className="cart">
                            <p>{el.name}</p>
                        </div>
                        </>
                    )
                })
            }

        </div>
        <Footer/>

        </>
    )
}
export default Electronics