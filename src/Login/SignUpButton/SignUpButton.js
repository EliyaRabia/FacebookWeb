import "./SignUpButton.css";

function SignUpButton({ onClick }) {
  return (
    <button
      data-testid="LoginSignUpButton"
      type="button"
      className="btn btn btn-success p-2 m-2 signUp"
      onClick={onClick}
    >
      Sign up
    </button>
  );
}

export default SignUpButton;
