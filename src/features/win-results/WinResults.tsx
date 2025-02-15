import { Box, Header } from '../../components';
import { CONSTANTS } from './WinResults.constants';
import { useWinResults } from './WinResults.hooks';

export default function WinResults({ draws }: { draws: number[][] }) {
  const { winResults } = useWinResults(draws);

  return (
    <div style={{ marginTop: '20px' }}>
      <Header size='small' fontWeight='bold'>
        {CONSTANTS.RESULT_TEXT}
      </Header>

      <div style={{ marginTop: '10px' }}>
        {CONSTANTS.RANKS.map((rank) => (
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{rank}</span>
            <span>{winResults[rank] || 0}개</span>
          </Box>
        ))}
      </div>
    </div>
  );
}
