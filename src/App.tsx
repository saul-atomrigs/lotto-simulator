import { useState } from 'react';
import { APPLICATION_NAME } from './constants';
import PurchaseAmountInput from './features/purchase/UI/PurchaseAmountInput';
import Header from './components/Header';
import { DrawList } from './features/draw/UI/Draw';

function App() {
  const [drawAmount, setDrawAmount] = useState(0);

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

      <PurchaseAmountInput
        onAmountConfirm={(amount) => setDrawAmount(+amount / 1000)}
      />

      {drawAmount > 0 && <DrawList amount={drawAmount} />}
    </div>
  );
}

export default App;
