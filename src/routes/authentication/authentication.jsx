import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";
import { AuthenticationContainer } from "./authentication.style";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
