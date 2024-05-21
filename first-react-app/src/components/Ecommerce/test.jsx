

const [isModalVisible, setIsModalVisible] = useState(false);
const [modalImageSrc, setModalImageSrc] = useState("");


  // MODAL FUNCTIONS -------------------------------------------

  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalImageSrc("");
  };

  const handleThumbnailClick = (imageSrc) => {
    setModalImageSrc(imageSrc);
  };



  <Modal
  isVisible={isModalVisible}
  imageSrc={modalImageSrc}
  onClose={closeModal}
  onThumbnailClick={handleThumbnailClick}
/>