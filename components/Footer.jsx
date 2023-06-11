import styles from "../styles/Footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" objectFit="cover" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card1}>
          <h2 className={styles.motto}>
            Your Best Slice of Pizza ever!
          </h2>
          <h2 className={styles.motto}>
            We here for you.
          </h2>
          <h2 className={styles.motto}>
            Run out of ideas, call us anyway!
          </h2>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Find our restraunts
          </h1>
          <p className={styles.text}>
            Extactly Near YOU.
            <br /> Vilnius, There &#8592;
            <br /> (+370) 00000 000
          </p>
          <p className={styles.text}>
            Somethere over there
            <br /> Alytus, Here or there &#8593; &#8595;
            <br /> (+370) 00000 000
          </p>
          <p className={styles.text}>
            Not actualy here but close
            <br /> Kaunas, over Yonder &#8599;
            <br /> (+370) 00000 000
          </p>
          <p className={styles.text}>
            Random street, the second
            <br /> Klaipeda, maybe here &#8600;
            <br /> (+370) 00000 000
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Working Hours
          </h1>
          <p className={styles.text}>
            Monday until Friday
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            Saturday - Sunday
            <br /> 12:00 - 24:00
          </p>

        </div>
      </div>

    </div>
  )
}

export default Footer;