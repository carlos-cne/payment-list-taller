import { PaymentProps } from "../models";
import { PaymentCard } from "./payment-card";

interface PaymentList {
  payments: PaymentProps[];
}

export const PaymentList: React.FC<PaymentList> = ({ payments }) => {
  return payments.map((payment) => (
    <PaymentCard
      key={payment.transactionId}
      amount={payment.amount}
      date={payment.date}
      description={payment.description}
      transactionId={payment.transactionId}
    />
  ));
};
