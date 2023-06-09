import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h1>Copyright © 2023. All rights are reserved</h1>
            <div className="flex items-center justify-center lg:justify-start">
                <Link href="https://www.linkedin.com/in/colby-mchenry" target="_blank" aria-label='LinkedIn'>
                    <i className="fa-brands fa-linkedin text-3xl"></i>
                </Link>
                <Link href="https://github.com/colbymchenry" className="ml-4" target="_blank" aria-label='Github'>
                    <i className="fa-brands fa-github text-3xl"></i>
                </Link>
            </div>
        </footer>
    )
}