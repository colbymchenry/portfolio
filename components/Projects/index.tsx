import Link from "next/link";
import IProject from "./IProject";
import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default function Projects({ projects }: any) {
    return (
        <div className={styles.projects} id="projects">
            <h1>PORTFOLIO</h1>
            <h2>Each project is a unique piece of development 🧩</h2>


            {projects.map((obj: IProject, i: number) => {
                return (
                    <div key={i} className={styles.project}>
                        <div className={styles.imgContainer}>
                            <Carousel showThumbs={false} showIndicators={false} autoPlay={true} emulateTouch={true} infiniteLoop={true} preventMovementUntilSwipeScrollTolerance={true} swipeable={true}>
                                {obj.photos.map((src: string, i: number) => {
                                    return (
                                        <div key={i}>
                                        <img className={"object-contain"} key={i} src={src} />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>

                        <div className={styles.details}>
                            <h1>{obj.name}</h1>
                            <p dangerouslySetInnerHTML={{ __html: obj.body }} />
                            <div className={styles.stack}>
                                {obj.stack.map((_: string, i: number) => (
                                    <span key={i}>{_}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-6 items-center justify-center mt-4">
                                {(obj.github && obj.githubSvelte) ?
                                    // Github and GithubSvelte
                                    (
                                        <div className="flex items-center gap-6">
                                            <Link href={obj.github} target="_blank" className={styles.link}>
                                                Code <i className="fa-brands fa-github text-3xl"></i>
                                            </Link>
                                            <Link href={obj.githubSvelte} target="_blank" className={styles.link}>
                                                Code (Svelte) <i className="fa-brands fa-github text-3xl"></i>
                                            </Link>
                                        </div>
                                    )
                                    // Github (no label could be anything)
                                    : (obj.github) ?
                                        (
                                            <Link href={obj.github} target="_blank" className={styles.link}>
                                                Code <i className="fa-brands fa-github text-3xl"></i>
                                            </Link>
                                        )
                                        : <></>
                                }

                                {obj.demo && (
                                    <Link href={obj.demo} target="_blank" className={styles.link}>
                                        Demo  <i className="fa-solid fa-arrow-up-right-from-square text-3xl"></i>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}