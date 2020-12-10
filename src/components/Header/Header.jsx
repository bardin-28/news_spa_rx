import React from "react";
import {Link,NavLink} from "react-router-dom";
import './Header.scss'

const Header = ()=>{
    return(
        <header className="header">
            <div className="container">
               <div className="header-body">
                   <Link to={'/'}><h2 className="header-title">Newsletter</h2></Link>
                   <nav>
                       <ul className="nav-menu">
                           <li>
                               <NavLink
                                   exact
                                   to={'/'}
                                   activeClassName="active"
                               >Home</NavLink>
                           </li>
                           <li>
                               <NavLink
                                   exact
                                   to={'/news'}
                                   activeClassName="active"
                               >News</NavLink>
                           </li>
                           <li>
                               <NavLink
                                   exact
                                   to={'/contacts'}
                                   activeClassName="active"
                               >Contacts</NavLink>
                           </li>
                       </ul>
                   </nav>
               </div>
            </div>
        </header>
    )
}

export default Header