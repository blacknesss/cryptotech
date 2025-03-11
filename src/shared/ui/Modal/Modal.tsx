import styles from './Modal.module.scss';

const Modal = ({
    active,
    setActive,
    children,
}: {
    active: boolean;
    setActive: (prop: boolean) => void;
    children?: React.ReactNode;
}) => {
    return (
        <div
            onClick={() => setActive(false)}
            className={active ? `${styles.modal} ${styles.active}` : styles.modal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={active ? `${styles.modal__inner} ${styles.active}` : styles.modal__inner}
            >
                {children}
            </div>
        </div>
    );
};

export { Modal };