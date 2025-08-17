import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";
import Button from "../button/Button.tsx";

interface ModalProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    onClose: () => void;
    open: boolean;
}

export const Modal: React.FC<ModalProps> = ({ title, description, children, onClose, open }) => {
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.Overlay} />
                <Dialog.Content className={styles.Content}>
                    <Dialog.Title className={styles.Title}>{title}</Dialog.Title>
                    {description && (
                        <Dialog.Description className={styles.Description}>
                            {description}
                        </Dialog.Description>
                    )}
                    <div>{children}</div>
                    <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
                        <Dialog.Close asChild>
                            <button className={`${styles.Button} green`}>Отправить</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className={styles.IconButton} aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
