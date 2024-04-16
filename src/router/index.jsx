import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import { Posts , Prodact } from "@pages";
  import {  ErorrLayout } from "@layout";
  
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="products" element={<Prodact />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<ErorrLayout />}/>
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default index;
