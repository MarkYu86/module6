import Avatar from './Avatar';

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export default UserInfo;