import './App.css';
import Navbar from './components/Navbar/Navbar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineChart from './components/LineChart/LineChart';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      {/* Adding linechart component  */}
      <LineChart></LineChart>
    </>
  )
}

export default App
