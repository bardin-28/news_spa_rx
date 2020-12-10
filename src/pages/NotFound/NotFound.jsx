import React from "react";
import {Redirect} from 'react-router-dom'
import './NotFound.scss';

const NotFound = ()=>{
    return(
        <div className="NotFound">
            <div className="container">
                <div className="NotFound-body">
                    <h1>404</h1>
                    <p>Такой страницы не существует</p>
                    {setTimeout(()=> <Redirect to={'/'}/>, 1000)}
                </div>
            </div>
        </div>
    )
}

export default NotFound;