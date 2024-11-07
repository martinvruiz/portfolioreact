import { ProyectContainer } from "./components/ProyectContainer/ProyectContainer"
import { useInView } from "react-intersection-observer"



export const Proyects = ()=>{

    const {ref, inView} = useInView({
        triggerOnce : true,
        threshold : 0.1
    })


    return <>
    
        <span className="text-white text-center my-4">
            <h3 className="lg:text-3xl font-semibold my-4">Mis proyectos</h3>
            <div ref={ref} className={`flex flex-col items-center transition-all duration-1000 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
                <ProyectContainer title="Task ToDo" img="imgtasktodo" text="El objetivo es ayudar a organizar y priorizar tareas, gracias a esto nace Task toDo. Hecho con JS. Se pueden agregar tareas, moverlas de columna y al finalizarlas esta la opcion de eliminarlas."/>
                <ProyectContainer title="River Plate" img="imgriverplate"  text="Es una landing page acerca de el club el cual soy hincha, hecho con React. Tiene varias secciones como titulos o el cuerpo tecnico de la temporada actual."/>
                <ProyectContainer title="Proximamente"  text="Proximamente..." img="imglogo"/>
            </div>
        </span>
    
    </>
}