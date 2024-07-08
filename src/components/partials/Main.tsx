import { PageTranscripts } from "../../assets/scripts/Context";
import Intro from "../context/Intro";
import BaseContext from "../context/baseContext";
import Banner from "../context/banner";

const Main = () => {
  return (
    <main className="page">
      <Intro data={PageTranscripts.intro}/>
      <Banner/>
      <BaseContext data={PageTranscripts.challenge}/>
      <Banner/>
      <BaseContext data={PageTranscripts.responsibilites}/>
      <BaseContext data={PageTranscripts.result}/>
      <BaseContext data={PageTranscripts.conclusion}/>
    </main>
  );
};

export default Main;
