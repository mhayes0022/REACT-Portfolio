// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div>
    <Header/>
    </div>
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;