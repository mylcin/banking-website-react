import { feedbacks } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";
import { variants } from "../utils/framer";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-1/2 rounded-full blue__gradient" />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
      >
        <h2 className={styles.heading2}>
          What people are
          <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-wrap sm:justify-start md:justify-center w-full feedback-container relative z-[1]">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
