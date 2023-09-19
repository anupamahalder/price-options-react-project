import './App.css';
import Navbar from './components/Navbar/Navbar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineChart from './components/LineChart/LineChart';
import Phones from './components/Phones/Phones';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      {/* Adding linechart component  */}
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
