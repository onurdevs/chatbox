import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Message from './components/Message';
import Aside from './components/Aside';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Message />
      <Aside />
    </div>
  );
}

export default App;
