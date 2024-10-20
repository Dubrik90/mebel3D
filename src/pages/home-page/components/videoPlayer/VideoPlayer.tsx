import ReactPlayer from 'react-player';
import s from './videoPlayer.module.scss'

export const VideoPlayer = ({url}) => (
    <section className={s.video}>
        <div className={'container'}>
            <div className={s.content}>
                <ReactPlayer
                    url={url}
                    config={{
                        youtube: {
                            playerVars: { origin: window.location.origin }
                        }
                    }}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    </section>

);

