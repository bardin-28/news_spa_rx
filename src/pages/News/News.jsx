import React from "react";
import './News.scss';

import {ConnectNewsItem as NewsItem} from "../../components/NewsItem/NewsItem";
import {connect} from "react-redux";

const News = ({news, handleChangeNews})=>{

    return(
        <div className="news">
            <div className="container">
                <h2 className="news-title">Be aware of&nbsp;<span>events</span></h2>
                <div className="newsList-wrapper">
                    <NewsItem
                        news={news}
                        isAllNews={true}
                        handleChangeNews={handleChangeNews}
                    />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    news: state.news,
})

const ConnectNews = connect(mapStateToProps)(News)
export  {ConnectNews};