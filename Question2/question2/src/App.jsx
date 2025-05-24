import { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [average, setAverage] = useState(0);
  const [seriesType, setSeriesType] = useState('');
  const [evenOddType, setEvenOddType] = useState('');

  const isFibonacci = (arr) => {
    if (arr.length < 3) return false;
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + arr[i - 2]) return false;
    }
    return true;
  };

  const isPrimeSeries = (arr) => {
    const isPrime = (num) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    return arr.every(isPrime);
  };

  const identifySeries = (arr) => {
    if (isFibonacci(arr)) return 'Fibonacci Series';
    if (isPrimeSeries(arr)) return 'Prime Numbers';
    return 'Unknown Series';
  };

  const identifyEvenOdd = (arr) => {
    const allEven = arr.every((num) => num % 2 === 0);
    const allOdd = arr.every((num) => num % 2 !== 0);
    if (allEven) return 'All Even Numbers';
    if (allOdd) return 'All Odd Numbers';
    return 'Mixed Numbers';
  };

  const addNumber = () => {
    const num = parseFloat(inputValue);
    if (!isNaN(num)) {
      const updatedNumbers = [...numbers, num];
      setNumbers(updatedNumbers);
      setAverage(updatedNumbers.reduce((a, b) => a + b, 0) / updatedNumbers.length);
      setSeriesType(identifySeries(updatedNumbers));
      setEvenOddType(identifyEvenOdd(updatedNumbers));
      setInputValue('');
    }
  };

  const resetCalculator = () => {
    setNumbers([]);
    setInputValue('');
    setAverage(0);
    setSeriesType('');
    setEvenOddType('');
  };

  return (
    <div className="average-calculator">
      <h2>Average Calculator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={addNumber}>Add Number</button>
      <button onClick={resetCalculator}>Reset</button>
      <p>
        <span>Numbers:</span> {numbers.join(', ')}
      </p>
      <p>
        <span>Average:</span> {average}
      </p>
      <p>
        <span>Series Type:</span> {seriesType}
      </p>
      <p>
        <span>Even/Odd Type:</span> {evenOddType}
      </p>
    </div>
  );
}

export default App;