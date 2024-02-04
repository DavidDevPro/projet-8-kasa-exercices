import { NavLink } from "react-router-dom";
import locations from "../data/locations.json";

const HomeGallery = () => {
  return (
    <div className="gallery">
      {locations.map((location) => (
        <div key={location.id} className="locationCard">
          <NavLink to={`/locations/${location.id}`}>
            <img src={location.cover} alt={`image de ${location.title}`} />
            <h2>{location.title}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default HomeGallery;
