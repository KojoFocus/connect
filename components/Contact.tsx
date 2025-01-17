import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="section_5">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f9c10b" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <div className="contact-container-wrap">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-12">
              <form className="custom-form contact-form" action="" method="post" role="form">
                <small className="small-title">Contact <strong className="text-white">05/05</strong></small>

                <h2 className="mb-5">Say Hi to us</h2>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@company.com" required />
                  </div>

                  <div className="col-12">
                    <textarea className="form-control" rows={7} id="message" name="message" placeholder="Message"></textarea>

                    <button type="submit" className="form-control">Submit</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-thumb">

                <div className="contact-info bg-white shadow-lg">
                  <h4 className="mb-4">East Legon, Accra, Ghana</h4>

                  <h4 className="mb-2">
                    <a href="tel: 240-480-9600">
                      <i className="bi-telephone contact-icon me-2"></i>
                      240-480-9600
                    </a>
                  </h4>

                  <h5>
                    <a href="mailto:info@connectpro.com" className="footer-link">
                      <i className="bi-envelope-fill contact-icon me-2"></i>
                      info@connectpro.com
                    </a>
                  </h5>

                  <iframe 
                    className="google-map mt-4" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.2043636758127!2d-0.1718566!3d5.6268528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7cabcde3df%3A0xc2a21331d537cb8d!2sEast%20Legon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1657814406289!5m2!1sen!2sgh" 
                    width="100%" 
                    height="300" 
                    allowFullScreen 
                    loading="lazy">
                  </iframe>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
