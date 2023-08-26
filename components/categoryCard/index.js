import styled from "styled-components";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <StyledLink href="/">
      <Container>
        <h2>KSS Projeleri ve Sponsorluklar</h2>
        <p>
          Turkcell'in toplumsal sorumluluk anlayışının temelinde hissedarları,
          çalışanları, müşterileri, bayileri, sivil toplum kuruluşları,
          üniversiteler ve medyanın oluşturduğu sosyal paydaşlarına duyduğu
          sorumluluk yatmaktadır.
        </p>
      </Container>
    </StyledLink>
  );
};

export default CategoryCard;

const Container = styled.div`
  background: rgb(27, 60, 219);
  background: linear-gradient(
    292deg,
    rgba(27, 60, 219, 1) 0%,
    rgba(85, 151, 255, 1) 100%
  );
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  border-radius: 15px;

  h2,
  p {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
