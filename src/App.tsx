import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import routes from "./config/routes";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { auth0Config } from "./config/auth0.config";
import AuthChecker from "./auth/AuthChecker";

function App() {
  
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <HashRouter>
        <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route: any, index: any) => (
              <Route
                key = {index}
                path = {route.path}
                element = {
                  route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (<route.component />)
                }
              />
            ))}
          </Routes>
        </Provider>
      </HashRouter>
    </Auth0Provider>
  )
}

export default App
