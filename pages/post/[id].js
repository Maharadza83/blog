import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';

// Udawane dane wpisów (takie same jak w index.js)
const initialPosts = [
    {
        id: 1,
        title: 'Pierwszy wpis na blogu',
        content: 'To jest treść pierwszego wpisu - krótkie wprowadzenie.'
    },
    {
        id: 2,
        title: 'Drugi wpis - porady',
        content: 'Kilka porad i wskazówek, jak stworzyć swoją pierwszą stronę.'
    },
    {
        id: 3,
        title: 'Trzeci wpis - ciekawostki',
        content: 'Interesujące ciekawostki dotyczące nowości w świecie front-endu.'
    },
    {
        id: 4,
        title: 'Czwarty wpis - tutorial',
        content: 'Mały tutorial krok po kroku - jak zacząć z Next.js.'
    },
    {
        id: 5,
        title: 'Piąty wpis - podsumowanie',
        content: 'Podsumowanie i wnioski z naszych dotychczasowych doświadczeń.'
    }
];

export default function PostPage() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        // Sprawdzamy, czy w localStorage jest user
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

            // Ładujemy komentarze z API
            fetch(`/api/comments?postId=${id}`)
                .then(res => res.json())
                .then(data => setComments(data.comments))
                .catch(err => console.error(err));
        }
    }, [id]);

    const handleCommentAdd = async (text) => {
        if (!loggedInUser) {
            alert('Musisz być zalogowany, aby dodać komentarz!');
            return;
        }

        // wysyłamy komentarz do API z informacją o userze
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
            <p>{post.content}</p>

            <h2 style={{ marginTop: '30px' }}>Komentarze</h2>
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
