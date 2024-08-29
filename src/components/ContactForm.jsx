import arrow from "../assets/arrow-white.svg"


const ContactForm = () => {

    return (
        <div className="flex flex-col justify-center items-center w-[79%] mx-auto py-20
        md:w-10/12
        lg:w-[89%] lg:flex lg:flex-row lg:items-start">


            <div className=" lg:w-1/2">
                <h4 className="uppercase  text-xl text-red-500 mb-7">Lorem ipsum dolor sit amet consectetur</h4>
                <h3 className="text-4xl mb-12">Lorem ipsum dolor sit amet consectetur. Asset conection.</h3>
            </div>

            <form className=" flex flex-col gap-2.5 w-full 
            lg:w-1/2 ">

                <div className="lg:grid lg:grid-cols-2 gap-4">

                    <div className="  flex flex-col gap-2.5">
                        <label className="text-[15px] mt-4">Nombre</label>
                        <input className="border border-[#adadad] rounded-full px-3 py-2.5" ></input>
                    </div>

                    <div className=" flex flex-col gap-2.5">
                        <label className="text-[15px] mt-4">Empresa</label>
                        <input className="border border-[#adadad] rounded-full px-3 py-2.5" ></input>
                    </div>


                    <div className=" flex flex-col gap-2.5">
                        <label className="text-[15px] mt-4">Email</label>
                        <input className="border border-[#adadad] rounded-full px-3 py-2.5" ></input>
                    </div>

                    <div className=" flex flex-col gap-2.5">
                        <label className="text-[15px] mt-4">Teléfono de contacto</label>
                        <input className="border border-[#adadad] rounded-full px-3 py-2.5" ></input>
                    </div>

                </div>






                <label className="text-[15px] mt-4">Mensaje</label>
                <textarea className="border border-[#adadad] rounded-2xl px-3 py-2.5 h-44" ></textarea>

                <div className="flex justify-start items-center gap-3 mt-4">
                    <input type="checkbox" className="size-5"></input>
                    <p>I accept de <span className=" underline">terms</span></p>
                </div>

                <button className="flex items-center justify-center gap-3 bg-[#131313] w-fit py-2.5 px-4 mt-7 rounded-full">
                    <p className="text-white text-xl">Enviar</p>
                    <img src={arrow} className="size-6" ></img>
                </button>

            </form>
        </div>

    )
}

export default ContactForm;