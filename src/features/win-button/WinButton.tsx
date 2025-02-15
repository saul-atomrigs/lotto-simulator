import { Button } from '../../components';
import { useWinStore } from '../../store/winStore';
import { CONSTANTS } from './WinButton.constants';

export default function WinButton() {
  const setWinningNumbers = useWinStore((state) => state.setWinningNumbers);

  return (
    <Button onClick={setWinningNumbers}>{CONSTANTS.CTA_BUTTON_TEXT}</Button>
  );
}
