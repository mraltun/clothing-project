import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

// We can import this along with Button below and use it as prop inside Button component like "<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />"
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

// If you don't specify the type it's base by default. We return an object with all the component names from styled components and match it with passed method (if the method is .inverted, we render "InvertedButton" from styled)
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
