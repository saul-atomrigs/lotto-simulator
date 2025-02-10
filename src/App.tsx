import { APPLICATION_NAME } from './constants';
import PurchaseAmountInput from './features/purchase/UI/PurchaseAmountInput';
import Header from './widgets/Header';

function App() {
  return (
    <div
      style={{
        padding: '36px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '500px',
        margin: '0 auto',
      }}
    >
      <Header size='large' fontWeight='bold'>
        {APPLICATION_NAME}
      </Header>

      <PurchaseAmountInput />
    </div>
  );
}

export default App;
