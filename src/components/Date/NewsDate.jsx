import React from "react";


const NewsDate = ({raw})=> {
    let temp = Date.parse(raw),
        date = new Date(temp),
        month = date.getMonth() + 1,
        day = date.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return (
        <p>
            <span>{day}</span> / {month}
        </p>
    )
}

export default NewsDate


