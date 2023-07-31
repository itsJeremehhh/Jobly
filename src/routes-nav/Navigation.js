import React, { useContext } from "react";
import { NavBar, Nav, NavItem } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import userContext from "../auth/UserContext";//?
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa"; //?
import { MdSwitchAccount } from "react-icons/md";


const DEFAUALT = 'https://cdn-icons-png.flaticon.com/512/3306/3306451.png';

function Navigation({ logout }) { //?
    const { isLoggedIn } = useContext(UserContext);
    const history = useHistory();
    const handleClick = () => {
        logout();
        history.push("/")
    }

    return(
        <div>
            <Navbar expand="md">
                <NavLink className="ml-auto" navbar>
                    <h3> Jobly <img src={DEFAULT} className="" stle={{ height: '30px', width:'30px'}} /></h3>

                </NavLink>
                    <Nav className="ml-auto" navbar>
                        {isLoggedIn ? (<>
                        <NavItem>
                            <NavLink to="/companies"><h5>Companies</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <h3 className="btn btn-sm btn-outline-warning" onClick={handleClick} type="logout">
                            <faSignOutAlt />Bye!</h3>
                        </NavItem>
                            </>) :  (<>
                            <NavItem>
                                <navLink to="/login" type="login"> <h3> <FaSignInAlt /></h3></navLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/signup" type="signup"><h3> <MdSwitchAccount /></h3></NavLink>
                            </NavItem>
                            </>)
                            
                            }
                    </Nav>
            </Navbar>
        </div>

    );
    }

    export default Navigation;