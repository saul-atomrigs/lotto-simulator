import { memo } from 'react';
import { Button, Message, Header, Input } from '../../components';
import { CONSTANTS } from './PurchaseAmount.constants';
import { usePurchaseAmount } from './PurchaseAmount.hooks';

interface PurchaseAmountInputProps {
  onAmountConfirm: (amount: string) => void;
}

function PurchaseAmountInput({ onAmountConfirm }: PurchaseAmountInputProps) {
  const { amount, error, handleChange, handleClick } =
    usePurchaseAmount(onAmountConfirm);

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
      {error && <Message message={error} type='error' />}
    </div>
  );
}

export default memo(PurchaseAmountInput);
