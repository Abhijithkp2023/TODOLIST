import { useState } from 'react'
import Home from './Components/Home'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={appStore}>
      <Home />
    </Provider>
  );
}

export default App
