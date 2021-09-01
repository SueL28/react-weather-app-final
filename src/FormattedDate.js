
import React from "react";

export default function FormattedDate(props){
    console.log(props.date)

    return(
        <div>
            Monday August 5
        </div>
    )
   /* let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.data.getDay()];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[props.data.getMonth()];
    let date = props.data.getDate();


    return( 
        <div> {day} {month} {date})</div>
    ); */
}