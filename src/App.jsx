import React, { useState } from "react";
import {
  Route,
  Router,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

import { ScrollProvider } from "./helpers/scrollProvider";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Loader } from "./components/Loader/Loader";
import classNames from "classnames";
import WorkDetails from "./pages/WorkDetails/WorkDetails";

const queryC = new QueryClient();

function App() {
  // const [loaderFinished, setLoaderFinished] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(true);

  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "works/:workSlug",
          element: <WorkDetails />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  const location = useLocation();

  return (
    <QueryClientProvider client={queryC}>
      <main
        className={classNames("main", {
          "main--loading": !loaderFinished,
        })}
      >
        <ScrollProvider>
          {!loaderFinished && <Loader setLoaderFinished={setLoaderFinished} />}
          <AnimatePresence mode="wait">
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </ScrollProvider>
      </main>
    </QueryClientProvider>
  );
}

export default App;
