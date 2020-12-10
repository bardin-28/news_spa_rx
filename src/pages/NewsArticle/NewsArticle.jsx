import React from "react";
import './NewsArticle.scss';
import NewsDate from "../../components/Date/NewsDate";


const NewsArticle = ({post})=>{
    return(
        <>
            <div className="NewsArticle">
                <div className="container">
                    <div className="newsArticle-body">
                        <div className="newsArticle-aside">
                            <h2 className="newsArticle-title">{post && post.title}</h2>
                            <p>{post && post.source.name}</p>
                            {post && post.length !== null ? (<NewsDate raw={post.publishedAt}/>) : null}
                        </div>
                        <div className="newsArticle-content">
                            <div className="newsArticle-imgWrap">
                                <img src={post && post.urlToImage} alt="article"/>
                            </div>
                            <p>{post && post.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsArticle;