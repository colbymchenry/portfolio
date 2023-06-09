import Link from 'next/link'
import styles from './styles.module.scss'


export default function Navbar() {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className={styles.nav}>
            <div>
                <h1>Colby.dev</h1>

                <div>
                    <Link href={"#__next"} onClick={handleScroll}>Home</Link>
                    <Link href={"#about"} onClick={handleScroll}>About</Link>
                    <Link href={"#projects"} onClick={handleScroll}>Projects</Link>
                    <Link href={"#contact"} onClick={handleScroll}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}