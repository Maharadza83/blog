import { usersDB } from '@/usersDB';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { user, password } = req.body;

        const foundUser = usersDB.find(
            (u) => u.user === user && u.password === password
        );
        if (foundUser) {
            return res.status(200).json({
                token: 'fake-jwt-token',
                userName: user
            });
        }
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
