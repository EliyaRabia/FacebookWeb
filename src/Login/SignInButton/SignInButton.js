import "./SignInButton.css";

function SignInButton({ onClick }) {
  return (
    <button
      type="button"
      className="btn btn-primary p-2 signIn"
      onClick={onClick}
    >
      Sign In
    </button>
  );
}

export default SignInButton;
