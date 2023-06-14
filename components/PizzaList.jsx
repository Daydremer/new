import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"


const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The BEST Pizza</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nisi eaque omnis veritatis delectus saepe at possimus, eligendi provident? Dignissimos perferendis similique, laudantium molestias non quod ad. Quasi, dolorem nulla.
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza = {pizza} />
                ))}
            </div>
        </div>
    )
};

export default PizzaList;