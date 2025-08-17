import s from './footer.module.scss'
import {TelegramIcon} from "../../assets/icons/telegram-icon.tsx";
import {InstagramIcon} from "../../assets/icons/instagram-icon.tsx";
import {WhatsappIcon} from "../../assets/icons/whatsapp-icon.tsx";
import {LogoIcon} from "../../assets/icons/Logo-icon.tsx";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Для плавной прокрутки
        });
    };
    return (
        <footer className={s.footer}>
            <div className={'container'}>
                <div className={s.content}>
                    <div className={s.top}>
                        <button onClick={scrollToTop}>
                            <LogoIcon className={'footer-logo'}/>
                        </button>

                        <div className={s.links}>
                            <a target={"_blank"} href="https://t.me/veon_tech">
                                <TelegramIcon/></a>
                            <a target={"_blank"}
                               href="https://www.instagram.com/mebel3d.by/?igsh=bWI0emFlZDk1ODBv">
                                <InstagramIcon/></a>
                            <a target={"_blank"} href="https://api.whatsapp.com/">
                                <WhatsappIcon/></a>
                        </div>
                    </div>
                    <div className={s.bottom}>
                        <div className={s.company}>
                            <p>ООО "Веон-консалт"</p>
                            <p>УНП 193082231</p>
                        </div>
                        <div className={s.company}>
                            <p>
                                <a className={s.contact} href="tel:+375298578855">+375 29 857-88-55</a>
                            </p>
                            <p>
                                <a rel="noreferrer" target={"_blank"} className={s.contact}
                                   href={`mailto:clients@rizoft.ru`}>clients@rizoft.ru
                                </a>
                            </p>
                            <p>г. Минск, ул. Орловская 40А, офис 40-1</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

