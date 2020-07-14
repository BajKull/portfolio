import imagebot1 from "../screenshots/bnnbot1.jpg";
import imagebot2 from "../screenshots/bnnbot2.jpg";

import imageportfolio1 from "../screenshots/portfolio1.jpg";
import imageportfolio2 from "../screenshots/portfolio2.jpg";
import imageportfolio3 from "../screenshots/portfolio3.jpg";

import imagespyfall1 from "../screenshots/spyfall1.jpg";
import imagespyfall2 from "../screenshots/spyfall2.jpg";
import imagespyfall3 from "../screenshots/spyfall3.jpg";

const BnnBotData = {
  title: "Bnn Bot",
  description:
    "Strona umożliwiająca dodanie bota na serwer do aplikacji discord, który wykorzystuje różne API i cechuje się bogatą funkcjonalnością.",
  images: [imagebot1, imagebot2],
  github: "https://github.com/BajKull/BnnBotSite",
  live: "https://bnnbot.netlify.app/",
};

const PortfolioData = {
  title: "Portfolio",
  description: "Strona reprezentująca moje projekty oraz umiejętności.",
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

const data = [SpyfallData, BnnBotData, PortfolioData];

export default data;
