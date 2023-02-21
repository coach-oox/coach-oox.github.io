import ListLayout from '../../layouts/ListLayout';
import resume from '../../common/resume';
import WidgetHeader from '../Header/WidgetHeader';
import WidgetLayout from '../../layouts/WidgetLayout';

const Job = () => {
  return (
    <WidgetLayout>
      <WidgetHeader text="Job" />
      <ListLayout>
        {resume.map((item) => (
          <div>{item}</div>
        ))}
      </ListLayout>
    </WidgetLayout>
  );
};

export default Job;
