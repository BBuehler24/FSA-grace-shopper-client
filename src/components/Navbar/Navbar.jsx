import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ user, setToken, setUser }) {
  function handleLogout() {
    localStorage.removeItem('token')
    alert(`Successfully logged out of ${user.name}'s profile`)
    setToken('')
    setUser({})
  }
  return (
    <div className="navLinkAll">
      <div className="sepTopNav"></div>
      <div className="sepBottomNav">
        <div className="bottomNav">
          <Link className="navLink" to={'/'}>
            Home
          </Link>
          <Link className="navLink" to={'/Products'}>
            products
          </Link>
          <Link className="navLink" to={'/women'}>
            Women
          </Link>
          <Link className="navLink" to="/Carts">
            Cart
          </Link>
          <Link className="navLink" to={'/men'}>
            Men
          </Link>

          {user.name && (
            <Link onClick={handleLogout} className="navLink" to={'/'}>
              Logout
            </Link>
          )}
          {user.name && <p>Welcome {user.name}</p>}
        </div>
      </div>
    </div>
  )
}
