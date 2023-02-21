const NavButton = ({ text, fn }) => {
  return (
    <button
      onClick={fn}
      rel="noreferrer"
      className="flex items-center justify-center px-3 py-2 ring-1 ring-gray-600 rounded-xl bg-blockBgColor-dark hover:ring-linkBlue"
    >
      {text}
    </button>
  );
};

export default NavButton;
