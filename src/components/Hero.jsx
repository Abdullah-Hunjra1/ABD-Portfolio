

// Components
import { ButtonPrimary, ButtonOutLine } from "./Button"


const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">

            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className=" flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/avatar-1.jpg" width={40} height={40} alt="ABD portrait" className="img-cover" />
                        </figure>

                        <div className="flex items-center gap-1.5 text-[#C4C4D4] text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-purple-800">
                                <span className=" absolute inset-0 rounded-full bg-purple-800 animate-ping "></span>
                            </span>

                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Websites for the Future
                    </h2>


                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Download CV"
                            icon="download"
                            href="/images/CV For Full Stack Web Development.pdf"
                        />

                        <ButtonOutLine 
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="block lg:block mt-16 lg:mt-0">
                   <figure className="w-full max-w-[300px] mx-auto lg:max-w-[480px] lg:ml-auto bg-gradient-to-t from-purple-950 via-25% via-purple-950/40 to-65% rounded-[30px] lg:rounded-[60px] overflow-hidden">
                        <img
                          src="/images/abd_new-removebg-png.png"
                          width={656}
                          height={800}
                          alt="ABD"
                          className="w-full mt-[-30px] lg:mt-[-50px]"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero
