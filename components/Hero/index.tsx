import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles.module.scss";

export default function Hero() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container} id="home">
                <div className={styles.hero}>
                    {/* Left side */}
                    <div className="flex flex-col">
                        <h1 className="whitespace-nowrap">Front-End React<br /><span className="flex items-center justify-center lg:justify-start flex-nowrap">Developer <Image src={'/waving.png'} className="ml-4" width={64} height={64} alt="Waving hand" /></span></h1>
                        <p className="text-base mt-8">Hi, I'm Colby McHenry. A passionate Front-end React Developer based in Chicago, IL. 📍</p>
                        <div className="flex items-center justify-center lg:justify-start mt-8">
                            <Link href="https://www.linkedin.com/in/colby-mchenry" target="_blank" aria-label='LinkedIn'>
                                <i className="fa-brands fa-linkedin text-3xl"></i>
                            </Link>
                            <Link href="https://github.com/colbymchenry" className="ml-4" target="_blank" aria-label='Github'>
                                <i className="fa-brands fa-github text-3xl"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className={styles.hero__img} />
                </div>

                <div className={styles.techStack}>
                    <span>Tech Stack</span>
                    <div>
                        <div>
                            <Image src={'/html5.svg'} width={32} height={32} alt="HTML5" />
                        </div>
                        <div>
                            <Image src={'/css3.svg'} width={32} height={32} alt="CSS3" />
                        </div>
                        <div>
                            <Image src={'/js.svg'} width={32} height={32} alt="JavaScript" />
                        </div>
                        <div>
                            <Image src={'/react.svg'} width={32} height={32} alt="ReactJS" />
                        </div>
                        <div>
                            <Image src={'/scss.svg'} width={32} height={32} alt="SCSS" />
                        </div>
                        <div>
                            <Image src={'/tailwind.svg'} width={32} height={32} alt="Tailwind" />
                        </div>
                        <div>
                            <Image src={'/svelte.svg'} width={32} height={32} alt="Svelte" />
                        </div>
                        <div>
                            <Image src={'/laravel.svg'} width={32} height={32} alt="Laravel" />
                        </div>
                        <div>
                            <Image src={'/nextjs.svg'} width={32} height={32} alt="NextJS" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}