import homeBanner from "../assets/img/homeBanner.png";

const HomeBanner = () => {
  return (
    <div>
      <div className="homeBanner">
        <img src={homeBanner} alt="Bannière de la page d'accueil" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};

export default HomeBanner;
