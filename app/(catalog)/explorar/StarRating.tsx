import { useState } from "react";

const StarRating = ({
    onRatingSubmit,
}: {
    onRatingSubmit: (rating: number) => void;
}) => {
    const [rating, setRating] = useState(0);
    const maxStars = 5;

    const handleClick = (index: number) => {
        setRating(index + 1);
        onRatingSubmit(index + 1);
    };

    return (
        <div>
            {Array.from({ length: maxStars }, (_, index) => (
                <span
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{ cursor: "pointer", fontSize: "2rem" }}
                >
                    {index < rating ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
