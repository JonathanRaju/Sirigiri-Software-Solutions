"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/blog/educational.png";
import two from "@/public/images/blog/banks.jpg";
import three from "@/public/images/blog/life_insurance.png";
import four from "@/public/images/blog/hospital.jpg";
import five from "@/public/images/blog/travel.png";
import six from "@/public/images/blog/Entertainment.png";
import seven from "@/public/images/blog/e_commerce.png";

const LatestPost = () => {
  return (
    <section className="tp-latest-post pt-120 pb-120 bg-quinary">
      <div className="container">
        <div className="row vertical-column-gap align-items-center">
          <div className="col-12 col-lg-7">
            <div className="tp-lp-title text-center text-lg-start">
              <h2 className="mt-8 fw-7 text-secondary title-anim">
                Related posts
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="tp-lp-cta text-center text-lg-end">
              <Link href="blog" className="btn-line text-uppercase">
                See All Posts
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-lp-slider-wrapper mt-60">
              <div className="tp-lp-slider-wrapper">
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
                  className="tp-lp-slider"
                >
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={one}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Lifelong learning, extending beyond formal
                            education, is crucial in today's rapidly changing
                            world.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={two}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Banks play a vital role in the economy, offering
                            financial services like saving accounts, loans, and
                            mortgages.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={three}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Life insurance provides financial security to an
                            individual's family in the event of their untimely
                            passing.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={four}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Hospitals are essential for healthcare, offering
                            emergency, surgical, and therapeutic services.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={one}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                          Lifelong learning, extending beyond formal
                            education, is crucial in today's rapidly changing
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={two}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                          Banks play a vital role in the economy, offering
                            financial services like saving accounts, loans, and
                            mortgages.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={three}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                          Life insurance provides financial security to an
                            individual's family in the event of their untimely
                            passing.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={four}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                          Hospitals are essential for healthcare, offering
                            emergency, surgical, and therapeutic services.
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={one}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={two}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={three}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={four}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
