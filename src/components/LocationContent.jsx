import { useParams } from "react-router-dom";
import locations from "../data/locations.json";
import Caroussel from "./caroussel";

const LocationContent = () => {
  const { id } = useParams();
  const location = locations.find((item) => item.id === id);

  console.log(location.id);
  return (
    <div>
      <Caroussel slides={location.pictures} />
    </div>
  );
};

export default LocationContent;
