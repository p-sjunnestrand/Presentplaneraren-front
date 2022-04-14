import Welcome from './Welcome';

interface Props{
    setView: (view: string) => void,
}

const Landing = (props: Props) => {
    return (
        <>
            <button className="relative w-[131px] border-2 border-detail-sec h-12 mt-36 shadow-button">
                <img src="/img/button-border.svg" alt="" aria-hidden="true" className="absolute top-0" onClick={() => props.setView("login")}/>
                Inloggning
            </button>
            <button className="relative w-[131px] border-2 border-detail-sec h-12 mt-4 shadow-button" onClick={() => props.setView("register")}>
                <img src="/img/button-border.svg" alt="" aria-hidden="true" className="absolute top-0"/>
                Skapa konto
            </button>
            {/* <img src="/img/ballon-trunk-yellow.svg" alt="" className="absolute"/>
            <img src="/img/ballon-trunk-red.svg" alt="" className="absolute"/>
            <img src="/img/ballon-trunk-brown.svg" alt="" className="absolute top-[280px] left-[37px]"/>
            <img src="/img/ballon-tail-brown.svg" alt="" className="absolute top-[183px] left-[265px]"/>
            <img src="/img/ballon-tail-yellow.svg" alt="" className="absolute top-[231px] left-[247px]"/>
            <img src="/img/ballon-tail-red.svg" alt="" className="absolute top-[254px] left-[276px]"/> */}
            {/* <img src="/img/Elephant.png" alt="" className="absolute z-10 top-[361px]"/> */}
             
        </>
    );
};

export default Landing;