import { useState } from "react";
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import { SignInContainer, ButtonsContainer } from "./sign-in.style";

// Create default formFields state object
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Reset the form after submitting.
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // We already destructed email and password from formFields state. They are up to date values.
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else if (error.code === "auth/user-not-found") {
        alert("Email not found");
      }
      console.log("Error when sign in", error.message);
    }
  };

  // Made this generic so it works for all the inputs in the form. It  updates the state when anything change on the inputs.
  const handleChange = (event) => {
    const { name, value } = event.target;

    // We destruct name and value from input (above code) and update the state with those matched values (displayName: 'entered value' )
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  {
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          /* We catch all these props as otherProps (and label) in form-input */
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
