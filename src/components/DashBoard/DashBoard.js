import { DashBoardHeader } from "../DashBoardHeader/DashBoardHeader";
import Coin1Img from "../../assets/images/Coin1.svg";
import Coin2Img from "../../assets/images/Coin2.svg";
import Coin3Img from "../../assets/images/Coin3.svg";
import Coin4Img from "../../assets/images/Coin4.svg";
import {
  FaArrowRightArrowLeft,
  FaArrowTrendDown,
  FaArrowTrendUp,
} from "react-icons/fa6";
import "./DashBoard.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export const DashBoard = () => {
  return (
    <>
      <DashBoardHeader />

      <main className="site-main">
        <section className="cards__wrapper">
          <ul className="cards__list">
            <Swiper
              slidesPerView={4}
              spaceBetween={60}
              freeMode={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper">
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin1Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">BTC</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">9784.79</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendUp className="cards__icon" />
                    <small className="cards__percent">7.2%</small>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin2Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">LTC</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">8741.19</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendDown className="cards__icon-" />
                    <small className="cards__percent-">5.2%</small>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin3Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">ETM</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">4567.16</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendUp className="cards__icon" />
                    <small className="cards__percent">6.5%</small>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin4Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">BNB</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">6547.79</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendUp className="cards__icon" />
                    <small className="cards__percent">9.5%</small>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin1Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">BTC</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">9784.79</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendUp className="cards__icon" />
                    <small className="cards__percent">7.2%</small>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin2Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">LTC</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">8741.19</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendDown className="cards__icon-" />
                    <small className="cards__percent-">5.2%</small>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin3Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">ETM</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">4567.16</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendUp className="cards__icon" />
                    <small className="cards__percent">6.5%</small>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="cards__item">
                  <img className="cards__img" src={Coin4Img} alt="Image" />
                  <div className="cards__box-center">
                    <div className="cards__box-center2">
                      <p className="cards__text">BNB</p>
                      <FaArrowRightArrowLeft className="cards__icon" />
                      <p className="cards__text">USD</p>
                    </div>
                    <strong className="cards__price">6547.79</strong>
                  </div>
                  <div className="cards__box-end">
                    <FaArrowTrendUp className="cards__icon" />
                    <small className="cards__percent">9.5%</small>
                  </div>
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </section>
      </main>
    </>
  );
};
