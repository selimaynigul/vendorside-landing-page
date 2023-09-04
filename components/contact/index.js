import styled from "styled-components";
import Image from "next/image";

import image from "../../public/images/mail_icon.png";
import image2 from "../../public/images/notification_icon.svg";

export default function Content(props) {
  return (
    <Wrapper>
      <Container>
        <Text style={{ "max-width": "500px" }}>
          <NotificationIcon src={image2} alt="Picture of the author" />
          <h1> Duyurular ve İhaleler E-Postana Gelsin!</h1>
          <p>
            Duyurular ve ihaleler yayınlandığında size hemen haber vermemizi
            istiyorsanız, lütfen e-posta adresinizi girerek kayıt ol butonuna
            tıklayınız.
          </p>
        </Text>
        <ImageContainer>
          <StyledImage src={image} alt="Picture of the author" />
        </ImageContainer>
        <Input>
          <InputBox type="text" placeholder="E-posta adresiniz"></InputBox>
          <Button>Kayıt Ol</Button>
        </Input>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 40px 100px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  width: 90%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background: rgb(27, 60, 219);
  background: linear-gradient(292deg, #4d96ffff 0%, rgba(27, 60, 219, 1) 100%);
  /*   background-color: #4d96ffff;
 */
  @media (max-width: 768px) {
    padding: 40px 20px;
    width: 95%;
  }
`;

const NotificationIcon = styled(Image)`
  position: absolute;
  right: 6%;
  top: -10px;
  width: 40px;
  height: auto;
  transform: rotate(10deg);
  pointer-events: none;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  h1 {
    color: #ffe000;
    z-index: 2;
    margin: 0;
    font-weight: bold;
  }
  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const StyledImage = styled(Image)`
  width: 400px;
  height: auto;
  opacity: 0.1;
  transform: rotate(-20deg);
  pointer-events: none;
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: -50px;
`;

const Container = styled.div`
  text-align: start;
  color: white;
  display: flex;
  align-items: center;
  gap: 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Input = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  max-width: 400px;
`;

const InputBox = styled.input`
  padding: 0 16px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  &::placeholder {
    color: rgba(85, 151, 255, 1);
    font-size: 1rem;
    font-weight: bold;
    outline: none;
  }

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  height: 40px;
  padding: 0 20px;
  font-weight: bold;
  border: none;
  border-radius: 7px;
  background-color: #ffe000;
  color: #1b1841;
  cursor: pointer;
`;
