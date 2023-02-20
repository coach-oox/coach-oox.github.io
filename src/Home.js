import NavButton from './components/Button/NavButton';
import NavLink from './components/Button/NavLink';
import copyText from './libs/copyText';

const Home = () => {
  return (
    <div className="flex w-full h-screen bg-mainBgColor-light">
      <div className="flex flex-col items-center p-10 md:p-20 bg-mainBgColor-dark text-mainTextColor-dark gap-y-20">
        {/**
         *
         *  Hello World
         *
         */}

        <h1 className="text-4xl font-bold">Hello World!</h1>

        {/**
         *
         *  Profile Image
         *
         */}

        <div className="w-48 h-48 rounded-full shadow-md bg-linkBlue ring-8 ring-deepBlue"></div>

        {/**
         *
         *  Navigation
         *
         */}

        <div className="flex gap-x-3">
          <NavLink text="GitHub" link="https://github.com/dohaelee" />
          <NavLink text="YouTube" link="https://www.youtube.com/@erumcoding" />
          <NavLink
            text="Inflearn"
            link="https://www.inflearn.com/users/@erumcoding"
          />
          <NavButton
            text="Email"
            fn={() =>
              copyText(
                'dev.dohaelee@gmail.com',
                '클립보드에 메일 주소가 복사 되었습니다.',
              )
            }
          />
        </div>

        {/**
         *
         *  Introduce Message
         *
         */}

        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          reprehenderit accusantium tempora molestias consequuntur illo saepe
          alias placeat nesciunt, fugit inventore commodi consequatur sit
          laborum excepturi est consectetur! Eaque molestiae dolore iusto non
          odit amet fugit asperiores tempora fugiat unde accusantium excepturi
          et, dolorum ipsa laborum minima. Tenetur voluptate inventore, veniam
          consectetur ducimus eveniet, maiores atque distinctio, possimus nemo
          modi officia velit. Blanditiis deserunt doloribus aut dicta vitae
          beatae deleniti nobis mollitia, unde, quae, fugiat adipisci veritatis
          itaque! Optio neque corrupti accusantium necessitatibus consequatur
          asperiores unde impedit? Eveniet autem eum exercitationem harum
          commodi, modi rem, necessitatibus culpa sit perferendis nam?
        </div>
      </div>
    </div>
  );
};

export default Home;
