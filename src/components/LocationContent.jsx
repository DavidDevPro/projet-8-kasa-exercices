import { useParams } from "react-router-dom";
import locations from "../data/locations.json";
import Caroussel from "./caroussel";
import Tags from "./Tags";
import Rating from "./Rating";
import DropList from "./DropList";

const LocationContent = () => {
  const { id } = useParams();
  const location = locations.find((item) => item.id === id);

  console.log(location.id);
  return (
    <div className="locationContent">
      <Caroussel slides={location.pictures} />
      <div className="descriptionTop">
        <div className="descriptionTop-left">
          <h1>{location.title}</h1>
          <p>{location.location}</p>
          <div className="tags">
            {location.tags.map((tag, index) => (
              <Tags key={index} text={tag} />
            ))}
          </div>
        </div>
        <div className="descriptionTop-right">
          <div className="personalInfos">
            <h2>{location.host.name}</h2>
            <img
              src={location.host.picture}
              alt={`image de ${location.host.name}`}
            />
          </div>
          <div className="rating">
            <Rating rating={parseInt(location.rating)} />
          </div>
        </div>
      </div>
      <div className="dropList">
        <DropList className="list" title="Déscription">
          {location.description}
        </DropList>
        <DropList className="list" title="équipement">
          <ul>
            {location.equipements.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </DropList>
      </div>
    </div>
  );
};

export default LocationContent;
