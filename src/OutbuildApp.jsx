import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { AppRouter } from "./router/AppRouter";
import { store } from "./store";
import { AppTheme } from "./theme";

export const OutbuildApp = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </HashRouter>
    </Provider>
  );
};
