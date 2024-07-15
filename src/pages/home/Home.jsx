import "./home.css"
import Docard from './../../components/docard/Docard';
import Mealcard from './../../components/mealcard/Mealcard';

export default function Home(){
    return(
        <div className="home">
            <div className="welcome">
                <div className="text">
                    <div className="tit">Delicious Menus <br/> and Fresh Ingredients for Easy Home Cooking</div>
                    <div className="desc">Explore our enticing menus and fresh ingredients to bring delicious and fresh ingredients to your doorstep!</div>
                </div>
                <div className="pic"><img src="src\assets\food1.png" alt="food1" /></div>
            </div>

            <h1>What we offer?</h1>
            <div className="offer">
                <Docard/>
                <Docard/>
                <Docard/>
            </div>

            <div className="trend">
                <h1>Trending Meals</h1>
                <div className="lis">
                    <Mealcard/>
                    <Mealcard/>
                    <Mealcard/>
                </div>
                <div className="expl">Explore meal</div>

            </div>

            <h1>How to Order?</h1>
            <div className="offer">
                <Docard/>
                <Docard/>
                <Docard/>
                <Docard/>
            </div>

        </div>
    )
}