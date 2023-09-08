import { useEffect, useState } from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Job from '../components/Job';
import Contact from '../components/Contact';
import Pilares from '../components/Pilares';
import Statistics from '../components/Statistics';
import PilaresDetail from '../components/PilaresDetail';
import Bobinas from '../components/Bobinas';
import Hospital from '../components/Hospital';
import Etiqueta from '../components/Etiqueta';
import Lacre from '../components/Lacre';
import Gondola from '../components/Gondola';


function Home() {
  return (
    <div className="Home">
      <Banner />
      <Bobinas/>
      <Pilares />
      <Hospital />
      <Statistics />
      {/* <About /> */}
      {/* <Job /> */}
      {/* <Gallery />  */}
      <Etiqueta />
      <Lacre />
      <Gondola />
      <Contact />
    </div>
  );
}

export default Home;