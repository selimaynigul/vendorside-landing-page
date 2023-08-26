"use client";
import React from "react";
import CategoryCard from "../../components/categoryCard";
import Categories from "../../components/categories";
import Content from "../../components/content_deneme";
import image4 from "../../public/images/background4.jpg";

const About = () => {
  let content1 = "Turkcell Seni Tedarikçi Eksenli İnovasyona Davet Ediyor!";
  let text1 =
    "Turkcell'in mevcut süreçlerinde tasarruf ve kalite/süreç gelişimi sağlayan ya da sektöre yönelik yepyeni bir gelir kapısı oluşturacak fikirlerin varsa, fikrini paylaş. Fikrini Tedarikçi Eksenli İnovasyon ekibi dinlesin ve projelendirsin. Aşağıdaki buton üzerinden açılacak formu doldurarak başvuru yapabilirsiniz.";

  return (
    <>
      <Categories>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Categories>
      <Content
        image={image4}
        heading={content1}
        text={text1}
        side="right"
        btn="Bilgi Al"
      />
    </>
  );
};

export default About;
