import GradientText from '../Text/GradientText';

const Greeting = () => {
  return (
    <div className="flex flex-col items-center text-4xl font-bold gap-y-3">
      <div>안녕하세요!</div>
      <div>책 쓰고 강의하는 개발자,</div>
      <div>
        <GradientText text="이도해 (@이룸코딩)" />
        입니다.
      </div>
    </div>
  );
};

export default Greeting;
