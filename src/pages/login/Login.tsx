import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonText,
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useIonRouter();
  function checkEmpty(checkText: string): Boolean {
    if (typeof checkText === "string" && checkText.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  function validate() {
    if (!checkEmpty(email) && !checkEmpty(password)) {
      const temp = window.localStorage.getItem("userData");
      if (temp != null) {
        let userData = JSON.parse(temp);
        if (userData.userEmail == email && userData.userPassword == password) {
          alert("Login Successfully");
          route.push("/home");
        } else {
          alert("User Email or Password is Wrong");
        }
      } else {
        alert("Something Went wroing Try again");
      }
    } else {
      alert("All fields are required!!");
    }
  }
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <div className="ion-slide">
          <img src="assets/images/login_new.png" />
          <IonText className="heading_text ion-padding-top">
            Jump into it
          </IonText>
          <IonItem className="editText">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              onIonInput={(e: any) => setEmail(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem className="editText">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              onIonInput={(e: any) => setPassword(e.target.value)}
            />
          </IonItem>
          <IonButton
            className="buttomCustom"
            type="submit"
            expand="block"
            onClick={validate}
          >
            Login
          </IonButton>
          <IonText className="textCustom">
            Done have an account&nbsp;&nbsp;
            <IonRouterLink color="primary" href="./signup">
              <b>Get One</b>
            </IonRouterLink>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Login;
