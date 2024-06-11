// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div>
    <Header/>
    </div>
    
{/* Note: Can make the container below full width of display by using 'fluid' */}
    <Container fluid className="main-content bg-danger text-white" >
      <main className="mx-3">
        <Outlet />
      </main>
    </Container>


      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;