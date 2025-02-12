import { useState } from 'react';
import { APPLICATION_NAME } from '../constants';
import Header from '../components/Header';
import PurchaseAmountInput from '../features/purchase/PurchaseAmountInput';
import DrawList from '../features/draw/Draw';

export default function Main() {
  const [drawAmount, setDrawAmount] = useState(0);

  return (
    <div className='main-container'>
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
