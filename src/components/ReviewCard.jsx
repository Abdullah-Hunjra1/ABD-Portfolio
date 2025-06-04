

import PropTypes from "prop-types"
import { FaStar } from "react-icons/fa";

const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }
});


const ReviewCard = ({
    content,
    name,
    imgSrc,
    company
}) => {
    return (
        <div className=" bg-[#150F2F] p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">

            <div className=" flex-1 items-center gap-1 mb-3">
                {ratings.map(({ style }, key) => (
                    <span key={key} className="material-symbols-rounded text-yellow-300 text-[18px]" style={style}>
                        <FaStar />
                    </span>
                ))}
            </div>

            <p className=" text-[#C4C4D4] mb-8">
                {content}
            </p>

            <div className=" flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg">
                    <img src={imgSrc} alt={name} width={44} height={44} loading="lazy" className="img-cover" />
                </figure>

                <div>
                    <p>
                        {name}
                    </p>

                    <p className=" text-xs text-[#C4C4D4] tracking-wider">
                        {company}
                    </p>
                </div>
            </div>
        </div>
    )
}


ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,


}

export default ReviewCard
