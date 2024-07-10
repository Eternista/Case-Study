import { PageTranscripts } from "../../assets/scripts/Context";
import Intro from "../context/Intro";
import BaseContext from "../context/baseContext";
import Banner from "../context/banner";
import Testimonials from "../context/testimonials";

const Main = () => {

  const  processData = {
    title: "Process",
    texts: [
      "<p>The design process began with stakeholder meetings to define project goals and requirements, followed by the definition of typography and color schemes. It then progressed through the creation of atomic and molecular components, culminating in the development of a comprehensive design system.</p>",
      "<p style='font-weight:500;'>Typography and Colors:</p>",
      "<p>Defined primary and secondary typefaces, font sizes, and color palettes consistent with Nissan’s brand identity.</p>",
      "<p style='font-weight:500;'>Molecular Components:</p>",
      "<p> Integrated atomic elements into larger, more complex UI components like navigation bars, search fields, and interactive widgets.</p>",
      "<p style='font-weight:500;'>Design System:</p>",
      "<p>Created a scalable and accessible Mobile Design System (MDS) that harmonized with Nissan’s existing web design system, ensuring a seamless brand experience across platforms.</p>"
    ]
  }

  return (
    <main className="page">
      <Intro data={PageTranscripts.intro}/>
      <Banner/>
      <BaseContext data={PageTranscripts.challenge}/>
      <Banner/>
      <BaseContext data={PageTranscripts.responsibilites}/>
      <BaseContext data={processData}/>
      <BaseContext data={PageTranscripts.result}/>
      <BaseContext data={PageTranscripts.conclusion}/>
      <div className="separator"></div>
      <Testimonials />
    </main>
  );
};

export default Main;
