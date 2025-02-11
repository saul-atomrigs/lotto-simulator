import { useState } from 'react';
import { CONSTANTS } from '../model/constants';

export default function usePurchaseAmount() {
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

  return {
    amount,
    error,
    handleChange,
    handleClick,
  };
}
