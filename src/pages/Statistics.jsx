import Header from "../components/Header";
import Footer from "../components/Footer";

const Statistics = () => {

  const totalUsers = 10
  const paidUsers = 5
  const mostValuableUser = "Leanne Graham"
  return (
    <>
    <Header />
      <main className="container py-4">
        <h1>User Statistics</h1>
        <hr />
        <div className="row py-3">
          
          {/* Total Number of Users */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>Total Number of Users</h3>
                <p className="display-4">{totalUsers}</p>
              </div>
            </div>
          </div>

        {/* paid users */}

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>Paid Users</h3>
                <p className="display-4">{paidUsers}</p>
              </div>
            </div>
          </div>

          {/* Most Valuable User */}

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>Most Valuable User</h3>
                <p className="display-4">{mostValuableUser}</p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Statistics;