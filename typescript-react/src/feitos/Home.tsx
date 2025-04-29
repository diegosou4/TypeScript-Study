
import dog1 from '../assets/dog-1.jpg'
import dog2 from '../assets/dog-2.jpg'
import dog3 from '../assets/dog-3.jpg'


const HomePage = () =>
{
    return(
        <>
        <h1 className="text-center text-5xl text-cyan-800 text-shadow-sm">Welcome to Home Page</h1>
         <div className="flex gap-8 justify-center p-8">
            <div className="pt-6 px-4 pb-16 bg-white  grayscale rotate-2 origin-top-left shadow-md hover:shadow-xl hover:rotate-0 hover:grayscale-0 transition duration-500 ease-linear">
             <img src={dog1} alt="" />
            </div>
            <div className="pt-6 px-4 pb-16 bg-white  grayscale rotate-2 origin-top-left shadow-md hover:shadow-xl hover:rotate-0 hover:grayscale-0 transition duration-500 ease-linear">
                <img src={dog2} alt=""/>
            </div>
            <div className="pt-6 px-4 pb-16 bg-white  grayscale rotate-2 origin-top-left shadow-md hover:shadow-xl hover:rotate-0 hover:grayscale-0 transition duration-500 ease-linear">
                <img src={dog3} alt=""/> 
            </div>
         </div> 
        </>
    )
}

export default HomePage