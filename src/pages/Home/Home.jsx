import React from "react";
import {NavLink} from "react-router-dom";
import './Home.scss';

import {ConnectNewsItem as NewsItem} from "../../components/NewsItem/NewsItem";
import {connect} from "react-redux";

const Home = ({handleChangeNews}) =>{
    return(
        <div className="home">
            <div className="container">
                <h2 className="home-title">Always fresh&nbsp;<span>news</span></h2>
                <div className="newsList-wrapper">
                    <NewsItem
                        isAllNews={false}
                        handleChangeNews={handleChangeNews}
                    />
                </div>
                <NavLink
                    exact
                    to={'/news'}
                    className="newsList-btn"
                    activeClassName="active"
                >More news</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    news: state.news,
})

const ConnectHome = connect(mapStateToProps)(Home)
export {ConnectHome};