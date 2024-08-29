import arrow from "../assets/arrow.svg"

const CTO = () => {

    return (
        <div className="w-[80%] mt-16
        md:w-[65%] md:mt-48
        lg:w-[50%] lg:mt-20">
            <p className="uppercase font-light leading-6 
            md:text-lg" >Lorem ipsum dolor sit amet</p>

            <div className="w-full border border-black my-2" ></div>


            <div className="flex justify-between items-center " >
                <div>
                    <p className="leading-9 text-2xl
                md:text-3xl" >Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="leading-9 text-2xl
                md:text-3xl" >Nibh vestibulum eleifend a et.</p>
                </div>
                <img src={arrow} ></img>
            </div>

            <div className="w-full border  border-black my-2" ></div>



            <div className="flex justify-between items-center " >

                <div>
                    <p className="leading-9 text-2xl
                md:text-3xl" >Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="leading-9 text-2xl
                md:text-3xl" >Amet sed vitae urna egestas amet.</p>
                </div>
                <img src={arrow}></img>
            </div>
        </div>
    )

}

export default CTO;