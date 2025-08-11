import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import AppRoutes from "./redux/routes"

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App

