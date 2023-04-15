import './App.css';
import Header from './Header';
import SwipButtons from './SwipButtons';
import TinderCards from './TinderCards.js';

function App() {
  return (
    <div className="app">
      {/* Header */}
    <Header/>
      {/* TinderCards */}
      <TinderCards/>

      {/* swipeButtons */}
    <SwipButtons/>
    </div>
  );
}

export default App;
