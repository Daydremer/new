import styles from "../styles/Cart.module.css";
import Image from "next/image";


const Cart = () => {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" layout="fill" alt="" objectFit="cover" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Coralzo</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredients, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                &euro;19.90
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                2
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                &euro;39.80
                            </span>
                        </td>
                    </tr>

                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" layout="fill" alt="" objectFit="cover" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Coralzo</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredients, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                &euro;19.90
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                2
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                &euro;39.80
                            </span>
                        </td>
                    </tr>

                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" layout="fill" alt="" objectFit="cover" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Coralzo</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredients, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                &euro;19.90
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                2
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                &euro;39.80
                            </span>
                        </td>
                    </tr>



                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b> &euro;79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b> &euro;0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b> &euro;79.60
                    </div>
                    <button className={styles.button}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
};


export default Cart;