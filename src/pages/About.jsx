import AboutBanner from "../components/AboutBanner";
import DropList from "../components/DropList";
import itemsData from "../data/dropList.json";

const About = () => {
  return (
    <div className="aboutPage">
      <AboutBanner />
      {itemsData.map((item) => (
        <DropList key={item.id} title={item.title}>
          {item.text}
        </DropList>
      ))}
    </div>
  );
};

export default About;
