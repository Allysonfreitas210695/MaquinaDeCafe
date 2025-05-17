import styled from "styled-components";

export const CardContainer = styled.div`
  width: 280px;
  background: #f8f8f8;
  margin-top: 20px;
  margin-left: 85px;
  text-align: center;
  font-family: Poppins;
  margin-bottom: 50px;

  .title__description {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 20px;
    margin-top: -80px;
  }

  .faRegStar {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #512615;
    margin-right: 25px;

    span {
      color: #898ebc;
      font-size: 13px;
      font-family: Open Sans;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0%;
      padding-right: 15px;
    }
  }
`;

export const Image = styled.img`
  margin-top: -1.5rem;
  margin-left: -13rem;
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

export const Tag = styled.span`
  background: #dac8b3;
  width: 100px;
  color: #512615;
  font-size: 0.7rem;
  font-family: Poppins;
  font-weight: 500px;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 0.25rem 0.5rem;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-family: Poppins;
  font-weight: 600;
  color: #512615;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0.5rem 0;
  display: flex;
  padding-right: 55px;
`;

export const Description = styled.p`
  font-size: 0.79rem;
  color: #898ebc;
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  text-align: justify;
  line-height: 100%;
`;

export const StyledWrapper = styled.div`
  .styledWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    gap: 10px;
     
  }
`;

export const Wrapper = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#6F4829" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#6F482959")};
  font-family: Sen;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.33px;
  padding: 0.6rem 1rem;
  border: 1px solid #6f482929;
  border-radius: 10px; /* arredondado só à esquerda */
  transition: all 0.3s ease;
  cursor: pointer;

  .spans {
    color: inherit;
    text-decoration: none;
  }
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const Price = styled.span`
  font-family: Poppins;
  font-weight: 900;
  font-size: 1rem;
  color: #000000;
  line-height: 100%;
  letter-spacing: 0%;
  padding-right: 20px;

  span {
    color: #000000;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.2rem 0.7rem;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #512615;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 8px;
  border: 1px solid #6F482930;
  transition: .5s;

  &:hover{
     background-color: #6F4829;
     color: #FFFFFF;
  }
`;

export const QuantityDisplay = styled.span`
  margin: 0 0.8rem;
  font-size: 1rem;
  color: #061737;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 19px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;

export const CartButton = styled.button`
  background-color: #6F4829;
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 20px;
  display: flex;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
