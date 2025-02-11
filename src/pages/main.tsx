import { useState } from 'react';
import { APPLICATION_NAME } from '../constants';
import PurchaseAmountInput from '../features/purchase/UI/PurchaseAmountInput';
import Header from '../components/Header';
import { DrawList } from '../features/draw/UI/Draw';

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
