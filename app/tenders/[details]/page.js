"use client";
import React from "react";
import styled from "styled-components";
import { data } from "@/data/tendersData";

const Details = ({ params }) => {
  const id = params.details;
  const item = data.find((item) => item.id == id);
  return (
    <Container>
      {data && (
        <>
          <Header>
            <Name>{item.header}</Name>
            <Button>Kayıt Ol</Button>
          </Header>
          <Box>
            <table>
              <tr>
                <Column>İhale Konusu</Column>
                <Column2>Tren tekeri alımı</Column2>
              </tr>
              <tr>
                <Column>İhale Kayıt No</Column>
                <Column2>{item.no}</Column2>
              </tr>
              <tr>
                <Column>İhale Başlangıç Tarihi</Column>
                <Column2>{item.startDate}</Column2>
              </tr>
              <tr>
                <Column>İhale Bitiş Tarihi</Column>
                <Column2>{item.endDate}</Column2>
              </tr>

              <tr>
                <Column>İhaleni Yapılacağı Yer</Column>
                <Column2>
                  İBB Bakırköy Ek Hizmet Binası, İhale İşleri Şube Müdürlüğü,
                  İhale Salonu, Bakırköy/İstanbul
                </Column2>
              </tr>

              <tr>
                <Column>İhale Açıklaması</Column>
                <Column2>{item.content}</Column2>
              </tr>
              <tr>
                <Column>İhale Ön Koşulları</Column>
                <Column2>elma</Column2>
              </tr>

              <tr>
                <Column>Niteliği ve Miktarı</Column>
                <Column2>1180 adet tren tekeri alımı</Column2>
              </tr>
              <tr>
                <Column>Hizmetin Yapılacağı Yer</Column>
                <Column2>
                  İstanbul ili sınırları içerisinde idarenin belirleyeceği yere
                  teslim edilecektir
                </Column2>
              </tr>
              <tr>
                <Column>İşin Süresi / Teslim Tarihi</Column>
                <Column2>
                  Sözleşmenin İmzalandığı günü takip eden gün işe başlama
                  tarihidir. Teslim süresi, işe başlama tarihinden başlayarak
                  malın İstanbul ili sınırları içinde idarenin gösterdiği yere
                  şartnamelere uygun olarak çalışır / kullanıma hazır vaziyette
                  Taşınır Geçici Alındı Belgesi karşılığında idareye teslimine
                  kadar geçen süredir. Bu ihale konusu mal için teslimat süresi
                  300(üç yüz) takvim günüdür.
                </Column2>
              </tr>

              <tr>
                <Column>İhale İçeriği</Column>
                <Column2>
                  <BtnBox>
                    <Button href="/login" target="_blank">
                      Dokümanı Gör
                    </Button>
                  </BtnBox>
                </Column2>
              </tr>
            </table>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Details;

const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.h1`
  font-size: 24px;
  color: #525e75ff;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Header = styled.div`
  background-color: white;
  max-width: 1100px;
  border-radius: 15px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Box = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
    color: gray;
    font-size: 0.8rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    @media (max-width: 600px) {
      th,
      td {
        display: block;
        text-align: start;
        width: 100%;
        box-sizing: border-box;
      }
    }
  }

  td {
    padding: 15px 0;
    font-size: 14px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Column = styled.td`
  width: 18%;
  color: #525e75ff;
  font-weight: bold;
  vertical-align: top;
  font-family: "Nunito";
`;

const Column2 = styled.td`
  color: gray;
`;

const Button = styled.a`
  padding: 0 30px;
  height: 40px;
  min-width: 80px;
  border-radius: 10px;
  border: none;
  transition: 0.1s;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #36a693ff;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    width: 90%;
  }
`;
