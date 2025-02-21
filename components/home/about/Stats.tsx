import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { MdDevicesOther } from "react-icons/md"
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>My Arsenal </span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">C</span>
            <span className="chip">Python</span>
            <span className="chip">C++</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">NextJs</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <MdDevicesOther size="2.4rem" color="var(--brand)" />
            <span>Others</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Linux</span>
            <span className="chip">Vs Code</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">Vercel</span>
            <span className="chip">Netlify</span>
            <span className="chip">Railway</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
