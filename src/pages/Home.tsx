import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Home.css';
import illu from '../assets/illustration.png';
import calendar from "../assets/calendar.svg";
import userIcon from "../assets/user.svg"

import {ChangeEvent, MouseEvent, useState} from "react";
import accountSlide from "../components/accountSlide";
import trainCard from '../components/trainCard';
import trainstation from "../scripts/routes/trainstation.routes.js";
import train from "../scripts/routes/train.routes.js";

const Home: React.FC = () => {

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState("hide");
  const [pseudo, setPseudo] = useState("Anonymous");
  const [token, setToken] = useState("");
  const [departureStation, setDepartureStation] = useState({});
  const [arrivalStation, setArrivalStation] = useState({});
  const [trains, setTrains] = useState([]);


  const handleArrivalChange = async (e: ChangeEvent<HTMLInputElement>) => {

    const data = await trainstation.get(e.currentTarget.value, token);

    setArrivalStation(data);

    e.target.value = data.nameStation;

    setArrival(data.nameStation);
  }

  const handleDepartureChange = async (e: ChangeEvent<HTMLInputElement>) => {
    
    const data = await trainstation.get(e.currentTarget.value, token);

    setDepartureStation(data);

    e.target.value = data.nameStation;

    setDeparture(data.nameStation);
    
  }

  const handleDateChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    const data = await train.get(departure, arrival, e.target.value)
  }

  const handleClickUser = (e: MouseEvent) => {
    console.log("yoyoyoyoyoyo");
    
    if (isAccountOpen == "hide") {
      setIsAccountOpen("show");
    }else {
      setIsAccountOpen("hide")
    }
  }

  const getUserInfo = (pseudo: any, token: any) => {
    setPseudo(pseudo);
    setToken(token);
    setIsAccountOpen("hide");
    setIsLogged(true)
  }

  // @ts-ignore
  return (
    <IonPage>
      <IonContent fullscreen scroll-y="true">
        <IonHeader collapse="condense">
        </IonHeader>
        <div className='page'>
          <img src={userIcon} className='userIcon' onClick={handleClickUser} />
        <img src={illu} alt="" className='illustration' />
        <div className="body">
          <h1 className='title'>Hey, {pseudo}.<br/>Où vas-tu ?</h1>

          <input type="text" className='input-text' placeholder='Votre destination' onBlur={(e) => handleArrivalChange(e)} />
          <input type="text" className='input-text' placeholder="D'où pars tu ?" onBlur={(e) => handleDepartureChange(e)}/>

          <div className="input-w-icon">
            <input type="time" className={"input-date"}  onBlur={handleDateChange}/>
            <img src={calendar} alt={""} className="input-icon"/>
          </div>

          {
            trainCard({
              "stationStart": "Gare de Beziers",
              "stationEnd": "Gare de Montpellier",
              "departure":"08:45",
            })
          }

          <div className={"accountSlide " + isAccountOpen}>
          {
              accountSlide({
                "isLogged": isLogged,
                "getInfo" : getUserInfo
              })
            }
          </div>

        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
