

// Node Modules
import PropTypes from "prop-types"

const SkillCard = ({
  imgSrc,
  label,
  desc,
  classes = ""
}) => {
  return (
    <div className={`p-[1px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 transition-transform hover:scale-[1.02] ${classes}`}>
      <div className="bg-[#150F2F] flex items-center gap-3 rounded-2xl p-3 hover:bg-[#050815] transition-colors">
        <figure className="bg-[#1F183E] rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
          <img src={imgSrc} width={32} height={32} alt={label} />
        </figure>

        <div>
          <h3 className="text-[#F5F5F7]">{label}</h3>
          <p className="text-[#C4C4D4] text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default SkillCard;
