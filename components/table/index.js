import styled from "styled-components";
import Link from "next/link";

const Table = (props) => {
  return (
    <Container isOpen={props.isOpen}>
      <table>
        <tr>
          <Column>İhale Kayıt No: </Column>
          <Column2>
            <p>{props.data.no}</p>
          </Column2>
        </tr>
        <tr>
          <Column>İhale Başlangıç Tarihi:</Column>
          <Column2>
            <p>{props.data.startDate}</p>
          </Column2>
        </tr>
        <tr>
          <Column>İhale Bitiş Tarihi:</Column>
          <Column2>
            <p>{props.data.endDate}</p>
          </Column2>
        </tr>
        <tr>
          <Column>İhale Açıklaması:</Column>
          <Column2>
            <p>{props.data.content}</p>
          </Column2>
        </tr>
        <tr>
          <Column>İhale Ön Koşulları:</Column>
          <Column2>
            <p>{props.data.conditions}</p>
          </Column2>
        </tr>
        <tr>
          <Column>İhale İçeriği:</Column>
          <Column2>
            <BtnBox>
              <Button href="/login" target="_blank">
                Dokümanı Gör
              </Button>
              <Button2 href={`/tenders/${props.id}`}>Detayları Gör</Button2>
            </BtnBox>
          </Column2>
        </tr>
      </table>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  margin: 0 20px;
  overflow: auto;
  max-height: ${(props) => (props.isOpen ? "400px" : "0")};
  margin-bottom: ${(props) => (props.isOpen ? "20px" : "0")};

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
    color: gray;
    font-size: 0.8rem;

    @media (max-width: 600px) {
      font-size: 0.7rem;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;

    td {
      padding: 8px;
      font-size: 14px;
    }

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

  &::-webkit-scrollbar {
    width: 10px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgrey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #bdbdbd;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    margin: 30px 0;
    background-color: #f0f0f0;
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
  text-align: right;
  vertical-align: top;
  font-family: "Nunito";

  @media (max-width: 600px) {
    background-color: #ebebeb;
  }
`;

const Column2 = styled.td`
  color: #a9afbaff;
`;

const Button = styled(Link)`
  width: 140px;
  height: 40px;
  background-color: #36a693ff;
  border-radius: 10px;
  border: none;
  transition: 0.1s;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: #36479d;
    cursor: pointer;
    background-color: #71c1b3ff;
  }
`;

const Button2 = styled(Button)`
  background-color: #f4f6f9ff;
  color: #525e75ff;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
    background-color: #f4f6f9ff;
  }
`;
