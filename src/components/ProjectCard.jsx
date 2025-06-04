
// Node Modules
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes = "",
}) => {
  return (
    <div className={`p-[1px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 transition-transform hover:scale-[1.02] bg-[length:200%_200%] animate-gradient-x ${classes}`}>
      <div className="relative p-4 rounded-2xl bg-[#150F2F] hover:bg-[#050815] active:bg-zinc-700/60 transition-colors">
        <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="img-cover w-full h-full object-cover rounded-lg"
          />
        </figure>

        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="title-1 mb-3 text-[#F5F5F7]">{title}</h3>

            <div className="flex flex-wrap items-center gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="h-8 text-sm text-[#C4C4D4] bg-[#050815] grid items-center px-3 rounded-lg"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="w-11 h-11 rounded-lg grid place-items-center bg-[#050815] text-[#F5F5F7] hover:bg-[#150F2F] shrink-0">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>

        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0"
          ></a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
