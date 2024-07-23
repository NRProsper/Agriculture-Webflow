import bg from "../../assets/img/testimonial.png";
import Person from "../../assets/img/testimonials/person.png";
import StarRating from "../StarRating.jsx";
import NumCircle from "../NumCircle.jsx";

const Testimonials = () => {
    return (
        <section
            id={"testimonials"}
            className="my-[150px] lg:h-[1000px] xl:h-[1267px]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto h-full">
                <div className="content px-[60px] lg:px-[146px] h-full flex items-center flex-col justify-center">
                    <div className="mb-[102px]">
                        <h3 className="text-lightGreen text-[36px] font-tail text-center">Testimonials</h3>
                        <h1 className="font-bold text-[50px] text-darkGreen text-center">What Our Customers are Saying?</h1>
                        <div className="testimonial flex items-center justify-center flex-col mt-[60px] gap-[20px]">
                            <div className="rounded-full">
                                <img src={Person} alt="Person Image" className="rounded-full"/>
                            </div>
                            <StarRating />
                            <div className="flex items-center justify-center flex-col">
                                <p className="text-center text-[18px] font-medium text-darkGray font-sans mb-[20px]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy<br /> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                <h3 className="font-semibold text-[25px] text-darkGreen">Sara Taylor</h3>
                                <h6 className="font-medium font-sans text-[15px] text-darkGreen">Consumer</h6>
                            </div>
                        </div>
                    </div>
                    <div className="numbers grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-[20px] xl:gap-x-[62px] gap-y-[20px]">
                        <NumCircle number={"100%"} text={"organic"} />
                        <NumCircle number={"285"} text={"active products"} />
                        <NumCircle number={"250+"} text={"organic orchads"} />
                        <NumCircle number={"25+"} text={"years of farming"} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;