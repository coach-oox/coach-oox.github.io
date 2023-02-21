const GradientText = ({ text }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue to-gradientPurple">
      {text}
    </span>
  );
};

export default GradientText;
