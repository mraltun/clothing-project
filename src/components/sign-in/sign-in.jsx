import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-in.scss";

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
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // We already destructed email and password from formFields state. They are up to date values.
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      console.log("Error when creating user", error.message);
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

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* We catch all these props as otherProps (and label) in form-input */}

        <FormInput
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

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle} type='submit'>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;