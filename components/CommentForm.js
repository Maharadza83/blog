import { useState } from 'react';

export default function CommentForm({ onCommentAdd, loggedInUser }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onCommentAdd(text);
        setText('');
    };

    // Jeśli nie ma zalogowanego użytkownika, można
    // pokazać info, że trzeba się zalogować.
    if (!loggedInUser) {
        return (
            <p style={{ marginTop: '20px', color: 'red' }}>
                Musisz być zalogowany, żeby dodać komentarz.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <textarea
          style={{ width: '100%', height: '80px' }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Napisz komentarz..."
      />
            <br />
            <button type="submit">Dodaj komentarz</button>
        </form>
    );
}
