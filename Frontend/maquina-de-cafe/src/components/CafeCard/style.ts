import styled from "styled-components";

export const CardContainer = styled.div`
  width: 230px;
  background: #f8f8f8;
  padding: 1rem;
  margin-top: 50px;
  margin-left: 50px;
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 50px;
`;

export const Image = styled.img`
  margin-top: -5rem;
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
  padding-top: 10px;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: #8d8686;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  text-align: justify;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #dac8b3;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 0.001rem;
    width: 165px;
    font-size: 14px;
  }

  .radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
    padding: 2px 3px;
  }

  .radio-inputs .radio input {
    display: none;
  }

  .radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    padding: 0.5rem 0;
    color: #000000;
    transition: all 0.15s ease-in-out;
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  .radio-inputs .radio input:checked + .name {
    background-color: #64270f;
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #dac8b3;
  }
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
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
  background-color: #dac8b3;
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
`;

export const QuantityDisplay = styled.span`
  margin: 0 0.5rem;
  font-size: 1rem;
  color: #512615;
`;

export const CartButton = styled.button`
  background-color: #dac8b3;

  color: #512615;
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
