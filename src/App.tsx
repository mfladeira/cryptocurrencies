import styles from './App.module.scss'
import ListOfCrypto from './pages/ListOfCrypto/ListOfCrypto'

function App() {
  return (
    <main className={styles.mainApp}>
      <ListOfCrypto />
    </main>
  )
}

export default App
