import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding-top: 50px;

  /* Body */
  .container {
    display: grid;
    grid-template-columns: auto;
    gap: 0px;
  }

  hr {
    height: 1px;
    background-color: rgba(16, 86, 82, 0.75);
    border: none;
  }

  .card {
    width: 350px;
    background-color: #ffffff;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .title {
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px 5px 20px;

    span {
      font-family: Poppins;
      font-weight: 500;
      font-size: 24px;
      color: #202020;
      line-height: 100%;
      letter-spacing: 0%;
    }

    p {
      font-family: Poppins;
      font-weight: 500;
      font-size: 16px;
      color: #202020;
      line-height: 100%;
      letter-spacing: 0%;
    }
  }

  /* Cart */
  .cart {
    border-radius: 10px 10px 0px 0px;
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
    padding-top: 15px;
    display: flex;
    flex-direction: column;

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

  }

 .cart .steps .step .tipos .condeudo__tipos .tipos__button{
   display: flex;
   align-items: center;
   gap: 15px;
   padding-right: 20px;

   button, span{
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
  /* Checkout */
  .payments .details {
    display: grid;
    grid-template-columns: 10fr 1fr;
    padding-top: 20px;
    gap: 20px;
  }

  .payments .details span:nth-child(odd) {
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    color: #808080;
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
  }
  .checkout .footer {
    display: flex;
    flex-direction: column;
    padding: 10px 20px 10px 20px;
    background-color: #ffffff;
    border-radius: 0px 0px 10px 10px;
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

  .checkout .checkout-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 310px;
    height: 36px;
    background-color: #399f60;
    border-radius: 7px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;
  }
`;
