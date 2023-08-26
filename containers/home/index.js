"use client";
import Slider from "../../components/slider";
import Content2 from "../../components/content";
import Content from "../../components/content_deneme";
import image4 from "../../public/images/background4.jpg";
import image2 from "../../public/images/background1.jpg";
import image3 from "../../public/images/background3.jpg";

const Home = () => {
  let content1 = "Turkcell Seni Tedarikçi Eksenli İnovasyona Davet Ediyor!";
  let content2 = "aaa Seni Tedarikçi Eksenli İnovasyona Davet Ediyor!";
  let content3 = "bbb Seni Tedarikçi Eksenli İnovasyona Davet Ediyor!";
  let text1 =
    "Turkcell'in mevcut süreçlerinde tasarruf ve kalite/süreç gelişimi sağlayan ya da sektöre yönelik yepyeni bir gelir kapısı oluşturacak fikirlerin varsa, fikrini paylaş. Fikrini Tedarikçi Eksenli İnovasyon ekibi dinlesin ve projelendirsin. Aşağıdaki buton üzerinden açılacak formu doldurarak başvuru yapabilirsiniz.";
  return (
    <>
      <Slider />
      <Content
        image={image4}
        heading={content1}
        text={text1}
        side="left"
        btn="Bilgi Al"
      />
      <Content
        image={image2}
        heading={content1}
        text={text1}
        side="right"
        btn="Bilgi Al"
      />
      <Content
        image={image3}
        heading={content1}
        text={text1}
        side="left"
        btn="Bilgi Al"
      />
    </>
  );
};

export default Home;
