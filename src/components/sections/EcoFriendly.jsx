import img from "../../assets/img/eco.png";

const facts = [
    {
        title: "Start with Our Company First",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.\n"
    },
    {
        title: "Learn How to Grow Yourself",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.\n"
    },
    {
        title: "Farming Strategies of Today",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.\n"
    }
]

const EcoFriendly = () => {
    return (
        <section className="relative h-[930px] w-full">
            <div
                className="absolute w-1/2 inset-0 bg-no-repeat bg-cover bg-left-half"
                style={{backgroundImage: `url(${img})`}}></div>
            <div className="relative container mx-auto px-[32px] xl:px-16 h-full">
                <div className="flex h-full items-center justify-center">
                    <div className="bg-neutral inline-block px-6 md:px-[50px]  py-[30px] rounded-[12px] xl:ml-[500px]">
                        <div className="top">
                            <h3 className="text-lightGreen text-[36px] font-tail ">Eco Friendly</h3>
                            <h1 className="font-bold text-[50px] text-darkGreen leading-[58px] ">Econis is a
                                Friendly <br/> Organic Store</h1>
                        </div>
                        <div className="facts mt-[35px]">
                            {
                                facts.map((fact, idx) => (
                                    <div key={idx} className="mt-[30px]">
                                        <h4 className="text-[25px] font-semibold text-darkGreen">{fact.title}</h4>
                                        <p
                                            className="font-sans font-medium text-darkGray"
                                            dangerouslySetInnerHTML={{__html: fact.description}}></p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcoFriendly