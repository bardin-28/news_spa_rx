import React, {useEffect, useState} from "react";
import {Route, Switch, useLocation} from 'react-router-dom'
// Pages
import {ConnectHome as Home}  from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import {ConnectNews as News} from "../../pages/News/News";
import Contacts from "../../pages/Contacts/Contacts";
import NewsArticle from "../../pages/NewsArticle/NewsArticle";
// Data
import MocDataJson from "../../moc-data.json";
import {getNewsBegin, getNewsFailure, getNewsSuccess} from "../../redux/actions";
import {connect} from "react-redux";

const Body = (props)=>{
    const [newsIndex, setIndexNews]= useState(null)
    const [article, setArticle] = useState(null)
    const params = useLocation();
    const [data, setData] = useState([])
    const currentNews = params.pathname && params.pathname.split("s/")[1]

    // const useFetch = ()=>{
    //     useEffect(()=> {
    //         props.onStart();
    //         const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=13b2c197966e4ec3b16369e5fc4856b1';
    //         (async ()=>{
    //             await fetch(url)
    //                 .then(res => res.json())
    //                 .then(res => {
    //                     setData(res.articles);
    //                     props.onSuccess(res.articles);
    //                  })
    //         })()
    //     },[])
    //     return data
    // }

    const useFetch = ()=>{
       useEffect(()=>{
           props.onStart()
           const MocData = MocDataJson.articles
           setData(MocData)
           props.onSuccess(MocData);
       },[])
        return data
    }

    const newsData = useFetch()

    useEffect(()=>{
        data.map((item ,index)=>(
            item.title === currentNews ? setArticle(newsData[index]) : null ))
    },[newsIndex, currentNews, data, newsData])

    const handleChangeNews = (id) => setIndexNews(id)

    return(
        <main>
            <Switch>
                <Route  exact path='/' render={()=>
                    <Home
                        handleChangeNews={handleChangeNews}
                    />
                }/>
                <Route  exact path={'/news'} render={()=>
                    <News
                        handleChangeNews={handleChangeNews}
                    />
                } />
                <Route  exact path={'/news/:name'} render={()=>
                    <NewsArticle
                        post={article}
                    />
                } />
                <Route  exact path={'/contacts'} component={Contacts} />
                <Route path={'*'} component={NotFound} />
            </Switch>
        </main>
    )
}

const mapStateToProps = state =>({
    isLoading: state.isLoading
})

const mapDispatchToProps = dispatch =>({
    onStart: ()=> dispatch(getNewsBegin()),
    onSuccess: data => dispatch(getNewsSuccess(data)),
    onFailure: ()=> dispatch(getNewsFailure())
})

const connectBody = connect(mapStateToProps, mapDispatchToProps)(Body)
export {connectBody}