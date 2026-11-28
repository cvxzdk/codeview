import logo from '../assets/brand/logo.svg'
import wordmark from '../assets/brand/wordmark.svg'

function App() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        background: '#0d1117',
      }}
    >
      <img src={logo} alt="codeview logo" width="96" height="96" />
      <img src={wordmark} alt="codeview" height="40" />
    </div>
  )
}

export default App
