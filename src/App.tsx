import { useEffect, useState } from 'react';
import { testBackend, getStates } from './services/testService';

function App() {
  const [message, setMessage] = useState('');
  const [states, setStates] = useState<any[]>([]);

  useEffect(() => {
    // Test backend connection
    testBackend()
      .then(data => setMessage(data))
      .catch(err => console.error(err));

    // Fetch states
    getStates()
      .then(data => setStates(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Membership Card System
        </h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Backend Status:</h2>
          <p className="text-green-600 font-bold">{message}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Available States:</h2>
          <ul className="list-disc pl-6">
            {states.map(state => (
              <li key={state.id}>
                {state.stateName} ({state.stateCode})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;