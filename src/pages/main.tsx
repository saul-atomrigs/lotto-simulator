import { useState } from 'react';
import Header from '../components/Header';
import { APPLICATION_NAME } from '../constants';
import { useDraw } from '../features/draw/Draw.hooks';
import LottoGame from '../features/lotto-game';
import PurchaseAmountInput from '../features/purchase';

export default function Main() {
  const [drawAmount, setDrawAmount] = useState(0);
  const { draws } = useDraw(drawAmount);

  const handleReset = () => {
    setDrawAmount(0);
  };

  return (
    <div className='main-container'>
      <Header size='large' fontWeight='bold'>
        {APPLICATION_NAME}
      </Header>

      <PurchaseAmountInput
        onAmountConfirm={(amount) => setDrawAmount(+amount / 1000)}
      />

      <LottoGame drawAmount={drawAmount} draws={draws} onReset={handleReset} />
    </div>
  );
}
