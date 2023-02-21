import WidgetHeader from '../Header/WidgetHeader';
import WidgetLayout from '../../layouts/WidgetLayout';
import WidgetSubHeader from '../Header/WidgetSubHeader';
import contact from '../../common/contact';
import MailBlock from '../Block/MailBlock';

const Contact = () => {
  return (
    <WidgetLayout>
      <WidgetHeader text="Contact" />
      <WidgetSubHeader text="박스를 클릭하면 메일 주소가 클립보드에 복사됩니다." />
      {contact.map((contact) => (
        <MailBlock {...contact} />
      ))}
    </WidgetLayout>
  );
};

export default Contact;
