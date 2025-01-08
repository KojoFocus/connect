import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Waso Strategy</title>
        <meta name="description" content="Waso Strategy Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;