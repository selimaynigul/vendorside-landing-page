import styled from "styled-components";

const Button = (props) => {
  return (
    <Btn href="/" className="_btn">
      {props.text}
    </Btn>
  );
};

export default Button;

const Btn = styled.a`
  background-color: #ffc107;
  color: black;
  font-weight: bold;
  text-decoration: none;
  padding: 15px 20px;
  border-style: none;
  border-radius: 50px;
  width: 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.9rem;
    width: 70px;
  }
`;
