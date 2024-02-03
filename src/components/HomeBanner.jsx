import homeBanner from "../assets/img/homeBanner.png";
import LocationCard from "./LocationCard";

const HomeBanner = () => {
  return (
    <div>
      <div className="homeBanner">
        <img src={homeBanner} alt="Bannière de la page d'accueil" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <LocationCard />
    </div>
  );
};

export default HomeBanner;
