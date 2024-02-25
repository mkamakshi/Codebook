import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header, ScrollToTop } from './components';


function App() {
  
  return (
    <div className="App dark:bg-dark">
      <Header />
      <ScrollToTop/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;