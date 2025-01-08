import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section
      className="about section-padding"
      id="section_2"
      style={{
        paddingTop: '250px', // Adds space at the top of the section
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <div className="about-image-wrap h-100">
              <Image
                src="/images/peter-jones-WZROBIlY8Rg-unsplash.jpg"
                alt="Ernest Obimpeh, CEO"
                layout="responsive"
                width={500}
                height={500}
                className="img-fluid about-image"
              />

              <div
                className="about-image-info"
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '10px',
                  borderRadius: '5px',
                }}
              >
                <h4 className="text-white">Ernest Obimpeh, CEO</h4>
                <p className="text-white mb-0">
                  Connecting entrepreneurs to the resources they need for
                  success. Welcome to ConnectPro!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 d-flex flex-column">
            <div
              className="about-thumb bg-white shadow-lg"
              style={{
                padding: '20px',
                marginBottom: '20px',
              }}
            >
              <div className="about-info">
                <small className="small-title">
                  About <strong className="text-warning">02/05</strong>
                </small>
                <h2 className="mb-3">Empowering Entrepreneurs</h2>
                <h5 className="mb-3">Driving business growth since 2021</h5>
                <p>
                  At ConnectPro, we specialize in connecting budding
                  entrepreneurs with vital resources, networks, and
                  opportunities to help them thrive in a competitive world.
                </p>
                <p>
                  We’re passionate about building an ecosystem where small
                  businesses and startups can flourish. Discover more about how
                  we can support you by exploring our{' '}
                  <a href="https://connectpro.com/contact">contact page</a>.
                  Let’s grow together!
                </p>
              </div>
            </div>

            <div className="row h-100">
              <div className="col-lg-6 col-6">
                <div
                  className="about-thumb d-flex flex-column justify-content-center bg-danger mb-lg-0 h-100"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <div className="about-info">
                    <h5 className="text-white mb-4 ">
                      Join our growing community
                    </h5>
                    <Link href="#section_3">
                      <button className="btn btn-warning shadow-md text-white rounded-pill py-2 px-4 transition-all duration-300 hover:bg-warning hover:scale-105 focus:outline-none">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-6">
                <div
                  className="about-thumb d-flex flex-column justify-content-center bg-warning mb-lg-0 h-100"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <div className="about-info">
                    <h5 className="text-white mb-4">
                      How did you hear about us?
                    </h5>
                    <p className="text-white mb-0">
                      We’d love to know more about your journey to ConnectPro!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
