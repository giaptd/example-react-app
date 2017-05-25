/**
 * Created by giapt on 5/25/2017.
 */
import React from 'react';

const ArticleList = props =>{
    if(!props.articles){
        return <div className="article-preview">Loading...</div>
    }

    if(props.articles.length===0){
        return(
            <div className="article-preview">
                no article here yet
            </div>
        );
    }
    return(
        <div>
            {props.articles.map(article=>{
                return (
                  <h2>{article.title}</h2>
                );
            })}
        </div>
    );
}

export default ArticleList;