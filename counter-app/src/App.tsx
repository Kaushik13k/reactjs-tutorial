import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  // Increment and decrement functions
  const incrementCounter = () => setCount(count + 1);
  const decrementCounter = () => setCount(count - 1);

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white border border-gray-300 w-1/2 h-96 rounded-lg shadow-lg flex flex-col justify-center items-center p-6'>
        <h1 className='text-3xl font-semibold mb-6'>Counter App</h1>

        <input
          className='border border-gray-400 rounded-lg text-center text-2xl w-32 mb-4 p-2'
          type="text"
          value={count}
          readOnly
        />

        <div className='space-x-4'>
          <button
            onClick={incrementCounter}
            className='bg-blue-500 text-white font-semibold p-2 rounded-lg shadow hover:bg-blue-600 transition'
          >
            +
          </button>

          <button
            onClick={decrementCounter}
            className='bg-red-500 text-white font-semibold p-2 rounded-lg shadow hover:bg-red-600 transition'
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
