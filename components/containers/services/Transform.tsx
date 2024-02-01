"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Transform_Business from "@/public/images/Transform_Business.png";
import teamThumb from "@/public/images/team-thumb.png";

const Transform = () => {
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".foot-fade", {
      x: -100,
      opacity: 0,
    });

    ScrollTrigger.batch(".foot-fade", {
      start: "-100px bottom",
      onEnter: (elements) =>
        gsap.to(elements, {
          x: 0,
          opacity: 1,
          stagger: 0.3,
        }),
    });
  }, []);

  return (
    <section className="transform pt-120 pb-120 " id="scroll-to">
      <div className="container">
        <div className="row vertical-column-gap pb-120 fade-wrapper">
          <div className="col-12 col-lg-6">
            <div className="transform__content">
              <h2 className="mt-8 title-anim text-secondary mb-24 fw-7">
                Transform your business using Artificial Intelligence services.
              </h2>
              <p className="cur-lg">
                AI can analyze vast amounts of customer data to provide valuable
                insights. AI automates data entry, processing, and reporting
                tasks, reducing human errors and increasing efficiency. Protect
                your business and customers from cyber threats and
                financial fraud.
              </p>
              <div className="anime d-none d-lg-flex mt-40">
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="transform__thumb fade-top fade-img">
              <div className="parallax-image-wrap">
                <div className="parallax-image-inner">
                  <Image
                    src={Transform_Business}
                    className="w-100 parallax-image mh-300"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="transform-inner pt-120 pb-120">
              <h4 className="mt-8 title-anim text-secondary fw-7">
                See our artificial intelligence solutions
              </h4>
              <div className="transform-slider-wrapper mt-60">
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={24}
                  slidesPerGroup={1}
                  freeMode={true}
                  speed={1200}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="transform-slider"
                >
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Boost income
                      </h5>
                      <p className="cur-lg">
                        Use predictive analytics to identify the best times and
                        channels for targeting specific customer segments with
                        tailored marketing messages.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Reduce Costs
                      </h5>
                      <p className="cur-lg">
                        AI-powered chatbots and virtual assistants to handle
                        routine customer inquiries. Avoid overstocking and
                        understocking issues. Reduce call duration and improve
                        customer satisfaction.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Find new clients and customers
                      </h5>
                      <p className="cur-lg">
                        AI-powered lead generation tools can scan the internet,
                        social media, and other sources to identify potential
                        clients who match your ideal customer profile.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Auto mate workflows
                      </h5>
                      <p className="cur-lg">
                        Implement AI-driven CRM (Customer Relationship
                        Management) systems to automate lead scoring, nurturing.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Maximize productivity
                      </h5>
                      <p className="cur-lg">
                        Use Robotic Process Automation (RPA) bots to automate
                        repetitive, rule-based tasks across software
                        applications, such as data entry, form filling, and
                        report generation.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Boost income
                      </h5>
                      <p className="cur-lg">
                        Use predictive analytics to identify the best times and
                        channels for targeting specific customer segments with
                        tailored marketing messages.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Reduce Costs
                      </h5>
                      <p className="cur-lg">
                        AI-powered chatbots and virtual assistants to handle
                        routine customer inquiries. Avoid overstocking and
                        understocking issues. Reduce call duration and improve
                        customer satisfaction.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Find new clients and customers
                      </h5>
                      <p className="cur-lg">
                        AI-powered lead generation tools can scan the internet,
                        social media, and other sources to identify potential
                        clients who match your ideal customer profile.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Auto mate workflows
                      </h5>
                      <p className="cur-lg">
                        Implement AI-driven CRM (Customer Relationship
                        Management) systems to automate lead scoring, nurturing.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Maximize productivity
                      </h5>
                      <p className="cur-lg">
                        Use Robotic Process Automation (RPA) bots to automate
                        repetitive, rule-based tasks across software
                        applications, such as data entry, form filling, and
                        report generation.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="row vertical-column-gap pt-120">
          <div className="col-12 col-lg-6">
            <div className="team__content">
              <h4 className="mt-8 title-anim text-secondary fw-7">
                Why you should choose us?
              </h4>
              <div className="team-slider-wrapper mt-60">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  slidesPerGroup={1}
                  speed={1200}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="team-slider"
                  navigation={{
                    nextEl: ".next-team",
                    prevEl: ".prev-team",
                  }}
                  onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.realIndex + 1)
                  }
                >
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">
                        Innovative and Customized Solutions
                      </h4>
                      <p className="cur-lg">
                        Our startup thrives on innovation. We don't just offer
                        off-the-shelf products; we work closely with our clients
                        to understand their unique challenges and tailor our
                        software solutions to meet these specific needs.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">Expert Team</h4>
                      <p className="cur-lg">
                        Our team comprises industry experts with years of
                        experience in software development and IT solutions.
                        This diverse expertise allows us to approach problems
                        from various angles and develop comprehensive,
                        effective solutions.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">
                        State-of-the-Art-Technology
                      </h4>
                      <p className="cur-lg">
                        We utilize cutting-edge technology in our software
                        development, ensuring that our clients benefit from the
                        latest advancements in AI, blockchain, cloud computing,
                        and more. This approach not only future-proofs our
                        solutions but also provides a competitive edge.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">
                        Focus on User Experience
                      </h4>
                      <p className="cur-lg">
                        We prioritize user experience in our software design. By
                        creating intuitive, user-friendly interfaces, we ensure
                        that our solutions are accessible and easy to use,
                        enhancing productivity and user satisfaction.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">
                        Cost-Effective and Transparent Pricing
                      </h4>
                      <p className="cur-lg">
                        We offer competitive pricing models that provide
                        excellent value. We believe in transparent pricing with
                        no hidden costs, ensuring our clients can budget
                        effectively and get the best ROI.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">
                        Collaborative Approach
                      </h4>
                      <p className="cur-lg">
                        We believe in collaboration and open communication with
                        our clients. This approach allows us to align closely
                        with your goals and ensures that the final product truly
                        aligns with your vision and expectations.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="tp-team-arrow mt-60">
                <button className="prev-team" aria-label="previous team">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <span className="current-slide-t">{currentSlide}</span>
                <span className="divider"></span>
                <span className="total-slide-t">{totalSlides}</span>
                <button className="next-team" aria-label="next team">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="team__thumb text-start text-lg-end">
              <Image src={teamThumb} className="mh-300" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;
