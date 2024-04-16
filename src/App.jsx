import { useState } from "react";
import { Outlet } from "react-router-dom"
import { MainLayout,  LoginLayout } from "@layout";


const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('token');
  return (
    <>
      {
        isLogin || token ? 
        <MainLayout>
           <Outlet />
        </MainLayout> 
        : <LoginLayout setIsLogin={setIsLogin} />

      }
    </>
  );
};

export default App;