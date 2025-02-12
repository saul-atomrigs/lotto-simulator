import { useState } from 'react';
import { APPLICATION_NAME } from '../constants';
import { useWinStore } from '../store/winStore';
import Header from '../components/Header';
import PurchaseAmountInput from '../features/purchase';
import DrawList from '../features/draw';
import WinButton from '../features/win-button';
import WinDisplay from '../features/win-display';
import WinResults from '../features/win-results';
import { useDraw } from '../features/draw/Draw.hooks';
import ResetButton from '../features/reset';

export default function Main() {
  const [drawAmount, setDrawAmount] = useState(0);
  const { draws } = useDraw(drawAmount);
  const winningNumbers = useWinStore((state) => state.winningNumbers);

  const handleReset = () => {
    setDrawAmount(0);
  };

  const isDrawn = drawAmount > 0;
  const isWinningNumbers = winningNumbers.length > 0;

  return (
    <div className='main-container'>
      <Header size='large' fontWeight='bold'>
        {APPLICATION_NAME}
      </Header>

      <PurchaseAmountInput
        onAmountConfirm={(amount) => setDrawAmount(+amount / 1000)}
      />

      {isDrawn && (
        <>
          <DrawList draws={draws} />
          <WinButton />
        </>
      )}

      {isWinningNumbers && (
        <>
          <WinDisplay />
          <WinResults draws={draws} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}
