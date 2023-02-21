import WidgetHeader from '../Header/WidgetHeader';
import WidgetLayout from '../../layouts/WidgetLayout';
import skills from '../../common/skills';

const Skill = () => {
  return (
    <WidgetLayout>
      <WidgetHeader text="Skill" />
      <div className="grid grid-cols-5 gap-5">
        {skills.map((skill) => (
          <div className="flex justify-center">{skill.name}</div>
        ))}
      </div>
    </WidgetLayout>
  );
};

export default Skill;
