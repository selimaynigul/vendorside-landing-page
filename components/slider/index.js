import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";
import SlideContent from "./slideContent";

import image1 from "../../public/images/background1.jpg";
import image2 from "../../public/images/background2.jpg";
import image3 from "../../public/images/background3.jpg";

export default function Slider() {
  const text =
    "Turkcell'in mevcut süreçlerinde tasarruf ve kalite/süreç gelişimi sağlayan ya da sektöre yönelik yepyeni bir gelir kapısı oluşturacak fikirlerin varsa, fikrini paylaş. Fikrini Tedarikçi Eksenli İnovasyon ekibi dinlesin ve projelendirsin. Aşağıdaki buton üzerinden açılacak formu doldurarak başvuru yapabilirsiniz.";
  const heading = "Turkcell Seni Tedarikçi Eksenli İnovasyona Davet Ediyor!";
  return (
    <Container>
      <Slide>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideContent
              back={image3}
              text={text}
              heading={heading}
              btn="Başvur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent
              back={image1}
              text={text}
              heading={heading}
              btn="Başvur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent
              back={image2}
              text={text}
              heading={heading}
              btn="Başvur"
            />
          </SwiperSlide>
        </Swiper>
      </Slide>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 20px;
  width: 95%;
  margin: 10px auto;
`;

const Slide = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: transparent;
    opacity: 0.3;
    font-weight: bold;
    transition: 0.3s;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    opacity: 0.5;
  }

  .swiper-button-next {
    margin-right: 40px;
  }

  .swiper-button-prev {
    margin-left: 40px;
  }

  .swiper {
    width: 100%;
    height: 430px;
  }

  .swiper:hover {
    .swiper-button-prev,
    .swiper-button-next {
      color: white;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    .swiper {
      height: 300px;
    }
  }

  @media (max-width: 576px) {
    .swiper {
      height: 250px;
    }
  }
`;
