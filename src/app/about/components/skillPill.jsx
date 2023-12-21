"use client";

import { motion } from "framer-motion";

/**
 * Renders a skill pill component.
 *
 * @param {{name: string, position?: [string, string]}, center?: boolean} props - The props object containing the following properties:
 *   - {string} name: The name of the skill.
 *   - {array} position: The position of the skill pill (optional, defaults to [0, 0]).
 *   - {boolean} center: Whether to center the skill pill (optional, defaults to false).
 * @return {JSX.Element} The rendered skill pill component.
 */
export default function SkillPill({
    name,
    position = ["0", "0"],
    center = false,
}) {
    return center ? (
        <div className="text-center px-3 py-3 rounded-full absolute shadow-dark hover:scale-105 bg-dark text-light dark:bg-light dark:text-dark transition-all duration-300">
            <h3 className="text-sm lg:text-xl  font-semibold">{name}</h3>
        </div>
    ) : (
        <motion.div
            className="text-center px-3 py-3 rounded-full absolute shadow-dark bg-dark text-light dark:bg-light dark:text-dark transition-all duration-300"
            initial={{
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
            }}
            whileInView={{
                top: position[0],
                left: position[1],
            }}
            whileHover={{
                scale: 1.05,
            }}
            // transition={{
            //     duration: 1.5,
            // }}
            viewport={{ once: true }}
        >
            <h3 className="text-sm lg:text-xl font-semibold">{name}</h3>
        </motion.div>
    );
}
