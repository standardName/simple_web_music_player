"use client";
import styles from "@/app/styles/Modal.module.css";
import { useRouter } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CloseModal = () => {
  const router = useRouter();
  return (
    <button className={styles["close-modal-btn"]} onClick={() => router.back()}>
      <IoIosCloseCircleOutline />
    </button>
  );
};

export default CloseModal;
