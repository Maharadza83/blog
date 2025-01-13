import Layout from '../components/Layout';

export default function ContactPage() {
    return (
        <Layout>
            <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>Kontakt</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
                    Jeśli masz pytania lub chcesz się z nami skontaktować, zapraszamy do kontaktu:
                </p>
                <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
                    <li>
                        <strong>Email:</strong> <a href="mailto:kontakt@nasz-blog.pl">kontakt@nasz-blog.pl</a>
                    </li>
                    <li>
                        <strong>Telefon:</strong> +48 123 456 789
                    </li>
                    <li>
                        <strong>Media społecznościowe:</strong> <a href="https://github.com/Maharadza83/blog">Facebook</a>, <a href="https://github.com/Maharadza83/blog">Twitter</a>
                    </li>
                </ul>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
                    Możesz również odwiedzić naszą lokalizację:
                </p>
                <div style={{ textAlign: 'center' }}>
                    <img
                        src="/images/mapaa.jpg"
                        alt="Mapa lokalizacji"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                        }}
                    />
                </div>
            </section>
        </Layout>
    );
}
