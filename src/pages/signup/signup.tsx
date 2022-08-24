import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import { useState } from "react";
const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function checkEmpty(checkText: string): Boolean {
    if (typeof checkText === "string" && checkText.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  function setData() {
    if (
      !checkEmpty(name) &&
      !checkEmpty(email) &&
      !checkEmpty(password) &&
      !checkEmpty(confirmPassword)
    ) {
      if (password == confirmPassword) {
        let tempData = {
          userNmae: name,
          userEmail: email,
          userPassword: password,
        };
        window.localStorage.setItem("userData", JSON.stringify(tempData));
        alert("Sign Up successfully");
      } else {
        alert("Password Did not match");
      }
    } else {
      alert("All Fields are requires!!");
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <div className="ion-slide">
          <img src="assets/images/signup.png" />
          <IonText className="heading_text ion-padding-top">
            Join With Us
          </IonText>
          <IonItem className="editText">
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              type="email"
              onIonInput={(e: any) => setName(e.target.value)}
            ></IonInput>
          </IonItem>
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
          <IonItem className="editText">
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput
              type="password"
              onIonInput={(e: any) => setConfirmPassword(e.target.value)}
            />
          </IonItem>
          <IonButton
            className="ion-margin-top buttomCustom"
            type="submit"
            expand="block"
            onClick={setData}
          >
            Sign Up
          </IonButton>
          {/* <IonText className="textCustom">
            Already have an account&nbsp;&nbsp;
            <IonRouterLink color="primary" href="/login">
              <b>Login</b>
            </IonRouterLink>
          </IonText> */}
        </div>
      </IonContent>
    </IonPage>
  );
};
export default SignUp;
