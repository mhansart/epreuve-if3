import { useEffect, useRef, useState } from 'react';
import menus from '../../data/data';
import { getDateInWord, getMonthInNumber } from '../../functions/functions';
import Button from '../button/Button';

function ModalVote({ visible, handler }) {
  const selectMenuDate = useRef();
  const [modalContent, setModalContent] = useState({ date: '', menu: { entrees: [], plats: [], desserts: [] } });
  const [voted, setVoted] = useState(menus.map((x) => ({ date: x.date, vote: 0 })));
  const menusWithVotes = menus.map((x, i) => ({ ...x, id: i, vote: voted[i].vote }));
  useEffect(() => {
    const menuBase = menusWithVotes.filter((x) => x.date === '18/02/2021');
    setModalContent({ ...menuBase[0] });
  }, []);

  const { entrees, plats, desserts } = modalContent.menu;

  const isVisible = visible ? 'visible' : 'hidden';

  //   tableau pour remplir le select
  const selectDate = menusWithVotes.map((x) => {
    const days = x.date.split('/')[0];
    const month = getDateInWord(x.date.split('/')[1]);
    const year = x.date.split('/')[2];
    return { ...x, date: `${days} ${month} ${year}` };
  });

  selectDate.reverse();

  // fonction pour stocker le vote
  const isVoted = () => {
    const { date } = modalContent;
    const menuVoted = (voted.filter((x) => x.date === date))[0];
    menuVoted.vote++;
    setVoted(voted.filter((x) => x.date !== date));
    setVoted((prev) => [...prev, menuVoted]);
  };
  // fonction pour détecter le changement du select
  const changeDate = (e) => {
    const dateSelect = e.target.value.split(' ');
    const dateInNumber = `${dateSelect[0]}/${getMonthInNumber(dateSelect[1])}/${dateSelect[2]}`;
    const menuSelect = menus.filter((x) => x.date === dateInNumber);
    setModalContent({ ...menuSelect[0] });
  };
  return (
    <div id="overlay" style={{ visibility: isVisible }}>
      <div id="one-modal"><span onClick={handler} className="close-btn"><i className="fa fa-times close" /></span>
        <h4>Votez</h4>
        <select id="select-date" ref={selectMenuDate} onClick={changeDate} className="select-css custom-select">
          { selectDate.map(({ date, id }) => <option key={`${id}-option`} value={date}>{date}</option>)}
        </select>
        <h5>Menu du {modalContent.date}</h5>
        <h5>Entrées:</h5>
        <p>{entrees.join(' OU ')}</p>
        <h5>Plats:</h5>
        <p>{plats.join(' OU ')}</p>
        <h5>Desserts:</h5>
        <p>{desserts.join(' OU ')} </p>
        <Button content="J'en veux encore" handler={isVoted} />
      </div>

    </div>
  );
}

export default ModalVote;
