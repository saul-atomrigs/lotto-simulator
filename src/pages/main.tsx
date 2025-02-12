import { useState } from 'react';
import { APPLICATION_NAME } from '../constants';
import Header from '../components/Header';
import PurchaseAmountInput from '../features/purchase';
import DrawList from '../features/draw';
import WinButton from '../features/win-button';
import WinDisplay from '../features/win-display';
import { useWinStore } from '../store/winStore';

export default function Main() {
  const [drawAmount, setDrawAmount] = useState(0);
  const winningNumbers = useWinStore((state) => state.winningNumbers);

  return (
    <div className='main-container'>
      <Header size='large' fontWeight='bold'>
        {APPLICATION_NAME}
      </Header>

      <PurchaseAmountInput
        onAmountConfirm={(amount) => setDrawAmount(+amount / 1000)}
      />

      {drawAmount > 0 && <DrawList amount={drawAmount} />}

      {drawAmount > 0 && <WinButton />}

      {winningNumbers.length > 0 && <WinDisplay />}
    </div>
  );
}
