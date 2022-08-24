import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";
import "./Welcome.css";
import { arrowForward } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import Login from "../login/Login";

const Welcome: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <div className="ion-slide">
              <img className="image_padding" src="assets/images/1.png" />
              <IonText className="heading_text ion-padding-top">
                Lets Start Journey
              </IonText>
              <IonText className="sub_heading_text">
                <p>
                  The <b>ionic conference app</b> is a practical preview of the
                  ionic framework in action, and a demonstration of proper code
                  use.
                </p>
              </IonText>
            </div>
          </IonSlide>

          <IonSlide>
            <div className="ion-slide ion-padding-top">
              <img className="image_padding" src="assets/images/3.png" />
              <IonText className="heading_text ion-padding-top">
                Book Your First Ride
              </IonText>
              <IonText className="sub_heading_text">
                <p>
                  The <b>ionic conference app</b> is a practical preview of the
                  ionic framework in action, and a demonstration of proper code
                  use.
                </p>
              </IonText>
              <IonButton href="./login">
                Login / Sign Up
                <IonIcon icon={arrowForward}></IonIcon>
              </IonButton>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Welcome;
