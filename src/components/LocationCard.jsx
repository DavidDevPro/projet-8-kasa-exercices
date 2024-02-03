import locations from "../data/locations.json";

const LocationCard = () => {
  return (
    <div className="gallery">
      {locations.map((location) => (
        <div key={location.id} className="locationCard">
          <img src={location.cover} alt={location.title} />
          <h2>{location.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default LocationCard;
