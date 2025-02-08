import { Link } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../hook/useFetch";

const Users = () => {

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
  // console.log(data)

 
  return (
    <>
    <Header />
      <main className="container py-4">
        <h1>List of Users</h1>
         { loading && <p>Loading...</p> }
         { error && <p>Error while fetching the data.</p> }

        <div>
          { data && data.length > 0 ? (
            <ul>
            {data.map((user) => (
              <li key={user.id} className="py-4">
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
                <Link className="btn btn-primary" to={`/users/${user.id}`}>View Details</Link>
              </li>
            ))}
          </ul> 
          ): ""}
           
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Users;