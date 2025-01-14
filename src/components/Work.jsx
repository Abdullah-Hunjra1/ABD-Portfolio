

// Components

import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Ecommerce Website',
        tags: ['ecommerce', 'Development'],
        projectLink: 'https://getnaturalmotion.com/'
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Market Phy',
        tags: ['ecommerce', 'Development'],
        projectLink: 'https://marketphy.com/website-development-services/'
    },
    {
        imgSrc: '/images/project-3.jpg',
        title: 'IAN DARRAH',
        tags: ['Development', 'API'],
        projectLink: 'https://iandarrah.com/'
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: '/images/project-6.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
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