import { usersDB } from '@/usersDB';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { user, password } = req.body;

        // Sprawdzamy, czy user o takiej nazwie nie istnieje
        const existingUser = usersDB.find(u => u.user === user);
        if (existingUser) {
            return res
                .status(400)
                .json({ error: 'Użytkownik o takiej nazwie już istnieje.' });
        }

        // Dodajemy do tablicy
        usersDB.push({ user, password });

        return res.status(200).json({
            message: 'Konto zostało zarejestrowane.',
            token: 'fake-jwt-token',
            userName: user
        });
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
