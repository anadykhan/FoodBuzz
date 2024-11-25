import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        path="/user-profile"
        element={<span>User Profile Page</span>}
      ></Route>
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
export default AppRoutes;
