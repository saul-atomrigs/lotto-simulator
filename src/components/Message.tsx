import Txt from './Txt';

interface MessageProps {
  message: string;
  type?: 'error' | 'info' | 'success' | 'warning';
}

const colorMap = {
  error: 'red',
  info: 'blue',
  success: 'green',
  warning: 'orange',
};

export default function Message({ message, type = 'info' }: MessageProps) {
  return (
    <Txt style={{ color: colorMap[type], margin: '0', fontSize: '14px' }}>
      {message}
    </Txt>
  );
}
