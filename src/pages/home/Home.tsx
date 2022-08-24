import {
  IonContent,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        <IonText className="heading_text ion-padding-top">
          Welocme To Home
        </IonText>
        <IonText className="sub_heading_text">
          <p>
            <b>This App was buid using Ionic 6 with React as Framework.</b>
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};
export default Home;
