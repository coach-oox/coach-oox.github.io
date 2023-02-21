import ListLayout from '../../layouts/ListLayout';
import books from '../../common/books';
import WidgetHeader from '../Header/WidgetHeader';
import WidgetLayout from '../../layouts/WidgetLayout';

const Book = () => {
  return (
    <WidgetLayout>
      <WidgetHeader text="Book" />
      <ListLayout>
        {books.map((item) => (
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

export default Book;
