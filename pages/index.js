import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

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

export default function HomePage() {
    const [posts] = useState(initialPosts);

    return (
        <Layout>
            <h1 className={styles.title}>Witaj na blogu!</h1>
            <p className={styles.subtitle}>Znajdziesz tu różne wpisy na temat web developmentu.</p>

            <div className={styles.postsContainer}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.postItem}>
                        <h2>{post.title}</h2>
                        <p>{post.content.substring(0, 60)}...</p>
                        <Link href={`/post/${post.id}`} className={styles.readMore}>
                            Czytaj więcej &rarr;
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
