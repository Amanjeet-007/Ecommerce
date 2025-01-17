
import Navbar from "../components/Nav"
import Data from "../../public/Data/Data"
import {Link} from 'react-router-dom'
import Footer from "../components/Footer"


function Categories() {

    return (
        <>
            <div className="w-full h-min p-3 flex flex-row flex-wrap justify-around bg-gray-800">
                {Data.categories.map((el) => {
                    return (
                    <Link to={el.Link} >
                    <div className="w-52 h-36 flex justify-center items-center bg-center filter object-cover bg-no-repeat bg-cover flex-row  my-10 border-[3px] cursor-pointer " key={el.id} style={{backgroundImage: `url(${el.image})`}}>
                        <h2 className=" py-1 px-2 rounded-md bg-blue-700 text-white bg-opacity-95  filter text-pretty  font-sans font-bold text-1xl">{el.name}</h2>
                    </div>
                    </Link>
                    )
                })}
            </div>
        </>
    )
}

export default function Home() {
    return (

        <>
        <main className=" md:h-[100vh]  relative">

        
            <Navbar />
            <Categories />
      
            <p className="text-4xl font-extrabold text-center m-1 text-red-600">Welcome To The Magic Ecommerce <br /><span className="text-blue-600">ShopMate</span></p>
             <Footer/>
             </main>

        </>
    )
}