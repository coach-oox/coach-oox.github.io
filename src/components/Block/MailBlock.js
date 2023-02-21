import copyText from '../../libs/copyText';

const MailBlock = ({ text, mail }) => {
  return (
    <div
      onClick={() => copyText(mail)}
      className="flex flex-col items-center w-3/4 p-5 border-l-8 border-gray-600 shadow-lg lg:w-5/12 bg-blockBgColor-dark hover:border-linkBlue"
    >
      <h4 className="font-bold">{text}</h4>
      <div>{mail}</div>
    </div>
  );
};

export default MailBlock;
