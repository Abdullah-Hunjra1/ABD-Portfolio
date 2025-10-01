
// Components

import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/images/portfolio.png',
        title: 'Portfolio Website',
        tags: ['react', 'Development'],
        projectLink: 'https://abd-portfolio-l0plgh5d8-abdullahs-projects-2d66ab66.vercel.app/'
    },
    {
        imgSrc: '/images/thumbnail.png',
        title: 'AI Enhanced Personal Neuro Diary',
        tags: ['FYP', 'Development'],
        projectLink: 'https://github.com/Abdullah-Hunjra1/NeuroDiary'
    },
    {
        imgSrc: '/images/video-calling thumbnail.png',
        title: 'Connectify',
        tags: ['Video Calling', 'Chat App'],
        projectLink: 'https://github.com/Abdullah-Hunjra1/Connectify'
    },
    {
        imgSrc: '/images/heaven-hub thumbnail.png',
        title: 'Real state website',
        tags: ['Web-design', 'Frontend'],
        projectLink: 'https://heaven-hub-sigma.vercel.app/'
    },
    {
        imgSrc: '/images/naturalmotion.png',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://getnaturalmotion.com/'
    },
    {
        imgSrc: '/images/project-6.jpg',
        title: 'Ecommerce-Store',
        tags: ['MERN STACK', 'Development'],
        projectLink: 'https://github.com/Abdullah-Hunjra1/Ecommerce-Store'
    },
];



const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work

