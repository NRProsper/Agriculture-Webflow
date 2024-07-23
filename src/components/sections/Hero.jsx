import Button from "../Button.jsx";

const Hero = () => {
    return (
        <section id="hero" className="h-[898px]">
            <div className="container mx-auto px-[32px] xl:px-16 h-full">
                <div className="flex items-center justify-start h-full w-full">
                    <div className="content">
                        <h3 className="font-tail text-lightGreen text-[30px] lg:text-[36px]">100% Natural Food</h3>
                        <h1 className="text-darkGreen font-extrabold text-[40px] md:text-[50px] lg:text-[70px] lg:leading-[82.03px] mb-[23px]">Choose the best <br/> healthier way <br/> of life</h1>
                        <Button hasIcon={true}>
                            Explore Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;