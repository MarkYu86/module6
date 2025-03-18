import UserInfo from './UserInfo';
import FormattedDate from './FormattedDate';

export function ComplexComment(props) {
    const { author, text, date } = props;
  
    return (
      <div className="Comment componentBox">
        {/* Pass the author prop to UserInfo component */}
        <UserInfo user={author} />
        <div className="Comment-text">{text}</div>
        {/* Pass the date prop to FormattedDate component */}
        <FormattedDate date={date} />
      </div>
    );
  }
