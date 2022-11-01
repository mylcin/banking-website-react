import { clients } from "../constants";
import styles from "../styles";
import { motion } from "framer-motion";
import { variants } from "../utils/framer";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        className={`${styles.flexCenter} flex-wrap w-full`}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt={client.logo}
              className="client sm:w-48 w-[100px] object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Clients;
