import { Box, Txt } from '../../components';
import { PURCHASED_DRAWS } from './Draw.constants';
import { useDraw } from './Draw.hooks';

export default function DrawList({ amount }: { amount: number }) {
  const { draws } = useDraw(amount);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <DrawHeader />
      {draws.map((draw, index) => (
        <Box key={index}>{draw.join(', ')}</Box>
      ))}
    </div>
  );
}

const DrawHeader = () => {
  return (
    <Txt size='small' fontWeight='bold'>
      {PURCHASED_DRAWS}
    </Txt>
  );
};
