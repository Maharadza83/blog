import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const initialPosts = [
    {
        id: 1,
        title: 'Pierwszy wpis – wprowadzenie do hodowli oliwek w domu',
        image: '/images/olive1.jpg',
        content: `Hodowanie oliwek w warunkach domowych może wydawać się egzotycznym pomysłem, 
ale tak naprawdę jest to fascynujące hobby, które daje ogromną satysfakcję. Oliwki są jednym 
z najstarszych uprawianych drzew owocowych, cenionych za swoje zdrowotne właściwości i szerokie 
zastosowanie w kuchni. 

W tym wpisie chcę podzielić się moją osobistą historią, jak odkryłem świat hodowli oliwek. 
Pierwszy kontakt miałem podczas podróży do Hiszpanii, gdzie zobaczyłem rozległe gaje oliwne. 
Zafascynowany ich majestatem, postanowiłem spróbować sił z własną rośliną w domu. 

Możecie zapytać: czy to w ogóle możliwe w naszym klimacie? Okazuje się, że tak! Istnieją odmiany, 
które dobrze znoszą warunki panujące w mieszkaniu, o ile zapewnimy im odpowiednią ilość światła 
i umiarkowaną wilgotność. W kolejnych artykułach zdradzę, jakie odmiany polecam dla początkujących 
oraz jak przygotować przestrzeń dla drzewka oliwnego. Zapraszam do lektury!`
    },
    {
        id: 2,
        title: 'Drugi wpis – porady i wskazówki dla początkujących pasjonatów oliwek',
        image: '/images/olive2.jpg',
        content: `Jeśli zastanawiasz się, jak zacząć z hodowlą oliwek, w tym wpisie poznasz kilka 
praktycznych porad. Przede wszystkim wybierz odmianę dostosowaną do warunków doniczkowych. 
Popularne są np. Olea europaea ‘Arbequina’ czy ‘Mission’. 

Kolejną kwestią jest ziemia – drzewka oliwne lubią podłoże przepuszczalne, o lekko zasadowym 
odczynie. Dobrze sprawdza się mieszanka ziemi uniwersalnej z domieszką piasku lub perlitu, 
aby uniknąć zalegania wody przy korzeniach. 

Nie zapominaj o słońcu – oliwki kochają światło, najlepiej słoneczne parapety o ekspozycji 
południowej lub południowo-zachodniej. Zbyt mała ilość światła może spowodować żółknięcie liści 
i wolniejszy wzrost. Bądź też cierpliwy – oliwki rosną dość wolno, ale satysfakcja z ich 
pielęgnacji jest ogromna!`
    },
    {
        id: 3,
        title: 'Trzeci wpis – sekrety rozwoju drzewek oliwnych i pielęgnacja',
        image: '/images/olive3.jpg',
        content: `Oliwki potrzebują optymalnego połączenia światła, wilgotności i temperatury, by 
mogły się prawidłowo rozwijać. Najczęściej preferują temperatury w zakresie 15–25°C. Unikaj 
stawiania donicy przy grzejnikach lub w zimnych przeciągach. 

Kiedy zauważysz pierwsze młode przyrosty na gałązkach, to znak, że roślina zaaklimatyzowała się 
w nowym miejscu. Warto wtedy rozpocząć lekkie nawożenie nawozem do roślin śródziemnomorskich 
lub uniwersalnym nawozem płynnym, stosowanym co kilka tygodni. 

Uważaj na przelanie – oliwki lepiej zniosą zbyt małą ilość wody niż nadmiar. Zawsze sprawdzaj 
wilgotność podłoża przed podlaniem. Jeżeli zauważysz żółknięcie liści, może to być sygnał 
przelania albo niedoświetlenia.`
    },
    {
        id: 4,
        title: 'Czwarty wpis – choroby, szkodniki i sposoby ochrony oliwek',
        image: '/images/olive4.jpg',
        content: `Niestety, nawet najlepiej zadbane drzewko oliwne może paść ofiarą chorób i szkodników. 
Często spotykane są przędziorki, mszyce czy tarczniki. Regularnie oglądaj liście i łodygi, 
aby szybko wykryć ewentualne oznaki żerowania. 

Jeżeli zobaczysz drobne pajęczynki lub białe naloty, zastosuj preparaty na bazie oleju neem 
bądź specjalistyczne środki ochrony roślin. Staraj się unikać ciężkich chemicznych oprysków, 
zwłaszcza w pomieszczeniach mieszkalnych. 

Drugim częstym problemem może być grzyb powodujący plamistość liści – na powierzchni liścia 
widać ciemniejsze lub żółte plamy. Pomocne bywa ograniczenie zraszania liści i poprawa cyrkulacji 
powietrza w pomieszczeniu.`
    },
    {
        id: 5,
        title: 'Piąty wpis – zbiór i wykorzystanie własnych oliwek oraz wskazówki na przyszłość',
        image: '/images/olive5.jpg',
        content: `Po kilku latach cierpliwej uprawy może nadejść moment kulminacyjny: owocowanie. 
Oliwki zazwyczaj kwitną wiosną, a owoce dojrzewają do późnej jesieni. W warunkach domowych nie 
zawsze osiągniemy obfite plony, ale nawet kilka zebranych oliwek może dać mnóstwo radości. 

Aby owoce nadawały się do spożycia, trzeba je najpierw poddać procesowi tzw. odgoryczania. 
Tradycyjna metoda to moczenie w solance przez kilka tygodni, z regularną wymianą wody. 
Dopiero wtedy oliwki są gotowe do marynowania w zalewie ziołowej lub octowej. 

Gdy już spróbujesz własnoręcznie wyhodowanych oliwek, zrozumiesz, dlaczego tak wiele osób 
pokochuje to hobby. Oprócz pysznych owoców zyskasz piękną, dekoracyjną roślinę w domu, która 
przywołuje klimat ciepłego południa. Zachęcam do dzielenia się własnymi doświadczeniami i 
przemyśleniami w komentarzach!`
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
