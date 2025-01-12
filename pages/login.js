import { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, password })
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('userName', data.userName);

            alert('Zalogowano pomyślnie!');
            router.push('/');
        } else {
            alert('Błędne dane logowania.');
        }
    };

    return (
        <Layout>
            <h1>Logowanie</h1>
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Nazwa użytkownika: </label><br/>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Hasło: </label><br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                </div>
                <button type="submit">Zaloguj</button>
            </form>
        </Layout>
    );
}
