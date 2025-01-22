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
                    text="El objetivo es ayudar a organizar y priorizar tareas, gracias a esto nace Task toDo. Hecho con JS. Se pueden agregar tareas, moverlas de columna y al finalizarlas esta la opcion de eliminarlas."/>
                <ProyectContainer 
                    link="https://clubariverplate.netlify.app/" 
                    title="River Plate" 
                    img={images[1]}  
                    text="Es una landing page acerca de el club el cual soy hincha, hecho con React. Tiene varias secciones como titulos o el cuerpo tecnico de la temporada actual."/>
                <ProyectContainer 
                    link="https://passcheck-one.vercel.app/" 
                    title="Password Check" 
                    img={images[3]}  
                    text="Esta app, hecha con React, sirve para que pruebes tus contraseñás para ver que tan seguras son. Al ingresar tu contraseña se van marcando las combinaciones en verde cuando las cumplas, mientras mas tengas mas segura es."/>
                <ProyectContainer 
                    link="https://notebookmvr.vercel.app/" 
                    title="Notebook" 
                    img={images[4]}  
                    text="Soluciona la necesidad de guardar notas/recordatorio. Simplemente con ingresar el texto y darle a guardar, es como funciona esta app."/>
                <ProyectContainer 
                    link="https://financermvr.vercel.app" 
                    title="Financer" 
                    img={images[5]}  
                    text="Maneja tus finanzas de la forma mas facil y precisa, tus gastos del dia a dia en una sola app. Con llenar el formulario se guardan automaticamente tus datos."/>
                <ProyectContainer 
                title="Proximamente"  
                text="Proximamente..." 
                img={images[2]}/>
            </div>
        </span>
    
    </>
}