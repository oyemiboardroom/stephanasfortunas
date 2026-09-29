import React from 'react';
import Hero from '../components/site/Hero.jsx';
import Positioning from '../components/site/Positioning.jsx';
import Ethos from '../components/site/Ethos.jsx';
import Pillars from '../components/site/Pillars.jsx';
import CapitalSolutions from '../components/site/CapitalSolutions.jsx';
import Process from '../components/site/Process.jsx';
import Clientele from '../components/site/Clientele.jsx';
import Distinction from '../components/site/Distinction.jsx';
import Alliance from '../components/site/Alliance.jsx';
import InsightsSection from '../components/site/InsightsSection.jsx';
import Leadership from '../components/site/Leadership.jsx';
import Consultation from '../components/site/Consultation.jsx';
import Footer from '../components/site/Footer.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <Ethos />
      <Pillars />
      <CapitalSolutions />
      <Process />
      <Clientele />
      <Distinction />
      <Alliance />
      <InsightsSection />
      <Leadership />
      <Consultation />
      <Footer />
    </main>
  );
}
