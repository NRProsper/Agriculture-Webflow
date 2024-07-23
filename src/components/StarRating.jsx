import Star from "./Star.jsx";

const StarRating = ({count = 5}) => {
    return(
        <div className="flex items-center">
            {
                Array.from({length: count}, (_, idx) => (
                    <Star key={idx} />
                ))
            }
        </div>
    );
}

export default StarRating;