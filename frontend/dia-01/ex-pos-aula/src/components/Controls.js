import readIco from '../icons/read.svg'
import unreadIco from '../icons/unread.svg'

function Controls({ markAllRead, markAllUnread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllRead }
      >
        <img src={readIco} alt=""/>
        Marcar todas como lida
      </button>
      <button
        type="button"
        onClick={ markAllUnread }
      >
        <img src={unreadIco} alt=""/>
        marcar todas como não lida
      </button>
    </div>
  );
};

export default Controls;