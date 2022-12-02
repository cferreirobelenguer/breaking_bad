import SearchBar from './components/SearchBar'
import '../src/assets/scss/style.css'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar/>
      </div>
    </Provider>
    
  )
}

export default App
