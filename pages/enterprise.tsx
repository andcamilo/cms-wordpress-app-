import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const variantsH1 = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const variantsP = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};


export default function Index({ allPosts: { edges }, preview }) {

  const { ref: refOne, inView: inViewOne } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refTwo, inView: inViewTwo } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refThree, inView: inViewThree } = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <Layout preview={preview}>
      <div className="w-full pt-[7%] bg-[#161414]">
        <div className="text-center py-8">
            <motion.h1
              className="text-4xl text-[#E7E41E] font-bold uppercase"
              initial="hidden"
              animate="visible"
              variants={variantsH1}
              transition={{ duration: 0.5, type: "spring" }}
            >
             L'entreprise - 
            </motion.h1>
                <motion.p
                className="text-xl text-[#FFFFFF] mt-4"
                initial="hidden"
                animate="visible"
                variants={variantsP}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
              >
              JP Home Concept
            </motion.p>
        </div>
        <div className="flex flex-col md:flex-row py-8 space-y-4 md:space-y-0 md:space-x-6">
              <motion.div 
                className="md:w-1/3"
                initial={{ x: -100, opacity: 0 }} // Start from the left (-100px) and make it invisible initially (opacity: 0)
                animate={{ x: 0, opacity: 1 }} // Animate to its original position and make it fully visible
                transition={{ duration: 0.5 }} // Control the speed of the animation
              >
                  <div className="flex items-center justify-center bg-[#FFFFFF] h-[22%] w-[95%] ml-8">
                      <h2 className="text-2lx font-normal py-1">ENTDECKE UNSERE <br/> SHOWROOM IN INGELDORF</h2>
                  </div>
                              
                <div>
                  <p className="text-[#FFFFFF] ml-8 mt-3">
                  <a className=" text-[#E7E41E]">Das Ingeldorf-Team  </a>mit über 15 Jahren Erfahrung in der Renovierungsbranche hat es sich zur Aufgabe gemacht, die Qualität Ihrer Räume zu verbessern, egal ob es sich um Wohn- oder Geschäftsräume handelt. Wir sind stolz darauf, Ihnen zuzuhören und jedes Projekt perfekt zu beraten.
                  </p>
                </div>
              
                <div>
                  <p className="text-[#FFFFFF] ml-8 mt-2">
                  <a className=" text-[#E7E41E]">Das Ingeldorf-Team  </a>mit über 15 Jahren Erfahrung in der Renovierungsbranche hat es sich zur Aufgabe gemacht, die Qualität Ihrer Räume zu verbessern, egal ob es sich um Wohn- oder Geschäftsräume handelt. Wir sind stolz darauf, Ihnen zuzuhören und jedes Projekt perfekt zu beraten.
                  </p>
                </div>
              </motion.div>


              <motion.div 
                className="md:w-1/3"
                initial={{ y: 100, opacity: 0 }} // Start from below (+100px) and make it invisible initially (opacity: 0)
                animate={{ y: 0, opacity: 1 }} // Animate to its original position and make it fully visible
                transition={{ duration: 0.5 }} 
              >
                <img src="/image/home.svg" alt="Home" />

              </motion.div>

              <motion.div 
                className="md:w-1/3"
                initial={{ x: 100, opacity: 0 }} // Start from the right (+100px) and make it invisible initially (opacity: 0)
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }} // Control the speed of the animation
              >

                <div className="flex items-center justify-center border border-[#FFFFFF] h-[22%] w-[97%] ">
                      <h2 className="text-2xl text-[#FFFFFF] font-normal mb-3">15 JAHRE <br/> VON ERFAHRUNG</h2>
                </div>

                <div>
                  <p className="text-[#FFFFFF] text-s mt-3">
                  <a className=" text-[#E7E41E]"> Badezimmer-Innovation: </a>Lassen Sie sich von unseren neuesten Badezimmer-Designs und revolutionären Sanitär-Ideen inspirieren.
                </p>

                </div>      

              </motion.div >
        </div>

        <div className="flex flex-col md:flex-row py-8 space-y-4 md:space-y-0 md:space-x-6" id="second" >
              <motion.div 
                ref={refOne}
                className="md:w-1/3"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: inViewOne ? 0 : -100, opacity: inViewOne ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                  <div className="flex items-center justify-center bg-[#FFFFFF] h-[22%] w-[95%] ml-8">
                      <h2 className="text-2lx font-normal py-1">ENTDECKE UNSERE <br/> SHOWROOM IN INGELDORF</h2>
                  </div>
                              
                <div>
                  <p className="text-[#FFFFFF] ml-8 mt-3">
                  <a className=" text-[#E7E41E]">Das Ingeldorf-Team  </a>mit über 15 Jahren Erfahrung in der Renovierungsbranche hat es sich zur Aufgabe gemacht, die Qualität Ihrer Räume zu verbessern, egal ob es sich um Wohn- oder Geschäftsräume handelt. Wir sind stolz darauf, Ihnen zuzuhören und jedes Projekt perfekt zu beraten.
                  </p>
                </div>
              
                <div>
                  <p className="text-[#FFFFFF] ml-8 mt-2">
                  <a className=" text-[#E7E41E]">Das Ingeldorf-Team  </a>mit über 15 Jahren Erfahrung in der Renovierungsbranche hat es sich zur Aufgabe gemacht, die Qualität Ihrer Räume zu verbessern, egal ob es sich um Wohn- oder Geschäftsräume handelt. Wir sind stolz darauf, Ihnen zuzuhören und jedes Projekt perfekt zu beraten.
                  </p>
                </div>
              </motion.div>


              <motion.div 
                ref={refTwo}
                className="md:w-1/3"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: inViewTwo ? 0 : 100, opacity: inViewTwo ? 1 : 0 }}
                transition={{ duration: 0.5 }} 
              >
                <img src="/image/home.svg" alt="Home" />

              </motion.div>

              <motion.div 
                ref={refThree}
                className="md:w-1/3"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: inViewThree ? 0 : 100, opacity: inViewThree ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="flex items-center justify-center border border-[#FFFFFF] h-[22%] w-[97%] ">
                      <h2 className="text-2xl text-[#FFFFFF] font-normal mb-3">15 JAHRE <br/> VON ERFAHRUNG</h2>
                </div>

                <div>
                  <p className="text-[#FFFFFF] text-s mt-3">
                  <a className=" text-[#E7E41E]"> Badezimmer-Innovation: </a>Lassen Sie sich von unseren neuesten Badezimmer-Designs und revolutionären Sanitär-Ideen inspirieren.
                </p>

                </div>      

              </motion.div >
        </div>


      </div>

      
      
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
