import Hero from "./components/Hero"
import Advantages from "./components/Advantages"
import LoremSection from "./components/LoremSection"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"


export default function App() {
  return (

    <>
      {/* container */}
      <Hero></Hero>
      <div className="w-[79%] mx-auto
    md:w-10/12
    lg:w-[89%]">
        <Advantages></Advantages>
      </div>
      <LoremSection></LoremSection>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  )
}