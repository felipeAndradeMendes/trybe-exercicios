import { READ, UNREAD } from '../constants';
import readIcon from '../icons/read.svg'
import unreadIcon from '../icons/unread.svg'

function List({messages, handleClick}) {
  return(
    <ul className="messages-list">
      {messages.map((message) => {
        const messageClass = message.status === READ 
        ? "message-unread"
        : "message-read"

        return(
          <li key={ message.id }>
            <p className={ messageClass }>
              { message.title }
            </p>
            <button
              type="button"
              title="read"
              name={ message.id }
              onClick={ (e) => handleClick(message.id, READ) }
            >
              <img src={ readIcon } alt="" />
            </button>
            <button
              type="button"
              title="read"
              name={ message.id }
              onClick={ (e) => handleClick(message.id, UNREAD) }
            >
              <img src={ unreadIcon } alt="" />
              
            </button>
          </li>
        ) 
      })}
    </ul>
  );
};

export default List;