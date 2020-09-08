import React from "react";

const dateString = (dt) => {
  let date = new Date(dt * 1000).toDateString();

  let fullDateSplit = date.split(" "); //["tue","Sep"]
  let dateSplice = fullDateSplit.slice(1);
  return { fullDateSplit, dateSplice };
};

const Card = (props) => {
  //2020-09-08 18:00:00
  let { cityName } = props;
  let { temp } = props.fiveDaysForecast.main;
  let { weather } = props.fiveDaysForecast;
  let { dt } = props.fiveDaysForecast;

  //   let arr = dt_txt.split(" ");
  //   let date = dateString(arr[0].split("-"));
  //   let fullDateSplit = date.split(" "); //["tue","Sep"]
  //   let dateSplice = fullDateSplit.slice(1);
  //   console.log(date.split(" "));

  const { fullDateSplit, dateSplice } = dateString(dt);
    
  //
  //

  return (
    <article className="card">
      <div className="day-date">
        <h2>{cityName}</h2>
        <span>{fullDateSplit[0]}</span>
        <br />
        <time>{dateSplice.join(" ")}</time>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <div className="temperature">
        {temp}
        <sup>&#176;</sup>C
      </div>
      <div className="description">{weather[0].description}</div>
    </article>
    //     <article className="card">
    //         <div className="day-date">
    //             <h2>{cityName}</h2>
    //             <span >Wednesday</span>
    //             <br/>
    //             <time>Aug 26 2020</time>
    //         </div>
    //         <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="weather icon" />
    //         <div className="temperature">{temp}<sup>&#176;</sup>C</div>
    //         <div className="description">{weather[0].description}</div>
    // </article>
  );
};
export default Card;
