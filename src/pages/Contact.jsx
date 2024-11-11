import { ContactContainer } from "./components/ContactContainer/ContactContainer"
import { useInView } from "react-intersection-observer"

export const Contact = ()=>{

    const {ref, inView} = useInView({
        triggerOnce : true,
        threshold : 0.1
    })


    return <>
    
        <div>
            <h4 className="text-white p-4 text-center lg:text-3xl font-semibold">Formas de contacto</h4>
            <span ref={ref} className={`flex flex-col items-center p-6 transition-all duration-1000 transform ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}>

                <ContactContainer text="LinkedIn" link="https://www.linkedin.com/in/martin-villalo-ruiz/" logo="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_in-512.png"/>
                <ContactContainer text="Instagram" link="https://www.instagram.com/martinvruiz/" logo="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-256.png"/>
                <ContactContainer text="Gmail" logo="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-256.png" mail="martinevruiz10@gmail.com" showLink={false} showMail={true}/>

            </span>
        </div>
    
    </>
}