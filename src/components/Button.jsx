

// Node Modules

import PropTypes from "prop-types"
import { GoDownload } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";


// Primary Button
const ButtonPrimary = ({
    href, target = '_self', label, icon, classes
}) => {
    // console.log(`icon ---->  ${icon}`)
    if (href) {
        return (
            <>
                <GoDownload />
                <a href={href} target={target} className={"btn btn-primary " + classes}>
                    {label}

                    {icon ?
                        <span className="material-symbols-rounded" aria-hidden="true"><GoDownload style={{ fontSize: '16px' }}/></span>
                        : undefined
                    }
                </a>
            </>
        )
    } else {
        return (
            <button className={"btn btn-primay" + classes}>
                {label}


                {icon ?
                    <span className=" material-symbols-rounded" aria-hidden="true"><GoDownload style={{ fontSize: '16px' }}/></span>
                    : undefined
                }

            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}



// OutLine Button
const ButtonOutLine = ({
    href, target = '_self', label, icon, classes
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                    <span className=" material-symbols-rounded" aria-hidden="true"><FaArrowDown style={{ fontSize: '14px', marginTop: '2px'}} /></span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline" + classes}>
                {label}


                {icon ?
                    <span className=" material-symbols-rounded" aria-hidden="true"><FaArrowDown style={{ fontSize: '16px' }}/></span>
                    : undefined
                }

            </button>
        )
    }
}

ButtonOutLine.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}
export {
    ButtonPrimary,
    ButtonOutLine

}