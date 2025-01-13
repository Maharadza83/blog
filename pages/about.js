import Layout from '../components/Layout';
import '../styles/AboutUs.module.css';
import styles from '../styles/AboutUs.module.css';

export default function AboutPage() {
    return (
        <Layout>
            <section className={styles["about-us-section"]}>
                <div className={styles["about-us-container"]}>
                    <h1 className={styles["about-us-title"]}>O nas</h1>
                    <p className={styles["about-us-paragraph"]}>
                        Witaj w naszym świecie pełnym pasji do oliwek! Za naszym projektem stoją Dominik i Igor,
                        dwóch miłośników natury i hodowli roślin, którzy wspólnie postanowili stworzyć miejsce,
                        gdzie podzielą się swoją wiedzą i doświadczeniami z hodowli oliwek w domowych warunkach.
                    </p>
                    <p className={styles["about-us-paragraph"]}>
                        Wszystko zaczęło się kilka lat temu, kiedy Dominik, podczas podróży do Hiszpanii,
                        zachwycił się malowniczymi gajami oliwnymi. Zainspirowany tym widokiem, postanowił
                        sprowadzić odrobinę śródziemnomorskiego klimatu do swojego mieszkania. Z kolei Igor,
                        znany ze swojej cierpliwości i dokładności, szybko dołączył do tego projektu,
                        wniósł nowe pomysły i stał się niezastąpionym wsparciem w pielęgnacji roślin.
                    </p>
                    <p className={styles["about-us-paragraph"]}>
                        Wspólnie rozwijamy naszą wiedzę, eksperymentując z różnymi odmianami oliwek i technikami ich
                        uprawy. Dzięki naszym staraniom udowadniamy, że nawet w polskim klimacie można z sukcesem
                        hodować oliwki, czerpiąc z tego ogromną satysfakcję.
                    </p>
                    <p className={styles["about-us-paragraph"]}>
                        Naszym celem jest inspirowanie innych do odkrywania uroków hodowli oliwek. Na blogu dzielimy się
                        praktycznymi poradami – od wyboru odpowiednich odmian, przez pielęgnację i ochronę przed
                        szkodnikami, aż po zbiór i wykorzystanie własnych owoców. Każdy wpis to część naszej osobistej
                        podróży, którą chcemy przeżywać razem z Wami.
                    </p>
                    <p className={styles["about-us-paragraph"]}>
                        Dołącz do naszej społeczności i poznaj magię hodowli oliwek. Niech każde nowe drzewko stanie się
                        symbolem cierpliwości, pasji i miłości do natury, które tak bardzo nas inspirują!
                    </p>
                </div>
            </section>
        </Layout>
    );
}
