import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';

// Udawane dane wpisów (takie same jak w index.js)
const initialPosts = [
    {
        id: 1,
        title: 'Pierwszy wpis – wprowadzenie do hodowli oliwek w domu',
        content: `Hodowanie oliwek w warunkach domowych może wydawać się egzotycznym pomysłem, 
ale tak naprawdę jest to fascynujące hobby, które daje ogromną satysfakcję. 
Oliwki są jednym z najstarszych uprawianych drzew owocowych, cenionych za swoje 
zdrowotne właściwości i szerokie zastosowanie w kuchni. W tym wpisie chcę podzielić 
się moją osobistą historią, jak odkryłem świat hodowli oliwek. 
Pierwszy kontakt miałem podczas podróży do Hiszpanii, gdzie zobaczyłem rozległe 
gaje oliwne. Zafascynowany ich majestatem, postanowiłem spróbować sił z własną 
roslinką w domu. 

Możecie zapytać: czy to w ogóle możliwe w naszym klimacie? Okazuje się, że tak! 
Istnieją odmiany, które dobrze znoszą warunki panujące w mieszkaniu, o ile zapewnimy 
im odpowiednią ilość światła i umiarkowaną wilgotność. W kolejnych artykułach zdradzę, 
jakie odmiany polecam dla początkujących oraz jak przygotować przestrzeń dla 
drzewka oliwnego. Zapraszam do lektury!`
    },
    {
        id: 2,
        title: 'Drugi wpis – porady i wskazówki dla początkujących pasjonatów oliwek',
        content: `Jeśli zastanawiasz się, jak zacząć z hodowlą oliwek, w tym wpisie poznasz 
kilka praktycznych porad. Przede wszystkim, wybierz odpowiednią odmianę przystosowaną 
do warunków doniczkowych. Popularne są np. odmiany typu Olea europaea 'Arbequina' czy 
'Olea europaea 'Mission', które z powodzeniem można uprawiać na parapetach lub 
w ogrodach zimowych. 

Kolejną kwestią jest ziemia – drzewka oliwne lubią podłoże przepuszczalne, o lekko 
zasadowym odczynie. Często stosuje się mieszankę ziemi uniwersalnej, piasku i ewentualnie 
odrobiny żwiru, by zapobiec zaleganiu wody przy korzeniach. Pamiętaj też o donicy z 
odpowiednim drenażem. Oliwki wolą lekkie przesuszenie niż przelanie. 

Nie zapominaj o słońcu – oliwki kochają światło, więc warto znaleźć im jasne miejsce 
blisko okna, najlepiej o ekspozycji południowej lub południowo-zachodniej. Przy 
zbyt małej ilości światła liście mogą żółknąć, a wzrost będzie znacznie wolniejszy. 
Ostatnia rada na start: bądź cierpliwy – oliwki rosną dość wolno, więc regularna, ale 
nienachalna opieka to klucz do sukcesu.`
    },
    {
        id: 3,
        title: 'Trzeci wpis – sekrety rozwoju drzewek oliwnych w warunkach domowych',
        content: `Oliwki potrzebują odpowiedniego połączenia światła, wilgotności i temperatury, 
by móc się prawidłowo rozwijać. Większość odmian woli zakres temperatur między 15°C a 25°C, 
co w domu jest stosunkowo łatwe do utrzymania. Unikaj jednak stawiania donicy przy gorących 
kaloryferach lub w przeciągach (np. przy często otwieranym oknie zimą). 

Kiedy zauważyłem pierwsze przyrosty na swoim drzewku oliwnym, byłem zachwycony – drobne, 
jasnozielone gałązki zaczynały się rozwijać coraz szybciej. Kluczem okazało się stosowanie 
regularnego nawożenia nawozem bogatym w potas i fosfor, które wspierają kwitnienie i 
owocowanie. Nie oczekuj jednak owoców w ciągu kilku miesięcy – czasem trzeba poczekać nawet 
kilka lat. 

Jeśli chodzi o podlewanie – zachowaj umiar. Sprawdzaj wilgotność podłoża: jeśli jego wierzchnia 
warstwa jest sucha na głębokość około 2–3 cm, wtedy dopiero podlej. Nadmierne podlewanie może 
prowadzić do gnicia korzeni, co niestety szybko może wykończyć roślinę. Pamiętaj również, 
aby obficie lać wodę, ale dać jej spłynąć i usunąć nadmiar z podstawka. Takie drobne nawyki 
pomagają drzewkom oliwnym zdrowo rosnąć w naszych domach.`
    },
    {
        id: 4,
        title: 'Czwarty wpis – jak radzić sobie z ewentualnymi chorobami i szkodnikami',
        content: `Nawet najlepiej zadbane drzewko oliwne może paść ofiarą chorób i szkodników. 
Najczęściej spotykane problemy w domowej uprawie to przędziorki, tarczniki i mszyce. 
Jeżeli zauważysz na liściach drobne pajęczynki lub białe kropki, prawdopodobnie masz do 
czynienia z przędziorkiem. W walce z nimi pomóc mogą naturalne preparaty na bazie olejków 
(roślinnych, np. olej neem) albo środki chemiczne dedykowane roślinom ozdobnym. 

Czasem zdarza się również, że liście oliwek żółkną i opadają. Może to być spowodowane 
zarówno nadmiernym, jak i niedostatecznym podlewaniem. Dlatego tak ważne jest pilnowanie 
regularności i umiaru. Pamiętaj też, by nie stosować zbyt dużej dawki nawozu na raz – 
przenawożenie potrafi uszkodzić korzenie. 

Podczas mojej hodowli spotkałem się też z sytuacją, gdy oliwka miała plamy na liściach. 
Okazało się, że powodem było zbyt częste zraszanie w połączeniu ze słabą wentylacją. 
Niektóre odmiany mogą źle reagować na nadmiar wilgoci na liściach. Warto wietrzyć pomieszczenie, 
ale tak, by uniknąć przeciągów. Dobry przepływ powietrza ogranicza rozwój grzybów i bakterii.`
    },
    {
        id: 5,
        title: 'Piąty wpis – zbiór i wykorzystanie własnych oliwek',
        content: `Jeśli wszystko pójdzie dobrze, po kilku latach możesz doczekać się pierwszych owoców. 
Proces kwitnienia zaczyna się zwykle wiosną, a oliwki dojrzewają stopniowo aż do późnej jesieni. 
Pamiętaj jednak, że domowa hodowla oliwek jest nastawiona raczej na przyjemność i pasję niż na 
masowe zbiory. Ilość owoców będzie skromna, ale sam fakt, że udało Ci się wyhodować „prawdziwe” 
oliwki, jest wspaniałym uczuciem! 

Co zrobić z takimi owocami? Zazwyczaj wymagają one procesu marynowania lub peklowania, by pozbyć 
się goryczki. Tradycyjne metody zakładają moczenie w solance i codzienną wymianę wody przez kilka 
tygodni. Możesz też spróbować krótszej drogi, wykorzystując specjalne zalewy octowe lub oliwne. 
Moje pierwsze własnoręcznie zebrane oliwki zamarynowałem w oliwie z dodatkiem czosnku i ziół 
prowansalskich – efekt przeszedł moje oczekiwania! 

Mam nadzieję, że ta mała seria wpisów zainspiruje Cię do spróbowania hodowli oliwek w domu. 
To piękna przygoda, choć wymaga cierpliwości i świadomej pielęgnacji. Nic nie zastąpi jednak 
widoku kwitnącego drzewka oliwnego na Twoim parapecie, a satysfakcja ze zjedzenia własnych, 
choćby nielicznych, owoców jest bezcenna. Życzę powodzenia i trzymam kciuki za Twoje oliwkowe 
eksperymenty!`
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
