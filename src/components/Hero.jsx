import { Link } from "react-router-dom";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";


const Hero = () => {
	return (
		<>
			<section className="relative w-full h-screen mx-auto">
				<div
					className={`absolute inset-0 xl:top-[90px]  xs:top-[64px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
				>
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#915eff]" />
						<div className="w-1  sm:h-80 h-40 violet-gradient" />
					</div>
					<div>
						<h1 className={`${styles.heroHeadText} text-white xs:text-[36px] `}>
							Hi, I&#39;m <span className="text-[#915EFF] "> Mohamed Hegazy</span>
						</h1>
						<p className={`${styles.heroSubText} mt-2 text-white-100`}>
							I develop front-end React Apps <br className="sm:block hidden" />
							and back-end Node.js Apps
						</p>
					</div>   
				</div>
				<ComputersCanvas />


        <div className='absolute xl:bottom-32 bottom-24  w-full flex justify-center items-center'>
        <Link to='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </Link>
      </div>
			</section>
		</>
	);
};

export default Hero;
