import "./form-input.scss";

// Get label directly and spread rest of props (they are made for input) from sign-up component.
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        // If the user entered anything in the "value" then add the "shrink" css class
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
