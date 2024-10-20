import Button from "../../../../Compoments/button/Button.tsx";
import s from './main-component.module.scss'
import Laptop from '../../../../assets/image/laptop.png'
import {AndroidIcon} from "../../../../assets/icons/Android-icon.tsx";
import {IosIcon} from "../../../../assets/icons/Ios-icon.tsx";
import {WindowsIcon} from "../../../../assets/icons/Windows-icon.tsx";
import {LogoIcon} from "../../../../assets/icons/Logo-icon.tsx";
import {ArrowRight} from "../../../../assets/icons/Arrow-right.tsx";

export const MainComponent = () => {
    return (
        <section className={s.main}>
            <div className={'container'}>
                <div>
                    <div className={s.content}>
                        <div className={s.column}>
                            <h1 className={s.title}>
                                Привлекайте больше клиентов
                                с помощью программы <span><LogoIcon/></span>
                            </h1>
                            <div className={s.btnBlock}>
                                <Button variant={'primary'}>
                                    Свяжитесь с нами
                                </Button>
                                <Button variant={'outlined'}>
                                    Демо-версия
                                </Button>
                            </div>
                            <div className={s.platforms}>
                                <div className={s.platform}>
                                    <AndroidIcon/>
                                    <p>Android</p>
                                </div>
                                <div className={s.platform}>
                                    <IosIcon/>
                                    <p>Ios</p>
                                </div>
                                <div className={s.platform}>
                                    <WindowsIcon/>
                                    <p>Windows</p>
                                </div>
                                <div className={s.platform}>
                                    <IosIcon/>
                                    <p>Mac</p>
                                </div>

                            </div>

                        </div>
                        <div className={s.imgBlock}>
                            <img className={s.img} src={Laptop} alt="laptop"/>
                        </div>
                    </div>
                </div>
                <p className={s.usage}>Посмотри, как использовать <span><LogoIcon/></span>
                    <ArrowRight/>
                </p>

            </div>

        </section>
    );
};

