const NavButton = ({ text, fn }) => {
  return (
    <button
      onClick={fn}
      rel="noreferrer"
      className="flex items-center justify-center w-24 h-10 ring-1 ring-gray-600 rounded-xl bg-blockBgColor-dark hover:ring-linkBlue"
    >
      {text}
    </button>
  );
};

export default NavButton;
