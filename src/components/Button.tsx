interface ButtonProps {
  text: string;
  type: string;
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button
      className={`btn btn-${type}`}
      onClick={(event) => alert("You clicked me!")}
    >
      {text}
    </button>
  );
};

export default Button;
