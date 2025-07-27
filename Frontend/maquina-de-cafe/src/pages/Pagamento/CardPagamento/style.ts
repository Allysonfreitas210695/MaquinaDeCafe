import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;

  .container {
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  }

  hr {
    height: 1px;
    background-color: rgba(16, 86, 82, 0.75);
    border: none;
  }

  .card {
    width: 100%;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
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
      font-family: Poppins;
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
      font-family: Poppins;
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

    .valor-e-acoes {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;

      .valor {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

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

      .acoes {
        display: flex;

        .botao-excluir {
          background-color: transparent;
          border: 1px solid #d9534f;
          color: #d9534f;
          padding: 6px 10px;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: #d9534f;
            color: white;
          }

          svg {
            font-size: 1.2rem;
          }
        }
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

export const TotaisResumo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  border-top: 1px solid #c9996321;
  margin-top: 10px;

  .linha {
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 16px;
    margin-bottom: 5px;

    strong {
      color: #3f1811;
      font-weight: 600;
    }
    span {
      color: #808080;
      font-weight: 400;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    color: #432c1b;
    margin-top: 10px;
  }
`;