import { useState } from 'react';
import { Button, ErrorMessage, Header, Input } from '../../../components';
import { CONSTANTS } from '../model/constants';

export default function PurchaseAmountInput() {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    if (!value) {
      setError('');
    }
  };

  const handleClick = () => {
    if (!amount) {
      setError(CONSTANTS.ERROR_MESSAGE_EMPTY);
      return;
    }

    const numValue = +amount;
    if (numValue % CONSTANTS.LOTTO_PRICE !== 0) {
      setError(CONSTANTS.ERROR_MESSAGE);
      return;
    }

    setError('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Header size='small' fontWeight='bold'>
        {CONSTANTS.LABEL_NAME}
      </Header>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Input
          type='number'
          value={amount}
          onChange={handleChange}
          error={error}
        />
        <Button onClick={handleClick} disabled={!amount}>
          {CONSTANTS.BUTTON_LABEL}
        </Button>
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
