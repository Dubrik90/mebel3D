import {MainComponent} from "./components/main-component/Main-component.tsx";
import {Advantages} from "./components/advantages/Advantages.tsx";
import {Slider} from "./components/slider/Slider.tsx";
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
                url='https://www.youtube.com/watch?v=1H65t-qjsKs&ab_channel=VEON-TECHA.r.'
            />
            <AdminPanel/>
            <Feedback/>
        </>

    );
};

