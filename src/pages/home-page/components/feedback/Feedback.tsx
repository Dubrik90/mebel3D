import s from './feedback.module.scss'
import Button from "../../../../Compoments/button/Button.tsx";
import {Modal} from "../../../../Compoments/modal/Modal.tsx";
import {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "../../../../Compoments/modal/styles.module.scss";
import {Cross2Icon} from "@radix-ui/react-icons";


export const Feedback = () => {
    const [open, setOpen] = useState(false)

    return (
        <section className={s.feedback}>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <div className={'container'}>
                        <div className={s.content}>
                            <p className={s.title}>Давайте поговорим о продукте</p>
                            <Button variant={'primary'}
                                    onClick={() => {
                                        setOpen(true)
                                    }}
                            >
                                Свяжитесь с нами
                            </Button>
                        </div>
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={styles.Overlay}/>
                    <Dialog.Content className={styles.Content}>
                        <Dialog.Title className={styles.Title}>Edit profile</Dialog.Title>
                        <Dialog.Description className={styles.Description}>
                            Make changes to your profile here. Click save when you're done.
                        </Dialog.Description>
                        <fieldset className={styles.Fieldset}>
                            <label className={styles.Label} htmlFor="name">
                                Name
                            </label>
                            <input
                                className={styles.Input}
                                id="name"
                                defaultValue="Pedro Duarte"
                            />
                        </fieldset>
                        <fieldset className={styles.Fieldset}>
                            <label className={styles.Label} htmlFor="username">
                                Username
                            </label>
                            <input
                                className={styles.Input}
                                id="username"
                                defaultValue="@peduarte"
                            />
                        </fieldset>
                        <div
                            style={{display: "flex", marginTop: 25, justifyContent: "flex-end"}}
                        >
                            <Dialog.Close asChild>
                                <button className={`${styles.Button} green`}>Save changes</button>
                            </Dialog.Close>
                        </div>
                        <Dialog.Close asChild>
                            <button className={styles.IconButton} aria-label="Close">
                                <Cross2Icon/>
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>


            {/*<Modal open={open}/>*/}

        </section>
    );
};

