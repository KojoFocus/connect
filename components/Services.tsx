import React from 'react';
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <section className="services section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto mb-5">
            <small className="small-title">
              Services <strong className="text-warning">03/05</strong>
            </small>
            <h2>How can we help you?</h2>
          </div>

          <div className="col-lg-6 col-12">
            <nav>
              <div
                className="nav nav-tabs flex-column align-items-baseline"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-business-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-business"
                  type="button"
                  role="tab"
                  aria-controls="nav-business"
                  aria-selected="true"
                >
                  <h3>Business Consulting</h3>
                  <span>
                    We assist entrepreneurs in structuring and optimizing their businesses to achieve sustainable growth.
                  </span>
                </button>

                <button
                  className="nav-link"
                  id="nav-strategy-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-strategy"
                  type="button"
                  role="tab"
                  aria-controls="nav-strategy"
                  aria-selected="false"
                >
                  <h3>Strategy Planning</h3>
                  <span>
                    We craft actionable strategies tailored to your business goals to ensure long-term success.
                  </span>
                </button>

                <button
                  className="nav-link"
                  id="nav-video-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-video"
                  type="button"
                  role="tab"
                  aria-controls="nav-video"
                  aria-selected="false"
                >
                  <h3>Video Content</h3>
                  <span>
                    We create compelling video content to help you communicate your vision effectively and engage your audience.
                  </span>
                </button>
              </div>
            </nav>
          </div>

          <div className="col-lg-6 col-12">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-business"
                role="tabpanel"
                aria-labelledby="nav-business-tab"
              >
                <Image
                  src="/images/services/young-entrepreneurs-mature-investor-watching-presentation-discussing-project.jpg"
                  width={800}
                  height={600}
                  className="img-fluid"
                  alt="Young entrepreneurs discussing a project"
                />
                <h5 className="mt-4 mb-2">Introduction to Business Consulting</h5>
                <p>
                  At ConnectPro, we provide hands-on consulting to help small businesses refine their operations, expand networks, and reach new markets.
                </p>
                <ul>
                  <li>Helping small businesses scale sustainably</li>
                  <li>Providing insights into market trends</li>
                  <li>Offering guidance on business strategy and management</li>
                </ul>
              </div>

              <div
                className="tab-pane fade show"
                id="nav-strategy"
                role="tabpanel"
                aria-labelledby="nav-strategy-tab"
              >
                <Image
                  src="/images/services/startup-leader-drawing-flowchart-board-discussing-project.jpg"
                  width={800}
                  height={600}
                  className="img-fluid"
                  alt="Startup leader drawing flowchart on a board"
                />
                <h5 className="mt-4 mb-2">Strategy Planning</h5>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <p>
                      We analyze your business model and develop strategies that align with your mission while focusing on profitability.
                    </p>
                  </div>
                  <div className="col-lg-6 col-12">
                    <p>
                      Our approach ensures your company is prepared to adapt to industry changes and seize opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade show"
                id="nav-video"
                role="tabpanel"
                aria-labelledby="nav-video-tab"
              >
                <Image
                  src="/images/services/portrait-smiling-african-american-young-woman-holding-movie-production-blackboard.jpg"
                  width={800}
                  height={600}
                  className="img-fluid"
                  alt="African American woman holding movie production board"
                />
                <h5 className="mt-4 mb-2">Video Content</h5>
                <p>
                  Whether for marketing, storytelling, or educational purposes, we help businesses create impactful video content to connect with their audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
