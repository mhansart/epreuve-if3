import './styles/style.scss';
import { useState } from 'react';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Carrousel from './components/carrousel/Carrousel';
import Footer from './components/footer/Footer';
import menus from './data/data';
import Modal from './components/modal/Modal';
import { today } from './functions/functions';
import ModalVote from './components/modalVote/ModalVote';
import ModalImage from './components/modalImage/ModalImage';

function App() {
  const [modalContent, setModalContent] = useState({
    date: '', menu: { entrees: [], plats: [], desserts: [] },
  });
  const [modalImageSrc, setModalImageSrc] = useState('img/1.jpg');
  const [openModal, setOpenModal] = useState(false);
  const [openModalVote, setOpenModalVote] = useState(false);
  const [openModalImage, setOpenModalImage] = useState(false);
  const toggleModal = (e) => {
    setOpenModal(!openModal);
    e.preventDefault();
    const menuToday = menus.filter((x) => x.date === today());
    setModalContent({ ...menuToday[0] });
  };
  const toggleModalVote = (e) => {
    setOpenModalVote(!openModalVote);
    e.preventDefault();
  };
  const toggleModalImage = (e) => {
    if (e.target.getAttribute('src') !== null) {
      const newSrc = e.target.getAttribute('src');
      setModalImageSrc(newSrc);
    }
    setOpenModalImage(!openModalImage);
  };
  return (
    <div className="App">
      <ModalImage handler={toggleModalImage} visible={openModalImage} content={modalImageSrc} />
      <ModalVote visible={openModalVote} handler={toggleModalVote} />
      <Modal modalContent={modalContent} visible={openModal} handler={toggleModal} />
      <Header />
      <div className="main-container">
        <Section1 handler={toggleModal} />
        <Section2 handler={toggleModalVote} />
        <Carrousel handler={toggleModalImage} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
