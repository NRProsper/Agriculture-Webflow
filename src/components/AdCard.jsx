import ad from "../assets/img/ad1.png"

const AdCard = ({adv, isGreen}) => {
        return (
        <div style={{
            backgroundImage: `url(${adv.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "367px",
            width: "100%"
        }}
             className="rounded-[30px]"
        >
            <div className="text flex flex-col justify-center h-full px-[32px] md:px-[54px] gap-[5px]">
                <h4 className={`font-tail ${isGreen ? `text-lightGreen`: `text-white`}`}>{adv.mini}</h4>
                <p className={`font-bold text-[40px] leading-[46px] ${isGreen ? `text-darkGreen`: `text-white`} `}  dangerouslySetInnerHTML={{__html: adv.title}} />
            </div>
        </div>
    )
}

export default AdCard;