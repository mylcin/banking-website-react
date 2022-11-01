import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";
import { motion } from "framer-motion";
import { variants } from "../utils/framer";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        className={layout.sectionImgReverse}
      >
        <img src={bill} alt={bill} className="h-full w-full relative z-10" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
          <img
            src={apple}
            alt={apple}
            className="w-32 h-[42px] mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt={google}
            className="w-32 h-[42px] cursor-pointer"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Billing;
