import Layout from "./layout/Layout"
import "./App.css"
import { ContextProvider } from "./context/Context"

function App() {

  return (
    <>
      <ContextProvider>
        <Layout/>
      </ContextProvider>
    </>
  )
}

export default App
