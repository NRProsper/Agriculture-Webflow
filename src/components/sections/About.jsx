import about from "../../assets/img/about.png"
import organic from "../../assets/img/orgFood.svg"
import quality from "../../assets/img/quality.svg"
import Button from "../Button.jsx";

const abouts = [
    {
        icon: organic,
        title: "Organic Foods Only",
        description: "Simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum"
    },
    {
        icon: quality,
        title: "Quality Standards",
        description: "Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum"
    }
]

const About = () => {
    return (
        <section className="my-20">
            <div className="container mx-auto px-8 xl:px-16 h-full">
                <div className="flex flex-col xl:flex-row items-center justify-center">
                    <div className="img-container flex-1">
                        <img src={about} alt="About"/>
                    </div>
                    <div className="text-content flex flex-col gap-12 flex-1">
                        <div className="top">
                            <h3 className="text-lightGreen text-2xl font-tail">About Us</h3>
                            <h2 className="text-4xl leading-tight font-bold text-darkGreen">We Believe in Working <br/>
                                with Accredited Farmers</h2>
                            <p className="font-sans text-lg text-darkGray font-medium">
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br/>
                                been the industry's standard dummy text ever since the 1500s, when an unknown <br/>
                                printer took a galley.
                            </p>
                        </div>
                        <div className="middle flex flex-col space-y-7">
                            {abouts.map((ab, idx) => (
                                <div key={idx} className="flex items-center gap-5">
                                    <div className="bg-white rounded-lg shadow-xl p-5">
                                        <img src={ab.icon} alt="Icon"/>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl text-darkGreen font-bold">{ab.title}</h3>
                                        <p
                                            dangerouslySetInnerHTML={{__html: ab.description}}
                                            className="font-sans text-lg font-medium text-darkGray"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <Button hasIcon={true} className="bg-darkGreen">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;