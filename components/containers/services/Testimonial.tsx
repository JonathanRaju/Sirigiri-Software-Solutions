"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/testimonial/ClientOne.png";
import two from "@/public/images/testimonial/ClientTwo.png";
import three from "@/public/images/testimonial/ClientThree.png";
import four from "@/public/images/testimonial/ClientFour.png";
import five from "@/public/images/testimonial/ClientFive.png";

const Testimonial = () => {
  const imageUrls = [
    { url: "images/testimonial/ClientOne.png" },
    { url: "images/testimonial/ClientTwo.png" },
    { url: "images/testimonial/ClientThree.png" },
    { url: "images/testimonial/ClientFour.png" },
    { url: "images/testimonial/ClientFive.png" },
  ];

  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  const pathname = usePathname();
  const isService = pathname === "/services";

  return (
    <section
      className={"pt-120 tp-testimonial" + (isService ? " pb-120" : " ")}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className={
                "tp-testimonial-inner " +
                (isService ? " tp-testimonial-alt" : " pb-120")
              }
            >
              <h2 className="fw-7 text-secondary mt-8 title-anim">
                What our clients say about us
              </h2>
              <div className="tp-testimonial-slider-wrap mt-60">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  slidesPerGroup={1}
                  speed={1200}
                  loop={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="tp-testimonial-slider"
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".tp-testimonial-pagination",
                    renderBullet: function (index, className) {
                      return `<span class="${className}"><img src="${
                        imageUrls[index].url
                      }" alt="Dot ${index + 1}" /></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".next-testimonial",
                    prevEl: ".prev-testimonial",
                  }}
                  onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.realIndex + 1)
                  }
                >
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={one} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Amilino</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CTO & Co-Founder, Granular AI
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        <q>
                          I always have the best experience with Sirigiri
                          Software Solutions. Their innovative approach to IT
                          challenges is Oustanding, which stand them as Unique
                          from other Companies.
                        </q>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={two} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Amilino</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CTO & Co-Founder, Granular AI
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        <q>
                          Sirigiri Software Solutions always comes through
                          quickly resolving our IT issues - including an ongoing
                          problem that several other consultants had been unable
                          to fix at our largest operating company. They are
                          Standalone with their{" "}
                          <b>Exceptional Service Quality</b> and{" "}
                          <b>Customer Support and Responsiveness</b>
                        </q>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={three} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Amilino</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CTO & Co-Founder, Granular AI
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        <q>
                          Always Prompt, Good Communication, They consistently
                          inform and involve us throughout every phase of the{" "}
                          <b>Project.</b> Their team&apos;s ability to manage time effeciently was impressive.
                        </q>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={four} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Amilino</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CTO & Co-Founder, Granular AI
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        <q>
                          They have been innovative, responsive, trusty and
                          worked seamlessly with <b>us.</b> They&apos;ve stood by us
                          through thick and thin, proving that their support
                          goes beyond just Business.
                        </q>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={five} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Amilino</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CTO & Co-Founder, Granular AI
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        <q>
                          Awesome!, They are exceptional in Time management and
                          Productivity, They are delivered high-quality IT
                          solutions within <b>tight deadlines.</b> Despite the tight schedules, the quality of work was never compramised.
                        </q>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="tp-testimonial-arrow">
                <button
                  className="prev-testimonial"
                  aria-label="previous testimonial"
                >
                  <span className="material-symbols-outlined">west</span>
                </button>
                <span className="current-slide">{currentSlide}</span>
                <span className="divider"></span>
                <span className="total-slide">{totalSlides}</span>
                <button
                  className="next-testimonial"
                  aria-label="next testimonial"
                >
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
              <div className="tp-testimonial-pagination mt-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
