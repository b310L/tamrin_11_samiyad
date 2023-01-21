import { Outlet, Link,NavLink } from "react-router-dom";
import './style/layout.scss' 
// Anytime we link to an internal path, we will use <Link> instead of <a href="">.

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/">Home</NavLink>
          </li>
          <li>
            {/* className="active" */}
            <NavLink className={(navData) => (navData.isActive ? 'active' : '')}  to="/ShowTableDB">ShowTableDB</NavLink>
          </li>
          <li>
            

            {/* <Link to="/form">form</Link> */}
            <a className={(navData) => (navData.isActive ? 'active' : '')} rel="noreferrer" href='https://rt110b.sse.codesandbox.io/'>form</a>
       
          </li>
          
        </ul>
      </nav>

       <Outlet /> {/*render corrent */}
    </>
  )
};

export default Layout;