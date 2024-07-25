import splash from "../assets/img/splash.png";
import Button from "./Button.jsx";

const Subscribe = ({className}) => {
    return (
        <section id="sub" className={"my-[150px]"}>
            <div className="container mx-auto px-[32px] xl:px-16 h-full">
                <div
                    className="h-[400px] pb-2 md:pb-0  md:h-[323px] rounded-[12px] px-[80px]"
                    style={{
                        backgroundImage:`url(${splash})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="h-full w-full flex-col py-[30px] lg:py-0 lg:flex-row flex items-center justify-between">
                        <h1 className="font-extrabold text-[50px] text-center lg:text-left text-neutral">Subscribe to
                            our Newsletter
                        </h1>
                        <div className="flex flex-col md:flex-row  items-center gap-[6px]">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Your Email Address"
                                className="rounded-[16px] px-[16px] py-[20px]"
                            />
                            <Button className={"bg-darkGreen"}>
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;