import Layout from '../components/Layout';

export default function FAQPage() {
    return (
        <Layout>
            <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>FAQ – Hodowla Oliwek</h1>
                <ul style={{ marginTop: '20px', lineHeight: '1.8' }}>
                    <li>
                        <strong>Pytanie 1:</strong> Czy mogę hodować oliwki w polskim klimacie?
                        <br />
                        <span>Odpowiedź:</span> Tak, istnieją odmiany oliwek, które świetnie radzą sobie w warunkach doniczkowych, o ile zapewnisz im odpowiednią ilość światła i ciepła.
                    </li>
                    <li style={{ marginTop: '15px' }}>
                        <strong>Pytanie 2:</strong> Jakie odmiany oliwek polecacie dla początkujących?
                        <br />
                        <span>Odpowiedź:</span> Odmiany takie jak Olea europaea ‘Arbequina’ czy ‘Mission’ są łatwe w uprawie i dobrze sprawdzają się w domowych warunkach.
                    </li>
                    <li style={{ marginTop: '15px' }}>
                        <strong>Pytanie 3:</strong> Jak często podlewać drzewko oliwne?
                        <br />
                        <span>Odpowiedź:</span> Drzewka oliwne nie lubią nadmiaru wody. Podlewaj je, gdy górna warstwa ziemi jest sucha. Lepiej podlewać mniej, ale regularnie.
                    </li>
                    <li style={{ marginTop: '15px' }}>
                        <strong>Pytanie 4:</strong> Jak radzić sobie z chorobami i szkodnikami oliwek?
                        <br />
                        <span>Odpowiedź:</span> Najczęściej spotykane problemy to przędziorki i mszyce. Użyj naturalnych środków, takich jak olej neem, lub specjalistycznych preparatów ochrony roślin.
                    </li>
                    <li style={{ marginTop: '15px' }}>
                        <strong>Pytanie 5:</strong> Czy moje oliwki będą owocować w domu?
                        <br />
                        <span>Odpowiedź:</span> W warunkach domowych owocowanie może być trudne, ale z odpowiednią pielęgnacją i światłem jest to możliwe. Zazwyczaj potrzeba kilku lat, aby drzewko zaczęło owocować.
                    </li>
                    <li style={{ marginTop: '15px' }}>
                        <strong>Pytanie 6:</strong> Jak przygotować oliwki do spożycia?
                        <br />
                        <span>Odpowiedź:</span> Świeże oliwki są gorzkie i wymagają odgoryczania. Najprostszą metodą jest moczenie ich w solance przez kilka tygodni, wymieniając wodę co kilka dni.
                    </li>
                </ul>
            </section>
        </Layout>
    );
}
