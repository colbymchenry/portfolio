import Image from "next/image";
import styles from "./styles.module.scss";

export default function About() {
    return (
        <div className={styles.about} id="about">
            <div className="relative">
                <Image src={'/computerDesk.png'} width={256} height={256} alt="" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute bottom-[-40px] right-[-40px] items-center justify-center hidden md:flex">
                    <Image src={'/geek_text.svg'} width={180} height={180} alt="" className={styles.spin} />
                    <Image src={'/geek.png'} width={64} height={64} alt="" className="absolute" />
                </div>
            </div>

            <div className="flex flex-col">
                <h1>ABOUT ME</h1>
                <h2>A dedicated Front-end Developer<br />based in Chicago, IL 📍</h2>
                <p>As a seasoned Full Stack Developer and Lead UI Engineer, I boast a robust skill set in Svelte, TypeScript, Tailwind CSS, React, and Git, among others. My strength lies in designing and deploying intuitive Single Page Applications (SPA). I specialize in crafting dynamic, engaging reusable components by writing clean, optimized code and leveraging cutting-edge development tools. My experience has seen me create proprietary components, enhance QA efficiency, and build a comprehensive component library from scratch. I'm also a dedicated team player, excelling in collaboration with cross-functional teams to deliver top-tier web applications. My passion for leadership and experience in building SAP products mark my unique contribution to the tech sector.</p>
            </div>
        </div>
    )
}