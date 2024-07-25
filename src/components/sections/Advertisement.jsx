import ad1 from "../../assets/img/ad1.png"
import ad2 from "../../assets/img/ad2.png"
import AdCard from "../AdCard.jsx";
const ads = [
    {
        mini: "Natural!!",
        title: "Get Garden <br /> Fresh Fruits",
        img: ad1
    },
    {
        mini: "Offer!!",
        title: "Get 10% off <br />" +
            "on Vegetables",
        img: ad2
    }
]
const Advertisement = () => {
    return (
        <section id="ads" className="my-20">
            <div className="container mx-auto px-8 xl:px-16 h-full">
                <div className="ads-content flex flex-col lg:flex-row gap-9">
                    {ads.map((ad, idx) => (
                        <AdCard key={idx} adv={ad} isGreen={idx === 1}/>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Advertisement