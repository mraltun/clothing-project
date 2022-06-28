import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
