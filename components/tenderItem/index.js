import styled from "styled-components";
import DetailsTable from "../table";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const TenderItem = ({ data, id, toggleOpen, toggleClose }) => {
  return (
    <Wrapper>
      <Container open={data.open} onClick={toggleOpen}>
        <MainContent open={data.open}>
          <Name>
            <Heading type={data.type}>
              <h1>{data.header}</h1>
              <h3 title="İhale Türü">{data.type}</h3>
            </Heading>
            <p>{data.header}</p>
          </Name>
          <Info>
            <h3>{data.country}</h3>
            <p>{data.startDate}</p>
          </Info>
        </MainContent>
        <DetailsTable data={data} id={id} isOpen={data.open} />
      </Container>
      {data.open && (
        <CloseButton title="Kapat" onClick={toggleClose}>
          <MdOutlineKeyboardArrowUp />
        </CloseButton>
      )}
    </Wrapper>
  );
};

export default TenderItem;

const Container = styled.div`
  box-sizing: border-box;
  background-color: white;
  overflow: auto;
  border-radius: 10px;
  cursor: ${(props) => (props.open ? "auto" : "pointer")};
`;

const Info = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 14px;
    color: #4d96ffff;
    background-color: #f0f5ffff;
    padding: 3px 5px;
    border-radius: 5px;
  }

  p {
    font-size: 0.8rem;
    color: #a9afbaff;
    font-family: sans-serif;
    margin: 0;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    gap: 10px;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  p {
    font-size: 0.8rem;
    color: #a9afbaff;
    font-family: sans-serif;
    margin: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    color: #525e75ff;
    font-size: 14px;
  }

  h3 {
    margin: 0;
    font-size: 14px;
    /*  color: #ff9999ff;
    background-color: #ffe5e5ff; */
    color: #4fb0a6;
    background-color: #edf7f6;
    padding: 3px 5px;
    border-radius: 5px;
  }
`;

const MainContent = styled.div`
  margin: 20px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: ${(props) => (props.open ? "1px solid lightgray" : "none")};
  padding-bottom: ${(props) => (props.open ? "10px" : "0")};

  @media (max-width: 600px) {
    margin-bottom: 0;
    box-shadow: ${(props) =>
      props.open ? "0 4px 6px rgba(0, 0, 0, 0.08)" : "none"};
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 600px) {
    margin: 0 10px;
  }
`;

const CloseButton = styled.button`
  height: 20px;
  width: 80px;
  border: none;
  background-color: #f4f6f9;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: -3px;
  z-index: 5;
  border-radius: 10px 10px 0 0;
  font-size: 1.6rem;
  color: #525e75ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    bottom: 0;
  }
`;
