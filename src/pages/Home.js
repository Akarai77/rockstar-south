import Card from "../components/Card.js";
import Slider from "../components/Slider.js";
import useFetch from "../components/useFetch.js";
import Error from "../components/Error.js";
import Button from "../components/Button.js";
import '../styles/Home.css';
import Heading from "../components/Heading.js";
import Card2 from "../components/Card2.js";
import Footer from "../components/Footer.js";

const Home = () => {

    const {data:gameSlides,isPending:pending1,error:err1} = useFetch('http://localhost:8000/slider');
    const {data:cards,isPending:pending2,error:err2} = useFetch("http://localhost:8000/cards");
    const {data:games,isPending:pending3,error:err3} = useFetch("http://localhost:8000/seriesList");
    const slidesCount = useFetch("http://localhost:8000/slides-count");

    return ( 
        <div className="Home up">
            {(err1 || err2 || err3) && <div><Error error_msg={err1} /></div>}
            {gameSlides && slidesCount && <div className="slider"><Slider slides={gameSlides} slidesCount={slidesCount.data}/></div>}
            <div className="heading">
                <Heading content={"I Know You Are Blind...But You Need To See This!"}/>
            </div>
            {
                cards && 
                    <div className="cards-preview">
                        <Card card={cards[0]}/>
                        <Card card={cards[2]}/>
                    </div>
            }
            <div className="view-more">
                <Button content="View More" to={"/Cards"}/>
            </div>
            <div className="heading">
                <Heading id='h2' content={"Oooh Laaa Laaaaaaa!!!!!!!!!!!!!"}/>
            </div>
            {
                games &&
                <div className="cards-preview-2">
                    <Card2 obj={games[0]} reverse={false} link={`Games/GameInfo/`}/>
                    <Card2 obj={games[1]} reverse={true} link={`Games/GameInfo/`}/>
                </div>
            }
            <div className="view-more">
                <Button content="View More" to={"/Games"}/>
            </div>  
            
            <Footer/>
        </div>
     );
}
 
export default Home;