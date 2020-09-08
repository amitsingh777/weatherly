import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
//   state = { daily: [], today: {}, lat: null, long: null };
  state = { cityName:"",forecast:[],fiveDaysForecast:[] };
  componentDidMount() {
    this.onTermSubmit("Mumbai");
  }
  onTermSubmit = async (term) => {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${term}&appid=77784032c9927d023ac5951c8c33cdda&units=metric`
    );
    this.setState({cityName:response.data.city.name});
    this.setState({forecast:response.data.list});
    this.fiveDays();
    console.log(this.state.cityName,this.state.fiveDaysForecast);
  };
  correctHour=()=>{
    let hours=[3,6,9,12,15,18,21,24];
    let currentHour=new Date().getHours();
    for(let i=0;i<hours.length;i++){
      if(hours[i] === currentHour){
        return hours[i]
      }
      else if(hours[i] < currentHour && currentHour < hours[i+1]){
        let prev=Math.abs(hours[i] - currentHour);
        let next=Math.abs(hours[i+1] - currentHour);
        return prev < next ? hours[i] :hours[i+1]; 
      }
    }

  }
  fiveDays = () =>{
      let fiveDays=this.state.forecast.filter(data =>{  return data.dt_txt.includes(this.correctHour()+':00:00')});
      this.setState({fiveDaysForecast:fiveDays});
  }
  
  renderCard = () => {
    let cards = this.state.fiveDaysForecast.map((current, index) => {
      return <Card key={index} cityName={this.state.cityName} fiveDaysForecast={this.state.fiveDaysForecast[index]} />;
    });
    return cards;
  };
  render() {
    return (
      <section className="app">
        <header>
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </header>
        <main className="card-bunch">
          {this.renderCard()}
        </main>
      </section>
    );
  }
}

export default App;
