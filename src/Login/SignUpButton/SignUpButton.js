import "./SignUpButton.css";

function SignUpButton({ onClick }) {
  console.log("SignUpButton rendered");
  return (
    <button
      type="button"
      className="btn btn btn-success p-2 m-2 signUp"
      onClick={onClick}
    >
      Sign up
    </button>
  );
}

export default SignUpButton;
