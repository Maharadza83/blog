import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';

// Nasze posty
import { initialPosts } from '../../pages/index';

export default function PostPage() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userName = localStorage.getItem('userName');
        if (token && userName) {
            setLoggedInUser(userName);
        }
    }, []);

    useEffect(() => {
        if (id) {
            const found = initialPosts.find((p) => p.id === parseInt(id));
            setPost(found);

            // Ładujemy komentarze z API (zakładam, że to Twój endpoint)
            fetch(`/api/comments?postId=${id}`)
                .then((res) => res.json())
                .then((data) => setComments(data.comments))
                .catch((err) => console.error(err));
        }
    }, [id]);

    const handleCommentAdd = async (text) => {
        if (!loggedInUser) {
            alert('Musisz być zalogowany, aby dodać komentarz!');
            return;
        }

        // Wysyłamy komentarz do API
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postId: id, text, user: loggedInUser })
        });

        const data = await res.json();
        setComments(data.comments);
    };

    // Funkcja dzieląca content na akapity
    const renderParagraphs = (content) => {
        return content
            .split('\n\n') // podział na akapity
            .map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1em', lineHeight: '1.6' }}>
                    {paragraph.trim()}
                </p>
            ));
    };

    if (!post) {
        return (
            <Layout>
                <p>Wpis nie został znaleziony.</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <h1>{post.title}</h1>

            {/* Wyświetlamy obrazek */}
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title}
                    style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
                />
            )}

            {/* Renderujemy akapity z treści */}
            {renderParagraphs(post.content)}

            <h2 style={{ marginTop: '30px' }}>Komentarze użytkowników</h2>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((c, index) => (
                        <li key={index}>
                            <strong>{c.user}</strong>: {c.text}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Brak komentarzy. Dodaj pierwszy!</p>
            )}

            <CommentForm onCommentAdd={handleCommentAdd} loggedInUser={loggedInUser} />
        </Layout>
    );
}
