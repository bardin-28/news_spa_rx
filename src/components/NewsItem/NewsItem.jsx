import React from "react";
import {Link} from "react-router-dom";

import NewsDate from "../Date/NewsDate";
import './NewsItem.scss';
import {connect} from "react-redux";

const NewsItem = ({news, isAllNews, handleChangeNews}) =>{

    const data = isAllNews ? news : news.filter((article, index) => index < 6)

    return(
        <>
            {data.map((article, index) =>(
                <div key={Math.random()} className="news-card">
                    <Link
                        to={`/news/${article.title}`}
                        onClick={()=> handleChangeNews(index)}
                    ><h2
                        className="newsItem-title"
                    >{article.title} <span></span></h2>
                    </Link>
                    <div className="newsCard-info">
                        <p>{article.source.name}</p>
                        <NewsDate raw={article.publishedAt}/>
                    </div>
                </div>
            ))}
        </>
    )
}

const mapStateToProps = state =>({
    news: state.news,
})

const ConnectNewsItem = connect(mapStateToProps)(NewsItem)
export {ConnectNewsItem};