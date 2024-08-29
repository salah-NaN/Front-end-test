import award from "../assets/award.svg"
import settings from "../assets/settings.svg"
import rocket from "../assets/rocket.svg"
import penTool from "../assets/pen-tool.svg"

const Advantages = () => {


    return (
        <div className="my-20 grid grid-cols-1 gap-10
        md:grid-cols-2 
        lg:grid-cols-4">
            <div className="w-[90%] flex flex-col justify-center items-start gap-7" >
                <img className="size-16 mb-4" src={settings} ></img>
                <h4 className="text-4xl font-[500]" >Pauline</h4>
                <p className="text-[15px] text-[#7b7b7b]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi expedita quibusdam quas in nesciunt mollitia veniam.</p>
            </div>

            <div className="w-[90%] flex flex-col justify-center items-start gap-7" >
                <img className="size-16 mb-4" src={award} ></img>
                <h4 className="text-4xl font-[500]" >Bailee</h4>
                <p className="text-[15px] text-[#7b7b7b]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi expedita quibusdam quas in nesciunt mollitia veniam.</p>
            </div>

            <div className="w-[90%] flex flex-col justify-center items-start gap-7" >
                <img className="size-16 mb-4" src={rocket} ></img>
                <h4 className="text-4xl font-[500]" >Henry</h4>
                <p className="text-[15px] text-[#7b7b7b]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi expedita quibusdam quas in nesciunt mollitia veniam.</p>
            </div>

            <div className="w-[90%] flex flex-col justify-center items-start gap-7" >
                <img className="size-16 mb-4" src={penTool} ></img>
                <h4 className="text-4xl font-[500]" >Laurence</h4>
                <p className="text-[15px] text-[#7b7b7b]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi expedita quibusdam quas in nesciunt mollitia veniam.</p>
            </div>
        </div>
    )
}

export default Advantages;