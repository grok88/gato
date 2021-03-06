import React from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from '../../features/Error404/Error404';
import { Login } from "../../features/Login/Login";
import { ForgotPassword } from "../../features/password/ForgotPassword/ForgotPassword";
import { NewPassword } from "../../features/password/NewPassword/NewPassword";
import { Profile } from "../../features/Profile/Profile";
import { Registration } from "../../features/Registration/Registration";
import { TestComponents } from "../../features/TestComponents/TestComponents";

export const PATH = {
  PROFILE: "/profile",
  REGISTRATION: "/registration",
  LOGIN: "/login",
  NEWPASSWORD: "/new-password",
  FORGOTPASSWORD: "/forgot-password",
  TESTCOMPONENTS: "/test-components"
}

function Routes() {
  return (
    <div>
      {/*Switch выбирает первый подходящий роут*/}
      <Switch>

        {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
        {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
        {/* <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN} />} /> */}
        <Route path={PATH.LOGIN} render={() => <Login />} />
        <Route path={PATH.REGISTRATION} render={() => <Registration />} />
        <Route path={PATH.PROFILE} render={() => <Profile />} />
        <Route path={PATH.NEWPASSWORD} render={() => <NewPassword />} />
        <Route path={PATH.FORGOTPASSWORD} render={() => <ForgotPassword />} />
        <Route path={PATH.TESTCOMPONENTS} render={() => <TestComponents />} />

        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route render={() => <Error404 />} />
      </Switch>
    </div>
  );
}

export default Routes;
