import styled from "styled-components";

export const Container__Carrinho = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  .tablela {
    margin: 50px 10rem;

    .tablecell {
      font-family: Poppins;
      font-weight: 500;
      font-size: 16px;
      line-height: 25.6px;
      letter-spacing: -0.9px;
      color: #3f1811;
    }

    .tablecellItens {
      font-family: Poppins;
      font-weight: 500;
      font-size: 16px;
      line-height: 25.6px;
      letter-spacing: -0.9px;
      color: #272727;
    }
  }

  .table__conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
`;

export const Carrinho = styled.div`
  padding: 20px 0 0 8px;
  border-bottom: 1px solid #808080;
  margin: 30px 80px;

  .carrinho {
    width: 35px;
    height: 35px;
    color: #8d654e;
  }
`;

export const TableCellImg = styled.img`
  width: 100px;
`;

export const TableConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

export const TableTitulo = styled.h1`
  font-family: Poppins;
  font-weight: 500;
  font-size: 26px;
  line-height: 25.6px;
  letter-spacing: -0.9px;
  color: #512615;
`;

export const TableButton = styled.button`
  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 25.6px;
  letter-spacing: -0.9px;
  color: #512615;
  text-decoration: underline;
  cursor: pointer;
  offset: 0%;
  text-decoration-thickness: 0%;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #512615;
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
  color: #061737;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;

export const carrinhos__Button = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
 margin: 30px 80px;
`;

export const Button__Personalizacao = styled.button`
 font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 25.6px;
  letter-spacing: -0.9px;
  text-align: center;
  text-decoration: underline;
  color: #3F1811;
  cursor: pointer;
`;

export const Button__Pagamento = styled.button`
font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 25.6px;
  letter-spacing: -0.9px;
  text-align: center;
  text-decoration: underline;
  color: #3F1811;
  cursor: pointer;
`;
