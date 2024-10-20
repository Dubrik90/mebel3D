import s from './home-page.module.scss'
import {MainComponent} from "./components/main-component/Main-component.tsx";
import {Advantages} from "./components/advantages/Advantages.tsx";
import {Slider} from "./components/slider/Slider.tsx";
import ReactPlayer from "react-player";
import {VideoPlayer} from "./components/videoPlayer/VideoPlayer.tsx";
import {AdminPanel} from "./components/adminPanel/AdminPanel.tsx";
import {Feedback} from "./components/feedback/Feedback.tsx";

export const HomePage = () => {
    return (
        <>
            <MainComponent/>
            <Advantages/>
            <Slider/>
            <VideoPlayer
                url='https://www.youtube.com/watch?v=mqZVWvjvyPk&ab_channel=%D0%91%D0%B8-2'
            />
            <AdminPanel/>
            <Feedback/>
        </>

    );
};

