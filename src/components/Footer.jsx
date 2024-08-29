import star from "../assets/star.svg"

const Footer = () => {


    return (
        <div className="bg-[#343434] text-[#fafafa] py-20">
            <div className="flex flex-col justify-around items-center gap-12
            md:flex-row">

                <div className="text-center">
                    <h6 className="text-lg font-semibold mb-4">Fountainebleau</h6>
                    <p>Cummera Trail, 34</p>
                    <p>08234, Mariana</p>
                    <p>(+123) 123 123 123</p>

                    <p className="mt-3">info@colillas.com</p>
                </div>

                <div className="text-center">
                    <h6 className="text-lg font-semibold mb-4">Daly City</h6>
                    <p>N Font Street, 85</p>
                    <p>08937, Daly City</p>
                    <p>(+321) 321 321 321</p>

                    <p className="mt-3">hello@colillas.com</p>
                </div>

            </div>

            <div className="flex flex-row gap-2 justify-center items-center py-14">
                <img src={star} className="size-7" ></img>
                <img src={star} className="size-7" ></img>
                <img src={star} className="size-7" ></img>
                <img src={star} className="size-7" ></img>
                <img src={star} className="size-7" ></img>
            </div>
            <div className="flex flex-col items-center justify-center gap-10
            md:flex-row md:gap-5" >
                <p>2024 &copy; All rights reserved.</p>
                <a>Privacy policy</a>
                <a>Terms of service</a>
                <a>Cookie settings</a>
            </div>
        </div>
    )
}

export default Footer;