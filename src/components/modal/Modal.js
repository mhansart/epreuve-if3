function Modal({ modalContent, visible, handler }) {
  const isVisible = visible ? 'visible' : 'hidden';
  const { entrees, plats, desserts } = modalContent.menu;
  return (
    <div id="overlay" style={{ visibility: isVisible }}>
      <div id="one-modal"><span onClick={handler} className="close-btn"><i className="fa fa-times close" /></span>
        <h4>Menu du {modalContent.date}</h4>
        <h5>Entrées:</h5>
        <p>{entrees.join(' OU ')}</p>
        <h5>Plats:</h5>
        <p>{plats.join(' OU ')}</p>
        <h5>Desserts:</h5>
        <p>{desserts.join(' OU ')} </p>
        <p>Pour commander via Whatsapp : <span className="bold">06 66 666 666</span></p>
      </div>

    </div>
  );
}

export default Modal;
