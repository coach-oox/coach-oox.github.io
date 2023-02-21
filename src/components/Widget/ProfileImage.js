import MyImage from '../../images/profile.jpg';

const ProfileIamge = () => {
  return (
    <img
      className={`w-48 h-48 md:w-60 md:h-60 rounded-full`}
      src={MyImage}
      alt="Profile"
    />
  );
};

export default ProfileIamge;
