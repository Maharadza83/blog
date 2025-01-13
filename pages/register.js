import { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function RegisterPage() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, password })
        });

        if (res.ok) {
            const data = await res.json();

            localStorage.setItem('token', data.token);
            localStorage.setItem('userName', data.userName);

            alert('Rejestracja udana! Zostałeś zalogowany.');
            router.push('/');
        } else {
            const errorData = await res.json();
            alert(errorData.error || 'Coś poszło nie tak przy rejestracji.');
        }
    };

    return (
        <Layout>
            <h1>Rejestracja</h1>
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
                <button type="submit">Zarejestruj</button>
            </form>
        </Layout>
    );
}
