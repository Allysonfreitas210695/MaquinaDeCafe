import styled from "styled-components";

export const CardContainer = styled.div`
  width: 330px;
  background-color: #ffffff;
  box-shadow: 0 8.76px 26.28px 0 #0000001a;
  border-radius: 14px;
  margin-top: 20px;
  margin-left: 45px;
  margin-bottom: 50px;
  text-align: center;
  font-family: Poppins;

  .title__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    margin-left: 30px;
  }

  .faRegStar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #c99963;

    span {
      font-size: 13px;
      font-family: Poppins;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0%;
      padding-right: 15px;
    }

    p {
      color: #3f18114d;
      font-size: 13px;
      font-family: Poppins;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0%;
      padding-right: 15px;
    }
  }
`;

export const Image = styled.img`
  margin-top: 30px;
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
  font-size: 20px;
  font-family: Poppins;
  font-weight: 600;
  color: #3f1811;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0.8rem 0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
`;

export const Description = styled.p`
  color: #3f18114d;
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  height: 50px;
  overflow-y: scroll;
  padding-right: 8px;
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  justify-content: center;

   &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #432c1b; 
    border-radius: 8px;
    border: 2px solid #f1f1f1; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #432c1b;
  }

  scrollbar-width: thin;
  scrollbar-color: #f3f3f3 #ffffff;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

export const Wrapper = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#512615" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#6F482959")};
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.33px;
  padding: 0.6rem 1rem;
  border: 1px solid #6f482929;
  border-radius: 38px; /* arredondado só à esquerda */
  transition: all 0.3s ease;
  cursor: pointer;

  .spans {
    color: inherit;
    text-decoration: none;
  }
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-right: 5px;
`;

export const PriceCarrinho = styled.div`
  background-color: #512615;
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 46px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const Price = styled.span`
  font-family: Poppins;
  font-weight: 900;
  font-size: 1rem;
  color: #ffffff;
  line-height: 100%;
  letter-spacing: 0%;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #ffffff;
    font-weight: 400;
    font-size: 1rem;
    padding-right: 5px;
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
  border: 1px solid #6f482930;
  transition: 0.5s;

  &:hover {
    background-color: #6f4829;
    color: #ffffff;
  }
`;

export const QuantityDisplay = styled.span`
  margin: 0 0.8rem;
  font-size: 1rem;
  color: #061737;
  font-family: Poppins;
  font-weight: 700;
  font-size: 19px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;

export const CartButton = styled.button`
  background-color: #512615;
  color: #ffffff;
  padding: 12px 25px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 46px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
`;
