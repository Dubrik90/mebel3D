import {Header} from "./Compoments/header/header.tsx";
import {Footer} from "./Compoments/footer/Footer.tsx";
import {HomePage} from "./pages/home-page/home-page.tsx";


function App() {


    return (
        <>
            <Header/>
            <main className={'main'}>
                <HomePage/>
            </main>
            <Footer/>
        </>
    )
}

export default App
