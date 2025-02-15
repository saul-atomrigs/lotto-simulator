import { Button } from '../../components';
import { useWinStore } from '../../store/winStore';
import { CONSTANTS } from './Reset.constants';

interface Props {
  onReset: () => void;
}

export default function ResetButton({ onReset }: Props) {
  const reset = useWinStore((state) => state.reset);

  const handleReset = () => {
    reset();
    onReset();
  };

  return (
    <Button theme='primary' fullWidth onClick={handleReset}>
      {CONSTANTS.RESET_BUTTON_TEXT}
    </Button>
  );
}
