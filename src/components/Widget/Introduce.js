const Introduce = () => {
  return (
    <div className="flex flex-col items-center w-full sm:w-[500px]">
      <div>
        작가이자 프리랜서 개발자이며, 프로그래밍 교육가입니다. 오프라인에서는
        주로 초중고 학생들의 JavaScript / C / 파이썬 강의를, 온라인에서는{' '}
        <a
          href="https://www.inflearn.com/users/@erumcoding"
          target={'_blank'}
          rel="noreferrer"
        >
          이룸코딩
        </a>
        이라는 이름으로 웹 개발 강의를 진행하고 있습니다.
      </div>
    </div>
  );
};

export default Introduce;
