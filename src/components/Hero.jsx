import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import { variants } from "../utils/framer";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        className={`flex-1 ${styles.flexStart} flex-col xl-:px-0 sm:px-16 px-6`}
      >
        {/*discount cointainer*/}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
        {/*hero container*/}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          {/*GetStarted Button*/}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[483px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </motion.div>
      {/*Image side*/}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="max-w-lg w-full h-full self-end relative z-10"
        />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-1 w-[80%] h-[85%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-0 w-[50%] h-[55%] right-20 bottom-20 blue__gradient" />
      </motion.div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
