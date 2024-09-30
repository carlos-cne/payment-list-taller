import styled from "styled-components";
import { PaymentProps } from "../models";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoContainer = styled.div`
  margin: 0;
  padding: 0;
  gap: 12px;
  align-items: center;
  display: flex;
`;

const InfoDescription = styled.label`
  font-weight: 700;
  padding-right: 12px;
`;

export const PaymentCard: React.FC<PaymentProps> = ({
  transactionId,
  date,
  description,
  amount,
}) => {
  const formattedDate = new Intl.DateTimeFormat("en-US").format(new Date(date));
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
  return (
    <Container>
      <InfoContainer>
        <InfoDescription>Transaction ID</InfoDescription>
        <p>{transactionId}</p>
      </InfoContainer>
      <InfoContainer>
        <InfoDescription>Date</InfoDescription>
        <p>{formattedDate}</p>
      </InfoContainer>
      <InfoContainer>
        <InfoDescription>Description</InfoDescription>
        <p>{description}</p>
      </InfoContainer>
      <InfoContainer>
        <InfoDescription>Amount</InfoDescription>
        <p>{formattedAmount}</p>
      </InfoContainer>
    </Container>
  );
};
