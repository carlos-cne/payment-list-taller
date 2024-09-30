import { PaymentProps } from "./models";
import { PaymentList } from "./payment/payment-list";

const paymentList: PaymentProps[] = [
  {
    transactionId: "1",
    amount: 100,
    date: "2024-09-20",
    description: "Awesome description",
  },
  {
    transactionId: "2",
    amount: 200,
    date: "2024-09-21",
    description: "Awesome description",
  },
  {
    transactionId: "3",
    amount: 150,
    date: "2024-09-21",
    description: "Awesome description",
  },
  {
    transactionId: "4",
    amount: 329,
    date: "2024-09-23",
    description: "Awesome description",
  },
];

function App() {
  return (
    <div>
      <h1>Payment transactions</h1>
      <PaymentList payments={paymentList} />
    </div>
  );
}

export default App;
