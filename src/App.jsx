import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

// function App() {
//     return (
//         <div className="App">
//             <Router>
//                 <Header />
//                 <Routes>
//                     <Route path="/" exact component={ProductListing} />
//                     <Route path="/product/:productId" exact component={ProductDetail} />
//                     <Route>404 Not Found</Route>
//                 </Routes>
//             </Router>
//         </div>
//     );
// }

// export default App;

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <ProductListing />,
    },
    {
        path: "/product/:productId",
        element: <ProductDetail />,
    },
]);
