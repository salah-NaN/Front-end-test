import star from "../assets/star.svg"
import layers from "../assets/layers.svg"
import sisyphus from "../assets/sisyphus.svg"
import circooles from "../assets/circooles.svg"
import catalog from "../assets/catalog.svg"
import quotient from "../assets/quotient.svg"

const Testimonials = () => {


    return (
        <div className="bg-[#dfdfdf]" >

            <div className="w-[79%] mx-auto flex flex-col justify-center items-center pt-20 pb-0
    md:w-10/12
    lg:w-[89%]" >

                <h2 className="text-4xl text-center mb-28" >Lorem ipsum dolor sit amet, consectetur adipisicing</h2>


                <div className="w-fit flex justify-center items-center mb-16">
                    <img className="size-6" src={star} ></img>
                    <img className="size-6" src={star} ></img>
                    <img className="size-6" src={star} ></img>
                    <img className="size-6" src={star} ></img>
                    <img className="size-6" src={star} ></img>
                </div>

                <h3 className="text-2xl text-center leading-9 mb-9" >
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, non nam! Blanditiis explicabo, distinctio repudiandae corporis reiciendis accusantium laudantium mollitia maiores obcaecati, neque amet quasi officia veniam facilis suscipit enim."
                </h3>


                <div className="flex flex-col justify-center items-center" >
                    <h6 className="text-[17px] font-semibold">Name, surname</h6>
                    <p>Position, company name</p>
                </div>

                <div className="mx-auto w-full border border-gray-300 mt-10 mb-0" ></div>

                <div className="flex flex-col
                md:grid md:grid-cols-2 md:gap-x-20
                lg:flex lg:flex-row">
                    <img className="size-40" src={layers} ></img>
                    <img className="size-40" src={sisyphus} ></img>
                    <img className="size-40" src={circooles} ></img>
                    <img className="size-40" src={catalog} ></img>
                    <img className="size-40" src={quotient} ></img>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;