function ModalImage({ visible, handler, content }) {
  const isVisible = visible ? 'visible' : 'hidden';
  return (
    <div id="overlay" style={{ visibility: isVisible }}>
      <div id="one-modal">
        <span onClick={handler} className="close-btn"><i className="fa fa-times close" /></span>
        <img src={content} alt={`menu numéro ${content.slice(4, 5)}`} />
      </div>

    </div>
  );
}

export default ModalImage;
