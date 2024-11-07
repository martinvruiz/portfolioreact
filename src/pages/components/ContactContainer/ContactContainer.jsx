

export const ContactContainer = ({logo,text,link, showLink= true, mail, showMail= false})=>{

    return <>
    
        <div className="flex justify-center items-center gap-6 text-white lg:text-xl border border-white rounded-lg w-2/4 p-4 my-4">

            <img className="w-16 h-16" src={logo} alt={logo} />

            <h3 className="lg:text-xl">{text}</h3>

            {showLink &&
                <a href={link} target="_blank" rel="noreferrer" className="border-b border-white">Contactarme</a>
                }
            {showMail &&
                <p className="p-1 border-white border-b">{mail}</p>
            }

        </div>

    </>

}