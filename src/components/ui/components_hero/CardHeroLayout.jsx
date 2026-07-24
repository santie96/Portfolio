function CardHeroLayout( {icon, title, text} ) {
    return (
        <>

            <div className="p-4 bg-[#17233A] border border-[#24344D] rounded-2xl space-y-2 flex justify-between px-6 items-center w-80">

                

                <div className="flex items-center gap-2 text-2xl font-semibold m-0">

                    <span>{icon}</span>
                    <span>{title}</span>
                </div>
                
                <p className="m-0">{text}</p>
            </div>

        </>
    )
}

export default CardHeroLayout