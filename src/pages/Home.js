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


function Home() {
  return (
    <div className="Home">
      <Banner />
      <Pilares />
      <Bobinas/>
      <Statistics />
      <Hospital />
      {/* <About /> */}
      {/* <Job /> */}
      {/* <Gallery />  */}
      <Contact />
    </div>
  );
}

export default Home;