import "./home.css"
import Docard from './../../components/docard/Docard';
import Mealcard from './../../components/mealcard/Mealcard';
import { meals } from "../../data";


export default function Home(){
    return(
        <div className="home">
            <div className="welcome">
                <div className="text">
                    <div className="tit">Delicious Menus <br/> and Fresh Ingredients for Easy Home Cooking</div>
                    <div className="desc">Explore our enticing menus and fresh ingredients to bring delicious and fresh ingredients to your doorstep!</div>
                </div>
                <div className="pic"><img src="/food1.png" alt="food1" /></div>
            </div>

            <h1>What we offer?</h1>
            <div className="offer">
                <Docard 
                    icon="lemon"
                    title="Centralized Supply" 
                    description="Consistent and reliable ingredient sourcing from a single platform."
                />
                <Docard 
                    icon="basket"
                    title="Flexible Orders" 
                    description="Choose from meal-based or individual ingredient orders to fit your needs."
                />
                <Docard 
                    icon="fruitBowl"
                    title="Recipe & Customization" 
                    description="Get recipe suggestions and customize your ingredients to suit your taste."
                />
                <Docard 
                    icon="coolSpices"
                    title="Convenient Delivery" 
                    description="Enjoy the convenience of doorstep delivery for all your ingredient needs."
                />

            </div>

            <div className="trend">
                <h1>Trending Meals</h1>
                <div className="lis">
                <Mealcard
                key={1}
                id={2}
                image={meals[1].imgSrc}
                title={meals[1].name}
                description={meals[1].description}
              />
                <Mealcard
                key={2}
                id={3}
                image={meals[2].imgSrc}
                title={meals[2].name}
                description={meals[2].description}
              />
                <Mealcard
                key={3}
                id={4}
                image={meals[3].imgSrc}
                title={meals[3].name}
                description={meals[3].description}
              />


                </div>
                <div className="expl">Explore meal</div>

            </div>

            <h1>How to Order?</h1>
            <div className="offer">
            <Docard 
                    icon="burger"
                    title="Choose your favourite meal" 
                    description="You can chose your favourite meal or specific ingredients with specified amount of order"
                />
                <Docard 
                    icon="location"
                    title="Select address and date" 
                    description="You can chose your favourite meal or specific ingredients with specified amount of order"
                />
                <Docard 
                    icon="cook"
                    title="Enjoy your cooking" 
                    description="You can chose your favourite meal or specific ingredients with specified amount of order"
                />
            </div>

        </div>
    )
}