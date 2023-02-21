import ListLayout from '../../layouts/ListLayout';
import lectures from '../../common/lectures';
import WidgetHeader from '../Header/WidgetHeader';
import WidgetLayout from '../../layouts/WidgetLayout';

const Lecture = () => {
  return (
    <WidgetLayout>
      <WidgetHeader text="Lecture" />
      <ListLayout>
        {lectures.map((item) => (
          <div>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </div>
        ))}
      </ListLayout>
    </WidgetLayout>
  );
};

export default Lecture;
