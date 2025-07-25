import styled from "styled-components";

export const StyledWrapper = styled.div`

  .container {
    padding-left: 8px;
  }

  hr {
    height: 1px;
    background-color: rgba(16, 86, 82, 0.75);
    border: none;
  }

  .card {
    width: 400px;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .title {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 40px 20px 5px 20px;
    gap: 8px;

    span {
      font-family: Poppins;
      font-weight: 700;
      font-size: 34px;
      color: #432c1b;
      line-height: 100%;
      letter-spacing: 0%;
    }
  }

  /* Cart */
  .cart {
    border-radius: 10px;
    margin-top: 20px;
  }

  .cart .steps {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .cart .steps .step {
    display: grid;
    gap: 10px;
  }

  .cart .steps .step .tipos {
    display: flex;
    flex-direction: column;
    max-height: 150px; 
    overflow-y: scroll;
    padding-right: 10px;

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
  scrollbar-color: #432c1b #f1f1f1;


    span {
      font-family: Poppins;
      font-weight: 500;
      font-size: 16px;
      color: #202020;
      line-height: 100%;
      letter-spacing: 0%;
    }

    p {
      padding-top: 5px;
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      color: #808080;
      line-height: 100%;
      letter-spacing: 0%;
    }

    strong {
      color: #3f1811;
    }
  }

  .cart .steps .step .tipos .condeudo__tipos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c9996321;
    padding: 10px 0;
    margin-top: 30px;

    span {
      font-family: Poppins;
      font-weight: 500;
      font-size: 16px;
      color: #202020;
      line-height: 100%;
      letter-spacing: 0%;
    }

    p {
      padding-top: 5px;
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      color: #808080;
      line-height: 100%;
      letter-spacing: 0%;
    }

    .tipos__de_cafes {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      img {
        width: 70px;
      }

      p {
        font-family: Poppins;
        font-weight: 400;
        font-size: 13px;
        color: #aaaaaa;
        line-height: 100%;
        letter-spacing: 0%;
      }

      h3 {
        font-family: Poppins;
        font-weight: 700;
        font-size: 13px;
        color: #432c1b;
        line-height: 100%;
        letter-spacing: 0%;
      }

      span {
        font-family: Poppins;
        font-weight: 500;
        font-size: 10px;
        color: #c99963;
        line-height: 100%;
        letter-spacing: 0%;
      }
    }

    .valor {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-family: Poppins;
        font-weight: 700;
        font-size: 16px;
        color: #432c1b;
        line-height: 100%;
        letter-spacing: 0%;
      }

      p {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        color: #aaaaaa;
        line-height: 100%;
        letter-spacing: 0%;
      }
    }
  }

  .cart .steps .step .tipos .condeudo__tipos .tipos__button {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-right: 20px;

    button,
    span {
      font-size: 16px;
      color: #404040;
      cursor: pointer;
    }
  }

  .cart .steps .step span {
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    color: #3f1811;
    line-height: 100%;
    letter-spacing: 0%;
  }

  .cart .steps .step p {
    font-size: 11px;
    font-weight: 600;
    color: #000000;
  }

  /* Promo */
  .promo form {
    display: grid;
    grid-template-columns: 1fr 80px;
    gap: 10px;
    padding: 0px;
  }

  .input_field {
    width: auto;
    height: 36px;
    padding: 0 0 0 12px;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(16, 86, 82);
    background-color: rgb(251, 243, 228);
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px rgb(251, 243, 228);
    background-color: rgb(201, 193, 178);
  }

  .promo form button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 100%;
    height: 36px;
    background: rgba(16, 86, 82, 0.75);
    box-shadow: 0px 0.5px 0.5px #f3d2c9, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
    border-radius: 5px;
    border: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
  }

  .payments {
    h1 {
      padding-top: 20px;
      font-family: Poppins;
      font-weight: 400;
      font-size: 16px;
      color: #808080;
      line-height: 100%;
      letter-spacing: 0%;
    }
  }
  .payments .checkout-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 14px;
    background-color: #432c1b;
    border-radius: 31.5px;
    color: #ffffff;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    margin-top: 50px;
    margin-bottom: 10px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;
    text-decoration: none;
  }

  .payments .footer {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
  }

  .payments .footer .price {
    span {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 0%;
      color: #432c1b;
    }

    p {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 0%;
      color: #432c1b;
    }
  }
  /* Checkout */
  .payments .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 20px;
    gap: 20px;

    span {
      font-family: Poppins;
      font-weight: 400;
      font-size: 16px;
      color: #aaaaaa;
      line-height: 100%;
      letter-spacing: 0%;
    }

    h3 {
      font-family: Poppins;
      font-weight: 300;
      font-size: 16px;
      color: #432c1b;
      line-height: 100%;
      letter-spacing: 0%;
      display: flex;
      align-items: end;
     justify-content: end;
    }
  }

  .payments .details span:nth-child(odd) {
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    color: #aaaaaa;
    line-height: 100%;
    letter-spacing: 0%;
    margin: auto auto auto 0;
  }

  .payments .details span:nth-child(even) {
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    color: #808080;
    line-height: 100%;
    letter-spacing: 0%;
    margin: auto 0 auto auto;
  }

  .checkout {
    border-radius: 0px 0px 10px 10px;
    background-color: #0000000d;
  }

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const ResumoValores = styled.div`
  margin-top: 1.5rem;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
  max-width: 350px;
  margin-left: auto;
  font-family: 'Poppins';
`;

export const Row = styled.div<{ isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-family: 'Poppins';
  font-size: ${(props) => (props.isTotal ? "1.15rem" : "1rem")};
  font-weight: ${(props) => (props.isTotal ? "700" : "500")};
  color: ${(props) => (props.isTotal ? "#512615" : "#333")};
  border-top: ${(props) => (props.isTotal ? "1px solid #ccc" : "none")};
  margin-top: ${(props) => (props.isTotal ? "0.5rem" : "0")};

  margin-bottom: ${(props) => (!props.isTotal ? "1.2rem" : "0")};
`;

export const TotaisResumo = styled.div`
  padding: 1rem 0;
  margin-top: 1.5rem;

  .linha,
  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #5C3D2E; /* cor marrom usada no preço */
  }

  .total {
    border-top: 1px solid #ccc;
    padding-top: 0.8rem;
    margin-top: 0.8rem;
    font-weight: 700;
  }

  strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #5C3D2E; /* aplica a cor marrom aos labels */
  }

  span {
    font-family: 'Poppins', sans-serif;
    color: #5C3D2E; /* mantém o mesmo marrom nos valores */
  }
`;

