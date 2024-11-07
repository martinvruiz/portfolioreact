

export const ProyectContainer = ({img, text,title})=>{

    return<>
    
        <div className="flex flex-col items-center justify-center border-2 border-white rounded-lg my-4 w-2/3 p-4">
            <h3 className="lg:text-2xl font-medium">{title}</h3>
            <span className="flex justify-center items-center my-2 gap-2">
                <img src={img} alt={img} className="w-80 h-40 border border-white"/>
                <p className="w-2/5">
                    {text}
                </p>
            </span>
        </div>

    </>
}