import { ProyectContainer } from "./components/ProyectContainer/ProyectContainer"
import { useInView } from "react-intersection-observer"
import images from "./data/images"



export const Projects = ()=>{

    const {ref, inView} = useInView({
        triggerOnce : false,
        threshold : 0.1
    })


    return <>
    
        <span className="text-white text-center my-2">
            <h3 className="lg:text-3xl font-semibold my-2">Mis proyectos</h3>
            <div ref={ref} className={`flex flex-col items-center transition-all duration-1000 transform ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
                <ProyectContainer  
                    link="https://tasktodo-d84gddque-martin-villalo-ruizs-projects.vercel.app/" 
                    title="Task ToDo" 
                    img={images[0]} 
                    text="The goal of Task ToDo is to simplify task organization and prioritization. Built with JavaScript, it allows users to add tasks, move them between columns, and remove them upon completion, ensuring a streamlined workflow."/>
                <ProyectContainer 
                    link="https://clubariverplate.netlify.app/" 
                    title="River Plate" 
                    img={images[1]}  
                    text="It's a landing page dedicated to River Plate, built with React. It includes various sections, such as the club's achievements and the current season's coaching staff."/>
                <ProyectContainer 
                    link="https://passcheck-one.vercel.app/" 
                    title="Password Check" 
                    img={images[3]}  
                    text="This React app lets you test your passwords to assess their security. As you enter a password, the requirements turn green when met—the more you fulfill, the stronger your password."/>
                <ProyectContainer 
                    link="https://notebookmvr.vercel.app/" 
                    title="Notebook" 
                    img={images[4]}  
                    text="is an app designed to help you take notes and set reminders. Just type your text and click save to easily store your notes."/>
                <ProyectContainer 
                    link="https://financermvr.vercel.app" 
                    title="Financer" 
                    img={images[5]}  
                    text="Financer allows you to manage your finances with ease and precision, tracking your daily expenses all within a single app. Simply complete the form, and your data is automatically saved, making financial management effortless and streamlined."/>
                <ProyectContainer 
                title="Proximamente"  
                text="Proximamente..." 
                img={images[2]}/>
            </div>
        </span>
    
    </>
}