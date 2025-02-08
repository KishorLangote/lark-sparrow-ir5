import { Link } from "react-router-dom"
import Header from './components/Header'
import Footer from "./components/Footer"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  
  return (
    <>
      <Header />
    <main className='container py-4'>
      <div>
        <section className="bg-primary text-center text-light py-5">
         <h1 className="display-3">User Database</h1>
         <p className="mb-5">View company's user data</p>
         <Link className="btn btn-light" to="/users" >View List of Users</Link>
        </section>

        <section className="bg-light text-center py-5">
          <h1 className="display-3 fw-normal">User Statistics</h1>
          <p>View company's user statistics</p>
          <Link className="btn btn-primary" to="/statistics">View User Stats</Link>
        </section>
        <Footer />
      </div>
    </main>
     
    </>
  )
}

export default App
