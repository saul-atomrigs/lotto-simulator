import { APPLICATION_NAME } from './constants';
import Header from './widgets/Header';

function App() {
  return (
    <div style={{ padding: '36px 24px' }}>
      <Header size='large' fontWeight='bold'>
        {APPLICATION_NAME}
      </Header>
    </div>
  );
}

export default App;
