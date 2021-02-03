import imagebot1 from "../screenshots/bnnbot1.jpg";
import imagebot2 from "../screenshots/bnnbot2.jpg";
import imagebot3 from "../screenshots/bnnbot3.jpg";

import imageportfolio1 from "../screenshots/portfolio1.jpg";
import imageportfolio2 from "../screenshots/portfolio2.jpg";
import imageportfolio3 from "../screenshots/portfolio3.jpg";
import imageportfolio4 from "../screenshots/portfolio4.jpg";

import imagespyfall1 from "../screenshots/spyfall1.jpg";
import imagespyfall2 from "../screenshots/spyfall2.jpg";
import imagespyfall3 from "../screenshots/spyfall3.jpg";
import imagespyfall4 from "../screenshots/spyfall4.jpg";

import imageCardM1 from "../screenshots/cardmaker1.jpg";
import imageCardM2 from "../screenshots/cardmaker2.jpg";
import imageCardM3 from "../screenshots/cardmaker3.jpg";

import imageExs1 from "../screenshots/exsfromtexas1.jpg";
import imageExs2 from "../screenshots/exsfromtexas2.jpg";
import imageExs3 from "../screenshots/exsfromtexas3.jpg";

import imagechess1 from "../screenshots/chessblog1.jpg";
import imagechess2 from "../screenshots/chessblog2.jpg";
import imagechess3 from "../screenshots/chessblog3.jpg";

const BnnBotData = {
  title: "Bnn Bot",
  description:
    "Strona umożliwiająca dodanie mojego bota na serwer do aplikacji Discord, który wykorzystuje różne API i cechuje się bogatą funkcjonalnością.",
  images: [imagebot1, imagebot2, imagebot3],
  github: "https://github.com/BajKull/BnnBotSite",
  live: "https://bnnbot.netlify.app/",
};

const PortfolioData = {
  title: "Portfolio",
  description: "Strona reprezentująca mnie, moje projekty oraz umiejętności.",
  images: [imageportfolio1, imageportfolio2, imageportfolio3, imageportfolio4],
  github: "https://github.com/BajKull/portfolio",
  live: "https://dbanachowski.netlify.app/",
};

const SpyfallData = {
  title: "Spyfall",
  description:
    "Gra planszowa/karciana Spyfall przeniesiona na przeglądarkę. Zgarnij przyjaciół i zagraj z nimi, nakryj szpiega lub jeśli nim jesteś, odgadnij lokację graczy. Przewiduje opcję uruchomienia na jednym urządzeniu przez wielu graczy, bądź poprzez online lobby.",
  images: [imagespyfall1, imagespyfall2, imagespyfall3, imagespyfall4],
  github: "https://github.com/BajKull/Spyfall",
  live: "http://spyfallthegame.netlify.com/",
};

const BnnCardMaker = {
  title: "Card Maker",
  description:
    "Serwis umożliwiający tworzenie kart online we wbudowanym edytorze, publikowanie ich poprzez wygenerowany link URL lub pobranie na urządzenie jako obraz. Karty można tworzyć od zera lub edytować dostępne szablony. Szablony mogą być stworzone przez każdego użytkownika, jednak nie są od razu dostępne do publicznego podglądu w wyszukiwarce ze względu na treści, które użytkownik może dodać, jednak dalej można do nich uzyskać dostęp za pośrednictwem linku. Aplikacja pozwala na tworzenie konta i edytowanie profilu użytkownika.",
  images: [imageCardM1, imageCardM2, imageCardM3],
  github: "https://github.com/BajKull/cardmaker",
  live: "https://bnncardmaker.netlify.app/",
};

const ExsFromTexas = {
  title: "Ex's from Texas",
  description:
    "Aplikacja pozwalająca na grę w pokera w wersji Texas Hold'em online w czasie rzeczywistym. Gracze łączą się do lobby i rozpoczynają rozgrywkę. Jest to projekt grupowy, w którym jestem odpowiedzialny za front-end.",
  images: [imageExs1, imageExs2, imageExs3],
  github: "https://github.com/BajKull/exsfromtexas",
  live: "https://exsfromtexas.netlify.app/",
};

const ChessBlog = {
  title: "Chess-blog",
  description:
    "Statyczna strona zrobiona w Gatsbym. Pobiera dane dotyczące z postów z Firebase, Contentful, lokalnych plików .md",
  images: [imagechess1, imagechess2, imagechess3],
  github: "https://github.com/BajKull/chess-blog",
  live: "https://chess-blog.netlify.app/",
};

const data = [
  BnnCardMaker,
  ExsFromTexas,
  ChessBlog,
  SpyfallData,
  BnnBotData,
  PortfolioData,
];

export default data;
