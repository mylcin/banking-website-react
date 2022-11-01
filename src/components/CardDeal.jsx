import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";
import { motion } from "framer-motion";
import { variants } from "../utils/framer";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={"mt-3"} />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        className={layout.sectionImg}
      >
        <img src={card} alt={card} className="w-full h-full" />
      </motion.div>
    </section>
  );
};

export default CardDeal;
