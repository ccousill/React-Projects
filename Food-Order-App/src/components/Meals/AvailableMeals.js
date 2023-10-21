import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {
    const [mealData, setMealData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch('https://react-http-cde13-default-rtdb.firebaseio.com/Meals.json')
            console.log(response);
            if (!response.ok) {
                console.log("now here")
                throw new Error("Something is wrong");
            }
            const responseData = await response.json();

            const loadedMeals = []
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMealData(loadedMeals);
            setIsLoading(false);

        }

        fetchMeals().catch((e) => {
            console.log("im here")
            setIsLoading(false);
            setHttpError(e.message);
        });

    }, [])

    if (isLoading) {
        console.log("loading")
        return <section><p>Loading...</p></section>
    }
    if (httpError) {
        return <section><p>Error</p></section>
    }
    const mealsList = mealData.map((item) => {
        return (<MealItem id={item.id} key={item.id} name={item.name} price={item.price} desc={item.description} />)

    })
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>)
}
export default AvailableMeals