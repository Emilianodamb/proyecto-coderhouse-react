import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Events.module.css";

const Events = () => {
    const [inputName, setInputName] = useState("");
    const [inputDni, setInputDni] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const modalRef = useRef(null);
    const openButtonRef = useRef(null);

    useEffect(() => {
        const handleEscapeModal = (e) => {
            if (e.key === "Escape") {
                setModalVisible(false);
            }
        };

        window.addEventListener("keydown", handleEscapeModal);
        return () => {
            window.removeEventListener("keydown", handleEscapeModal);
        };
    }, []);

    useEffect(() => {
        if (modalVisible) {
            modalRef.current?.focus();
        } else {
            openButtonRef.current?.focus();
        }
    }, [modalVisible]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputName);
        setInputName("");
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <div>
                <h1>Events</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Nombre..."
                        type="text"
                        alt="name-input"
                        value={inputName}
                        onChange={(event) => setInputName(event.target.value)}
                    />
                    <input
                        placeholder="DNI..."
                        type="number"
                        alt="dni-input"
                        value={inputDni}
                        onChange={(event) => setInputDni(event.target.value)}
                    />
                    <button type="submit">Click me!</button>
                </form>
                <button onClick={() => setModalVisible(true)} ref={openButtonRef}>
                    Open modal
                </button>
            </div>

            {modalVisible && (
                <div
                    className={styles.modalContainer}
                    onClick={handleOutsideClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className={styles.modal}
                        ref={modalRef}
                        tabIndex="-1" // Hace que el modal sea enfocable
                    >
                        <h1 id="modal-title">Modal content</h1>
                        <button onClick={closeModal}>Close modal</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Events;
