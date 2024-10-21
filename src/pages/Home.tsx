import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Home.css';
import illu from '../assets/illustration.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <div className='page'>
        <img src={illu} alt="" className='illustration' />
        <div className="body">
          <h1 className='title'>Hey, Anonymous.<br/>Ou vas-tu ?</h1>

          <input type="text" className='input-text' placeholder='Votre destination' />
          <input type="text" className='input-text' placeholder="D'où pars tu ?" />
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
