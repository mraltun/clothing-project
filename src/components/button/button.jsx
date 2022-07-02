import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

// These are class names from the scss
const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    // If you add a button and use "buttonType='css_class'" prop you can change this button's style.
    <CustomButton {...otherProps}>{children}</CustomButton>
  );
};

export default Button;
