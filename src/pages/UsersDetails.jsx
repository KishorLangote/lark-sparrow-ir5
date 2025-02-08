import { useParams } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../hook/useFetch";


const UsersDetails = () => {
  const userId = useParams()
  console.log("id:", userId)
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
  console.log(data)

  const userData = data?.find((user) => user.id == parseInt(userId.id))
  console.log(userData)
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{userData?.name}</h1>

        { loading && <p>Loading...</p> }

        { data && data.length > 0 ? (
          
         <ul className="list-group">
          <li className="list-group-item"><strong>Name: </strong>{userData.name}</li>
          <li className="list-group-item"><strong>Username: </strong>{userData.username}</li>
          <li className="list-group-item"><strong>Email: </strong>{userData.email}</li>
          <li className="list-group-item"><strong>Phone: </strong>{userData.phone}</li>
          <li className="list-group-item"><strong>Website: </strong>{userData.website}</li>
          <li className="list-group-item"><strong>Company: </strong>{userData.company.name} ({userData.company.catchPhrase})</li>
          <li className="list-group-item"><strong>City: </strong>{userData.address.city}</li>
          <li className="list-group-item"><strong>Zipcode: </strong>{userData.address.zipcode}</li>
         </ul>
        ) :  error && <p>Error while fetching the data.</p> }
      </main>
      <Footer />
    </>
  )
}

export default UsersDetails;