import Txt from './Txt';

interface ErrorMessageProps {
  message: string;
}
export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Txt style={{ color: 'red', margin: '0', fontSize: '14px' }}>{message}</Txt>
  );
}
