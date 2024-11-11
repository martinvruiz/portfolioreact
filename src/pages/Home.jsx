import logo from '../images/logo/LogoMVRT2-removebg-preview.png'
import { ItemContainer } from './components/ItemContainer/ItemContainer'
import { useInView } from 'react-intersection-observer'


export const Home = ()=>{

        const {ref, inView} = useInView({
            triggerOnce : true,
            threshold : 0.1
        })


    return <section ref={ref} className={`pt-3 text-white flex flex-col items-center h-full font-poppins transition-all duration-1000 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
    }`} >
        <span className=" flex flex-col items-center">
            <img src={logo} alt="logo" />
            <h2 className= 'text-xl lg:text-4xl flex flex-col items-center my-2 p-1 border-b border-white'>Me llamo Martin Villalo Ruiz, y soy <p className='text-orange-400'>
                    FrontEnd Developer
                </p>
                </h2>
            <div className='my-4 w-3/4'>
                <p className='lg:text-2xl text-center'>Me inicié en el Desarrollo Web en 2023. He dedicado mucho tiempo y esfuerzo para poder progresar en esta rama de la programacion. Mi objetivo es seguir aprendiendo, aspiro a ser capaz de afrontar cualquier desafío y contribuir significativamente en este ámbito.</p>
            </div>
        </span>
        <span className='my-10 border-4 rounded-xl w-2/3 flex flex-col items-center p-4'>
            <h2 className='lg:text-xl text-center mb-3'>Los lenguajes que trabajo actualmente son:</h2>
            <div className='flex lg:flex-row flex-col gap-3'>
                <ItemContainer title="Javascript" plataform="Coderhouse" img="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 630 630'><rect width='630' height='630' fill='%23f7df1e' /><path d='m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z'/></svg>"/>
                <ItemContainer title="HTML5" plataform="Coderhouse" img="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 452 520'>%0A    <path fill='%23e34f26' d='M41 460L0 0h451l-41 460-185 52' />%0A    <path fill='%23ef652a' d='M226 472l149-41 35-394H226' />%0A    <path fill='%23ecedee' d='M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z'/>%0A    <path fill='%23fff' d='M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z'/>%0A  </svg>"/>
                <ItemContainer title="CSS3" plataform="Coderhouse" img="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 452 520'>%0A    <path fill='%230c73b8' d='M41 460L0 0h451l-41 460-185 52'/>%0A    <path fill='%2330a9dc' d='M226 472l149-41 35-394H226'/>%0A    <path fill='%23ecedee' d='M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z'/>%0A    <path fill='%23fff' d='M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z'/>%0A  </svg>"/>
                <ItemContainer title="React" plataform="Coderhouse" img="https://cdn.worldvectorlogo.com/logos/react-2.svg"/>
            </div>
        </span>
    </section>
}