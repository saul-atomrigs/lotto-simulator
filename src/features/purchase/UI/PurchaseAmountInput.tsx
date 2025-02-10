import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Header from '../../../widgets/Header';

const LABEL_NAME = '로또 구매 금액';
const BUTTON_LABEL = 'buy';

export default function PurchaseAmountInput() {
  return (
    <>
      <Header size='small' fontWeight='bold'>
        {LABEL_NAME}
      </Header>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Input type='number' />
        <Button>{BUTTON_LABEL}</Button>
      </div>
    </>
  );
}
