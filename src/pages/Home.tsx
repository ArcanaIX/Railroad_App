import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Home.css';
import illu from '../assets/illustration.png';
import calendar from "../assets/calendar.svg";
import userIcon from "../assets/user.svg"

import {ChangeEvent, MouseEvent, SetStateAction, useState} from "react";
import accountSlide from "../components/accountSlide";

const Home: React.FC = () => {

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState("hide");
  const [pseudo, setPseudo] = useState("Anonymous");
  const [token, setToken] = useState("")


  const handleArrivalChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArrival(e.target.value);
  }

  const handleDepartureChange = async (e: ChangeEvent<HTMLInputElement>) => {
    
    await setDeparture(e.target.value);

    console.log(departure);
    
  }

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
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
      <IonContent fullscreen scroll-y="false">
        <IonHeader collapse="condense">
        </IonHeader>
        <div className='page'>
          <img src={userIcon} className='userIcon' onClick={handleClickUser} />
        <img src={illu} alt="" className='illustration' />
        <div className="body">
          <h1 className='title'>Hey, {pseudo}.<br/>Où vas-tu ?</h1>

          <input type="text" className='input-text' placeholder='Votre destination' onChange={(e) => handleArrivalChange(e)} />
          <input type="text" className='input-text' placeholder="D'où pars tu ?" onChange={(e) => handleDepartureChange(e)}/>

          <div className="input-w-icon">
            <input type="date" className={"input-date"}  onChange={handleDateChange}/>
            <img src={calendar} alt={""} className="input-icon"/>
          </div>

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
