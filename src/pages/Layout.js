import { Outlet, Link } from "react-router-dom";

// Anytime we link to an internal path, we will use <Link> instead of <a href="">.
const dynamicStrValue='';
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            
          <Link to={{ pathname:`https://www.yasdl.com/${dynamicStrValue}`}} target="_blank">yasdl</Link>

            <Link to="/form">form</Link>
       
          </li>
          <li>
            <Link to="/ShowTableDB">ShowTableDB</Link>
          </li>
        </ul>
      </nav>

       <Outlet /> {/*render corrent */}
    </>
  )
};

export default Layout;