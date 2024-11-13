import styles from "../styles/Modal.module.css";
import CloseModal from "./_subcomponents/CloseModal";
const Modal = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <CloseModal />
        {children}
      </div>
    </div>
  );
};

export default Modal;
