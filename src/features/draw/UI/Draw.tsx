import { Txt } from '../../../components';
import Box from '../../../components/Box';
import { useDraw } from '../hooks/useDraw';
import { PURCHASED_DRAWS } from '../model/constants';

const DrawList = ({ amount }: { amount: number }) => {
  const { draws } = useDraw(amount);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <DrawHeader />
      {draws.map((draw, index) => (
        <Box key={index}>{draw.join(', ')}</Box>
      ))}
    </div>
  );
};

const DrawHeader = () => {
  return (
    <Txt size='small' fontWeight='bold'>
      {PURCHASED_DRAWS}
    </Txt>
  );
};

export { DrawList };
