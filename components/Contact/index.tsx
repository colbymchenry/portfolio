import styles from "./styles.module.scss";

export default function Contact() {
    return (
        <div id="contact" className={styles.contact}>
            <h1>CONTACT</h1>
            <h2>Don't be shy! Hit me up! 👇</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 mt-12">
                <div className={styles.contactInfo}>
                    <i className="fa-solid fa-map-location-dot"></i>
                    <div className="flex flex-col">
                        <h3>Location</h3>
                        <h4>Chicago, IL</h4>
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <i className="fa-solid fa-envelope-open-text"></i>
                    <div className="flex flex-col">
                        <h3>Mail</h3>
                        <h4><a href="mailto:me@colbymchenry.com">me@colbymchenry.com</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}