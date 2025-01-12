import Layout from '../components/Layout';

export default function FAQPage() {
    return (
        <Layout>
            <h1>FAQ</h1>
            <ul style={{ marginTop: '20px', lineHeight: '1.6' }}>
                <li><strong>Pytanie 1:</strong> Jak zacząć z Next.js?</li>
                <li><strong>Odpowiedź:</strong> Zacznij od dokumentacji na nextjs.org/docs.</li>

                <li><strong>Pytanie 2:</strong> Czy muszę znać Reacta?</li>
                <li><strong>Odpowiedź:</strong> Tak, Next.js to framework oparty na React.</li>
            </ul>
        </Layout>
    );
}
