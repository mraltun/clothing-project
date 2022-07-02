import { FormInputLabel, Group, Input } from "./form-input.style";

// Get label directly and spread rest of props (they are made for input) from sign-up component.
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        // If the user entered anything in the "value" (truthy) then add the "shrink" css class
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
