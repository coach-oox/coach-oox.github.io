import Navigation from './components/Widget/Navigation';
import Greeting from './components/Widget/Greeting';
import ProfileIamge from './components/Widget/ProfileImage';
import Introduce from './components/Widget/Introduce';
import Job from './components/Widget/Job';
import Book from './components/Widget/Book';
import Lecture from './components/Widget/Lecture';
import Contact from './components/Widget/Contact';

const Home = () => {
  return (
    <div className="flex w-full bg-mainBgColor-light">
      <div className="flex flex-col items-center w-full py-20 bg-mainBgColor-dark text-mainTextColor-dark ">
        <div className="flex flex-col items-center w-5/6 md:w-4/6 gap-y-20">
          <Greeting />
          <ProfileIamge />
          <Navigation />
          <Introduce />
          <Job />
          <Book />
          <Lecture />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
