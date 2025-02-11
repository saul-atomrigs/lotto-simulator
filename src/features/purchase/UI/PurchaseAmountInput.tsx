import { Button, ErrorMessage, Header, Input } from '../../../components';
import usePurchaseAmount from '../hooks/usePurchaseAmount';
import { CONSTANTS } from '../model/constants';

export default function PurchaseAmountInput() {
  const { amount, error, handleChange, handleClick } = usePurchaseAmount();

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
