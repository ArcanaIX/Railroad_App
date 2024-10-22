import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Home.css';
import illu from '../assets/illustration.png';
import calendar from "../assets/calendar.svg";

import {ChangeEvent, DOMElement, useState} from "react";
import accountSlide from "../components/accountSlide";

const Home: React.FC = () => {

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleArrivalChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArrival(e.target?.value);
  }

  const handleDepartureChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArrival(e.target.value);
  }

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }

  // @ts-ignore
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <div className='page'>
        <img src={illu} alt="" className='illustration' />
        <div className="body">
          <h1 className='title'>Hey, Anonymous.<br/>Où vas-tu ?</h1>

          <input type="text" className='input-text' placeholder='Votre destination' onChange={handleArrivalChange} />
          <input type="text" className='input-text' placeholder="D'où pars tu ?" onChange={handleDepartureChange}/>

          <div className="input-w-icon">
            <input type="date" className={"input-date"}  onChange={handleDateChange}/>
            <img src={calendar} alt={""} className="input-icon"/>
          </div>

          <div className="accountSlide">
            {
              accountSlide({
                "isLogged": isLogged
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
