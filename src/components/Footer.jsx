


// Components

import { ButtonPrimary } from "./Button";


const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/Abdullah-Hunjra1'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/abdullah-jutt-8194bb279/'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/abdjutt804?s=11&t=xRcKyOw__4SaOMSf0Vldng'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/abdjutt_804?igsh=MWN6MGpjMGZ5d2liZw=='
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=100019572234823&mibextid=wwXIfr&mibextid=wwXIfr'
    }
];




const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className=" lg:grid lg:grid-cols-2">

                    <div className=" mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>
                        <ButtonPrimary 
                        href="mailto: abdullahhunjra111@gmail.com"
                        label="Start Project"
                        icon="chevron_right"
                        classes="reveal-up"
                        />
                    </div>

                    <div className=" grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className=" mb-2 reveal-up text-[#F5F5F7]">Sitemap</p>

                            <ul>
                                {sitemap.map(({label,href},key)=>(
                                    <li key={key}>
                                        <a href={href} className=" block text-sm text-[#C4C4D4] py-1 transition-colors hover:text-zinc-200 reveal-up">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className=" mb-2 reveal-up text-[#F5F5F7]">Socials</p>

                            <ul>
                                {socials.map(({label,href},key)=>(
                                    <li key={key}>
                                        <a href={href} target="_blank" className=" block text-sm text-[#C4C4D4] py-1 transition-colors hover:text-zinc-200 reveal-up">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className=" flex items-center justify-between pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
                    </a>

                    <p className=" text-[#F5F5F7] text-sm reveal-up">
                        &copy; 2025 <span className=" text-[#F5F5F7]">ABD</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
