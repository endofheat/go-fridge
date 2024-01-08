import { useNavigate, Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();
    <Outlet />
  return (
    
    <div className="PageNotFound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        What were you looking for? Come on, people, you gotta go {/* <Link to="/"> */}home{/* </Link> */}. 
      </p>
      Okay, <button onClick={() => navigate(-1)}>go back</button> by the bus and wait for me, all right? Go back and wait. 
    </div>
  );
}

export default PageNotFound;