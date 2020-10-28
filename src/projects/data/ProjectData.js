import imagebot1 from "../screenshots/bnnbot1.jpg";
import imagebot2 from "../screenshots/bnnbot2.jpg";

import imageportfolio1 from "../screenshots/portfolio1.jpg";
import imageportfolio2 from "../screenshots/portfolio2.jpg";
import imageportfolio3 from "../screenshots/portfolio3.jpg";

import imagespyfall1 from "../screenshots/spyfall1.jpg";
import imagespyfall2 from "../screenshots/spyfall2.jpg";
import imagespyfall3 from "../screenshots/spyfall3.jpg";

import imageCardM1 from "../screenshots/cardmaker1.png";
import imageCardM2 from "../screenshots/cardmaker2.png";
import imageCardM3 from "../screenshots/cardmaker3.png";
import imageCardM4 from "../screenshots/cardmaker4.png";

const BnnBotData = {
  title: "Bnn Bot",
  description:
    "Strona umożliwiająca dodanie mojego bota na serwer do aplikacji Discord, który wykorzystuje różne API i cechuje się bogatą funkcjonalnością.",
  images: [imagebot1, imagebot2],
  github: "https://github.com/BajKull/BnnBotSite",
  live: "https://bnnbot.netlify.app/",
};

const PortfolioData = {
  title: "Portfolio",
  description: "Strona reprezentująca mnie, moje projekty oraz umiejętności.",
  images: [imageportfolio1, imageportfolio2, imageportfolio3],
  github: "https://github.com/BajKull/portfolio",
  live: "https://dbanachowski.netlify.app/",
};

const SpyfallData = {
  title: "Spyfall",
  description:
    "Gra planszowa/karciana Spyfall przeniesiona na przeglądarkę. Zgarnij przyjaciół i zagraj z nimi, nakryj szpiega lub jeśli nim jesteś, odgadnij lokację graczy. Przewiduje opcję uruchomienia na jednym urządzeniu przez wielu graczy, bądź poprzez online lobby.",
  images: [imagespyfall1, imagespyfall2, imagespyfall3],
  github: "https://github.com/BajKull/Spyfall",
  live: "http://spyfallthegame.netlify.com/",
};

const BnnCardMaker = {
  title: "Card Maker",
  description:
    "Serwis umożliwiający tworzenie kart online we wbudowanym edytorze, publikowanie ich poprzez wygenerowany link URL lub pobranie na urządzenie jako obraz. Karty można tworzyć od zera lub edytować dostępne szablony. Szablony mogą być stworzone przez każdego użytkownika, jednak nie są od razu dostępne do publicznego podglądu w wyszukiwarce ze względu na treści, które użytkownik może dodać, jednak dalej można do nich uzyskać dostęp za pośrednictwem linku. Aplikacja pozwala na tworzenie konta i edytowanie profilu użytkownika.",
  images: [imageCardM1, imageCardM2, imageCardM3, imageCardM4],
  github: "https://github.com/BajKull/cardmaker",
  live: "https://bnncardmaker.netlify.app/",
};

const data = [BnnCardMaker, SpyfallData, BnnBotData, PortfolioData];

export default data;
