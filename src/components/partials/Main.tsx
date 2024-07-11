import { PageTranscripts } from "../../assets/scripts/Context-ben";
import Intro from "../context/Intro";
import BaseContext from "../context/baseContext";
import Banner from "../context/banner";
// import Testimonials from "../context/testimonials";

const Main = () => {

  return (
    <main className="page">
      <Intro data={PageTranscripts.intro}/>
      <Banner/>
      <BaseContext data={PageTranscripts.challenge}/>
      <BaseContext data={PageTranscripts.responsibilites}/>
      <BaseContext data={PageTranscripts.process}/>
      <BaseContext data={PageTranscripts.result}/>
      <BaseContext data={PageTranscripts.conclusion}/>
      {/* <div className="separator"></div>
      <Testimonials /> */}
    </main>
  );
};

export default Main;
