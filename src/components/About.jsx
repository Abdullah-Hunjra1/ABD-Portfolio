

const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 1
    }
];


const About = () => {
    return (
        <section id="about" className="section">

            <div className="container">

                <div className="bg-[#150F2F] p-7 rounded-2xl md:p12 reveal-up ">
                    <p className="text-[#C4C4D4] mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">


const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 1
    }
];


const About = () => {
    return (
        <section id="about" className="section">

            <div className="container">

                <div className="bg-[#150F2F] p-7 rounded-2xl md:p12 reveal-up ">
                    <p className="text-[#C4C4D4] mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos; Abdullah, a passionate Full Stack MERN Developer with a talent for creating visually appealing and highly functional websites.
                        By combining creativity with technical expertise, I bring ideas to life and turn visions into digital experiences that are not only beautiful but also fast, responsive, and user-friendly.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-[#F5F5F7] font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img src="/images/logo.svg" alt="Logo" width={30} height={30} 
                        className="ml-auto md:w-[40px] md:h-[40px]"/>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-[#F5F5F7] font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img src="/images/logo.svg" alt="Logo" width={30} height={30} 
                        className="ml-auto md:w-[40px] md:h-[40px]"/>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About
