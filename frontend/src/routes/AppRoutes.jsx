import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DashboardPage, { DashboardMessages, DashboardTasks} from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile.jsx";
import LoginForm from "../components/LoginFormMUI.jsx";
import SignupForm from "../components/SignupMUI.jsx";
import LogoutPage from "../pages/LogoutPage.jsx";
import SearchResultPage from "../pages/SearchResultPage.jsx";
import AddItem from "../components/AddItem.jsx";

// child components using {...props}
function AppRoutes(props) {
    return (
        <Routes>
        {/* index matches on default/home URL: / */}
        <Route index element={<Homepage {...props} />} />
  
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage {...props} />
            </ProtectedRoute>
          }
        >
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
  
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile {...props} />
                </ProtectedRoute>} />

        <Route path="/about" element={<AboutPage {...props} />} />
        <Route path="/fridge" element={<SearchResultPage {...props} />} />
        <Route path="/additem" element={<AddItem {...props} />} />
        <Route path="/signup" element={<SignupForm {...props} />} />
        <Route path="/logout" element={
              <ProtectedRoute>
                <LogoutPage {...props} />
              </ProtectedRoute>}/>

        {/* special route to handle if none of the above match */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }
  
  export default AppRoutes;