import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProfile } from './components/UserProfile/UserProfile'
import { UserProfileCC } from './components/UserProfileCC/UserProfileCC'
import { RestrictedArea } from './components/RestrictedArea/RestrictedArea'
import { ShoppingList } from './components/ShoppingList/ShoppingList'

const data = {
  name: 'Vasya',
  status: 'React Developer',
  avatar: '/vasya.jpg',
  haveDesignSkills: true
}

const productList = [{
  id: 1,
  name: 'Мясо'
}, {
  id: 2,
  name: 'Каша'
}, {
  id: 3,
  name: 'Рыба'
}]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RestrictedArea allowed>
        <UserProfile data={data}/>
        <ShoppingList products={productList}/>
      </RestrictedArea>
      {/* <UserProfileCC data={data}/> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
