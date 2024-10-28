import React, { Suspense, memo } from "react";
import { BrowserRouter, Link, useRoutes } from "react-router-dom";

import MyRoute from "@src/routes/my_route";
import RouteScrollToTop from "@src/routes/route_scroll_to_top";
import my_routes from "@src/routes/my_routes";
import NotFound from "@src/views/components/auth/not_found";
import NotAllowed from "@src/views/components/auth/not_allowed";
import Loading from "@src/views/components/general/loading";

export const Router = memo(() => {
  const get_route = (route) => {
    let _route = {};
    if (route.children) {
      let children = [];
      route.children?.map((child) => {
        let child_route = get_route(child);
        children.push(child_route);
      });
      _route = {
        path: route.path,
        element: (
          <MyRoute name={route.name} authenticate={route.authenticate}>
            {route.component}
          </MyRoute>
        ),
        children: children,
      };
    } else {
      _route = {
        path: route.path,
        element: (
          <MyRoute name={route.name} authenticate={route.authenticate}>
            {route.component}
          </MyRoute>
        ),
      };
    }
    return _route;
  };

  const MyRouter = () => {
    let routes = [];
    my_routes?.map((my_route) => {
      let child_route = get_route(my_route);
      routes.push(child_route);
    });

    let not_found_route = {
      path: "*",
      element: <NotFound />,
    };

    let not_allowed_route = {
      path: "not-allowed",
      element: <NotAllowed />,
    };
    routes.push(not_found_route);
    routes.push(not_allowed_route);
    let route_elements = useRoutes(routes);

    return (
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/layout/page1">Page1</Link>
            </li>
            <li>
              <Link to="/layout/page2">Page2</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav> */}
        {route_elements}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/layout/page1">Page1</Link>
            </li>
            <li>
              <Link to="/layout/page2">Page2</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    );
  };

  return (
    <BrowserRouter >
      <Suspense fallback={<Loading />}>
        <RouteScrollToTop />
        <MyRouter />
      </Suspense>
    </BrowserRouter>
  );
});
