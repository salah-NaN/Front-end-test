import back from "../assets/leone-venter-VieM9BdZKFo-unsplash.jpg"
import logo from "../assets/logo colillas.svg"
import CTO from "./CTO";

const Hero = () => {

    return (
        <>

            <div className=" bg-cover h-svh w-full bg-[720px_center] 
            md:bg-[1100px_center]  md:bg-cover md:w-full
             lg:bg-center lg:h-[86vh]" style={{
                    backgroundImage: `url(${back})`,

                }}>


                {/* container */}
                <div className="w-[79%] mx-auto
                md:w-10/12
                lg:w-[89%]" >

                    {/* logo */}
                    <img className="py-20" src={logo} style={{
                    }}></img>

                    <h2 className="font-tinos text-[24px] text-pretty
                    md:text-[30px] md:w-[80%]
                    lg:text-[32px] lg:w-[60%]" >Lorem ipsum dolor sit amet consectetur. Elementum mauris tincidunt vitae ornare ultrices eget integer. Sagittis in ac fringilla sit.</h2>

                    {/* CTO */}
                    <CTO></CTO>

                </div>



            </div>

        </>
    )
}



export default Hero;