import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  return (
    <div className={styles.container}>
      {/* left section */}
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt=""
            width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order now</div>
          <div className={styles.text}>012 4587 875</div>
        </div>
      </div>

      {/* middle section */}
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>

          <Image src="/img/pizza-slice-logo.svg" alt=""
            width="60" height="60" />

        </ul>
      </div>
      {/* right section */}
      <Link href="/admin/login">
        <div className={styles.item}>
          <div className={styles.loginIco}>
            <Image src="/img/login.svg" alt=""
              width="30" height="30" />
          </div>
        </div>
      </Link>

      <Link href="/cart" passHref>
        <div className={styles.item}>

          <div className={styles.cart}>
            <Image src="/img/cart.png" alt=""
              width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>

    </div >

  )
};
export default Navbar;