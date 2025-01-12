// Prosta baza komentarzy w pamięci
let commentsDB = {
    // postId: [ { user: 'admin', text: 'fajny post!' }, ... ]
};

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { postId } = req.query;
        const comments = commentsDB[postId] || [];
        return res.status(200).json({ comments });
    }

    if (req.method === 'POST') {
        const { postId, text, user } = req.body;
        if (!commentsDB[postId]) {
            commentsDB[postId] = [];
        }
        commentsDB[postId].push({ user, text });
        return res.status(200).json({ comments: commentsDB[postId] });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
