import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompantList from "../companies/CompanyList";
import JobCardList from "../jobs/JobCardList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../auth/ProfileForm";
import SignupForm from "../auth/SignupForm";
import UserContext from "../auth/UserContext";

const Routes = ({ login, signup }) => {
    const { isLoggedIn } = useContext(UserContext);

    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return (
        <div className="pt-5">
            <Switch>
                {isLoggedIn ? (<>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/companies">
                    <CompanyList />
                </Route>
                <Route exact path="/jobs">
                    <JobsCardList />
                </Route>
                <Route exact path="/companies/:handle">
                    <CompanyDetail />
                </Route>
                <Route exact path="/profile">
                    <ProfileForm />
                </Route>
                <Redirect to="/" />
                </>) : (<>
                {/* why is a property set to {property} */}
                <Route exact path="/login">
                    <LoginForm login={login} /> 
                </Route>
                <Route exact path="/signup">
                    <SignupForm signup={signup0} />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Redirect to="/" />
                </>)
                }
            </Switch>
        </div>
    )
}

export default Routes;