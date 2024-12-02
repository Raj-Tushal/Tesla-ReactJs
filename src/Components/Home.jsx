import Section from "./Section";
import modelY from "../assets/model-y-right.jpg";
import Model3 from "../assets/Model3.jpg";
import modelX from "../assets/modely.jpg";
import modelS from "../assets/ModelS.jpg";
import cybertruck from "../assets/cybertruck.jpg";
import solarPanel from "../assets/solarPanel.jpg";
import solarRoof from "../assets/solarRoof.jpg";
import powerWall from "../assets/powerWall.jpg";
import Accessories from "../assets/Accessories.jpg";

function Home() {
  // Array of section data
  const sectionsData = [
    {
      image: modelY,
      title: "Model Y",
      rightBtnText: "Demo Drive",
      headline: "Order Online for Touchless Delivery",
    },
    {
      image: Model3,
      title: "Model 3",
      rightBtnText: "Experience Model 3",
      headline: "Order Online for Touchless Delivery",
    },
    {
      image: modelX,
      title: "Model X",
      rightBtnText: "Demo Drive",
      headline: "Order Online for Touchless Delivery",
    },
    {
      image: modelS,
      title: "Model S",
      rightBtnText: "Demo Drive",
      headline: "Order Online for Touchless Delivery",
    },
    {
      image: cybertruck,
      title: "Cybertruck",
      rightBtnText: "Demo Drive",
    },
    {
      image: solarPanel,
      title: "Solar Panels",
      rightBtnText: "Learn More",
      headline: "Schedule a Virtual Consultation",
    },
    {
      image: solarRoof,
      title: "Solar Roof",
      rightBtnText: "Learn More",
      headline: "Produce Clean Energy From Your Roof",
    },
    {
      image: powerWall,
      title: "PowerWall",
      rightBtnText: "Learn More",
    },
    {
      image: Accessories,
      title: "Accessories",
    },
  ];

  return (
    <div className="h-screen w-full bg-red-600">
      {/* Use map to render Section components dynamically */}
      {sectionsData.map((section, index) => (
        <Section
          key={index} 
          image={section.image}
          title={section.title}
          rightBtnText={section.rightBtnText}
          headline={section.headline}
        />
      ))}
    </div>
  );
}

export default Home;
