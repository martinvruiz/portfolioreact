
import { ItemContainer } from './components/ItemContainer/ItemContainer'
import { useInView } from 'react-intersection-observer'

const logo = 'images/logo/LogoMVR.png'

export const Home = ()=>{

        const {ref, inView} = useInView({
            triggerOnce : true,
            threshold : 0.1
        })


    return <section  className={`text-white flex flex-col items-center h-full font-poppins`} >
        <span className=" flex flex-col items-center lg:h-screen w-5/6">
            <img className='lg:h-3/4 object-contain' src={logo} alt="logo" />
            <h2 className= 'text-xl lg:text-6xl flex flex-col relative items-center border-b border-white'>Martin Villalo Ruiz<p className='text-orange-400 text-lg lg:text-3xl'>
                    Front-end Developer
                </p>
                </h2>
        </span>
        <div className='w-5/6 text-center justify-center items-center text-xl flex flex-col gap-4 my-4 md:my-1'>
        <p className='text-2xl flex justify-center items-center'>Based in Buenos Aires, Argentina.</p>
            <div className='flex flex-col items-center gap-2 w-3/4'>
                <p>I am a front-end developer with strong skills in React, Tailwind CSS, and modern web design. I excel at creating clean, functional, and user-friendly interfaces, focusing on responsive design and ensuring a seamless user experience.</p>
                <p>My problem-solving skills allow me to approach challenges efficiently, and I constantly strive to learn and improve.</p>
            </div>
        </div>
        <span ref={ref} className={`my-4 border-4 w-5/6 flex flex-col items-center p-4 transition-all duration-1000 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
    }`}>
            <h2 className='lg:text-xl text-center mb-3'>The languages I am currently working with are</h2>
            <div className='flex lg:flex-row flex-col gap-3'>
                <ItemContainer title="Javascript" plataform="Coderhouse" img="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 630 630'><rect width='630' height='630' fill='%23f7df1e' /><path d='m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z'/></svg>"/>
                <ItemContainer title="HTML5" plataform="Coderhouse" img="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 452 520'>%0A    <path fill='%23e34f26' d='M41 460L0 0h451l-41 460-185 52' />%0A    <path fill='%23ef652a' d='M226 472l149-41 35-394H226' />%0A    <path fill='%23ecedee' d='M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z'/>%0A    <path fill='%23fff' d='M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z'/>%0A  </svg>"/>
                <ItemContainer title="CSS3" plataform="Coderhouse" img="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 452 520'>%0A    <path fill='%230c73b8' d='M41 460L0 0h451l-41 460-185 52'/>%0A    <path fill='%2330a9dc' d='M226 472l149-41 35-394H226'/>%0A    <path fill='%23ecedee' d='M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z'/>%0A    <path fill='%23fff' d='M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z'/>%0A  </svg>"/>
                <ItemContainer title="React" plataform="Coderhouse" img="https://cdn.worldvectorlogo.com/logos/react-2.svg"/>
            </div>
        </span>
    </section>
}