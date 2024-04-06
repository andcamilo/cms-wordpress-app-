import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import { useEffect, useState } from "react"



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
      <div className="w-full pt-[2%] bg-[#161414]">
        {/* Title Section */}
        <div className="text-center py-8">
            <motion.img
              initial="hidden"
              animate="visible"
              src="/image/video.svg"
              variants={variantsH1}
              transition={{ duration: 0.5, type: "spring" }}
            />
        </div>
        <div className="flex flex-col md:flex-row py-8 space-y-4 md:space-y-0 md:space-x-6">
              <motion.div 
                className="md:w-1/3"
                initial={{ x: -100, opacity: 0 }} // Start from the left (-100px) and make it invisible initially (opacity: 0)
                animate={{ x: 0, opacity: 1 }} // Animate to its original position and make it fully visible
                transition={{ duration: 0.5 }} // Control the speed of the animation
              >
                <motion.h1
                  className="text-6xl text-[#E7E41E] font-semibold uppercase ml-[28%]"
                  initial="hidden"
                  animate="visible"
                  variants={variantsH1}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                 WER WIR SIND -
                </motion.h1>
                <motion.p
                className="text-6xl text-[#FFFFFF] ml-[10%]"
                initial="hidden"
                animate="visible"
                variants={variantsP}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
                >
                  JP HOME CONCEPT
                </motion.p> 

                <motion.p
                className="text-md text-[#FFFFFF] mt-8 ml-[10%] w-[90%]"
                initial="hidden"
                animate="visible"
                variants={variantsP}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
                >
                  Das Ingeldorf-Team mit über 15 Jahren Erfahrung in der Renovierungsbranche hat es sich zur Aufgabe gemacht, die Qualität Ihrer Räume zu verbessern, egal ob es sich um Wohn- oder Geschäftsräume handelt. Wir sind stolz darauf, zuzuhören und jedes Projekt perfekt zu beraten. bis zur Perfektion.
                </motion.p> 
                
              </motion.div>


              <motion.div 
                className="md:w-1/5"
                initial={{ y: 100, opacity: 0 }} // Start from below (+100px) and make it invisible initially (opacity: 0)
                animate={{ y: 0, opacity: 1 }} // Animate to its original position and make it fully visible
                transition={{ duration: 0.5 }} 
              >
              </motion.div>

              <motion.div 
                className="md:w-1/3"
                initial={{ x: 100, opacity: 0 }} // Start from the right (+100px) and make it invisible initially (opacity: 0)
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }} // Control the speed of the animation
              >
                <div className="grid grid-cols-2 gap-2">

                  <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundImage: 'linear-gradient(to right, black 85%, #333 100%)' }}
                    className="flex items-left justify-left border border-0.5 border-gray-800 p-2 w-full"
                  >
      
                      <div className="flex flex-col justify-between h-full p-2">
                        <h2 className="text-3xl text-white font-semibold mb-[40%]">468</h2>
                        <p className="text-xs text-white mt-auto">Maßgeschneidertes Projekt</p>
                      </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundImage: 'linear-gradient(to right, black 85%, #333 100%)' }}
                    className="flex items-left justify-left border border-0.5 border-gray-800 p-2 w-full">
                      <div className="flex flex-col justify-between h-full p-2">
                        <h2 className="text-3xl text-white font-semibold mb-[40%]">1855</h2>
                        <p className="text-xs text-white mt-auto">Zufriedene Kunden</p>
                      </div>
         
                  </motion.div>

                  <motion.div 
                    initial={{ y: 100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundImage: 'linear-gradient(to right, black 90%, #333 100%)' }}
                    className="flex items-left justify-left border border-0.5 border-gray-800 p-2 col-span-2">
                      <div className="flex flex-col justify-between h-full p-2">
                        <h2 className="text-3xl text-white font-semibold mb-[40%]">3468</h2>
                        <p className="text-xs text-white mt-auto">Arbeitsstunden</p>
                      </div>
         
                  </motion.div>



                  <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundImage: 'linear-gradient(to right, black 85%, #333 100%)' }}
                    className="flex items-left justify-left border border-0.5 border-gray-800 p-2 w-full"
                  >
      
                      <div className="flex flex-col justify-between h-full p-2">
                        <h2 className="text-3xl text-white font-semibold mb-[40%]">15</h2>
                        <p className="text-xs text-white mt-auto">Jahre Erfahrung</p>
                      </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundImage: 'linear-gradient(to right, black 85%, #333 100%)' }}
                    className="flex items-left justify-left border border-0.5 border-gray-800 p-2 w-full">
                      <div className="flex flex-col justify-between h-full p-2">
                        <h2 className="text-3xl text-white font-semibold mb-[40%]">98%</h2>
                        <p className="text-xs text-white mt-auto">Zufriedene Kunden</p>
                      </div>
         
                  </motion.div>

                </div>


              </motion.div >
        </div>

        {/* <div className="flex justify-center items-center py-8" id="second">
          <Carousel 
            showArrows={true} 
            autoPlay={false} 
            showStatus={false} 
            showIndicators={false} 
            showThumbs={false} 
            infiniteLoop={true}
            swipeable={true}
            emulateTouch={true}
            className="custom-carousel"
            renderItem={(item, props) => <div className="carousel-item">{item}</div>} // custom renderItem
          >
            <div className="grid grid-flow-col auto-cols-max gap-4">
              <img src="/image/home.svg" alt="Logo 1" className="h-12" />
              <img src="/image/home.svg" alt="Logo 2" className="h-12" />
              <img src="/image/home.svg" alt="Logo 3" className="h-12" />
              <img src="/image/home.svg" alt="Logo 4" className="h-12" />
              <img src="/image/home.svg" alt="Logo 5" className="h-12" />
            </div>
          </Carousel>
        </div> */}

        <div className="flex flex-col md:flex-row py-8 space-y-4 md:space-y-0 md:space-x-6">
              <motion.div 
                className="md:w-1/2"
                initial={{ x: -100, opacity: 0 }} // Start from the left (-100px) and make it invisible initially (opacity: 0)
                animate={{ x: 0, opacity: 1 }} // Animate to its original position and make it fully visible
                transition={{ duration: 0.5 }} // Control the speed of the animation
              >
                <motion.h1
                  className="text-6xl text-[#E7E41E] font-semibold uppercase ml-[28%]"
                  initial="hidden"
                  animate="visible"
                  variants={variantsH1}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  ENTDECKEND -
                </motion.h1>
                <motion.p
                className="text-6xl text-[#FFFFFF] uppercase ml-[10%]"
                initial="hidden"
                animate="visible"
                variants={variantsP}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
                >
                  unsere Dienstleistungen
                </motion.p> 

                <motion.p
                className="text-md text-[#FFFFFF] mt-8 ml-[10%] w-[90%]"
                initial="hidden"
                animate="visible"
                variants={variantsP}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
                >
                  Das Ingeldorf-Team mit über 15 Jahren Erfahrung in der Renovierungsbranche hat es sich zur Aufgabe gemacht, die Qualität Ihrer Räume zu verbessern, egal ob es sich um Wohn- oder Geschäftsräume handelt. Wir sind stolz darauf, zuzuhören und jedes Projekt perfekt zu beraten. bis zur Perfektion.
                </motion.p> 
                
              </motion.div>

        </div>


        <div className="flex flex-col md:flex-row py-8 space-y-4 md:space-y-0 md:space-x-6" id="second" >
              <motion.div 
                ref={refOne}
                className="md:w-1/3"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: inViewOne ? 0 : -100, opacity: inViewOne ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                  <div className="flex items-center justify-center bg-[#FFFFFF] h-[22%] w-[95%] ml-[5%]">
                      <h2 className="text-2lx font-normal py-1">ENTDECKE UNSERE <br/> SHOWROOM IN INGELDORF</h2>
                  </div>
                              
                <div>
                  <p className="text-[#FFFFFF] ml-[5%] mt-3">
                  <a className=" text-[#E7E41E]">Das Ingeldorf-Team  </a>mit über 15 Jahren Erfahrung in der Renovierungsbranche hat es sich zur Aufgabe gemacht, die Qualität Ihrer Räume zu verbessern, egal ob es sich um Wohn- oder Geschäftsräume handelt. Wir sind stolz darauf, Ihnen zuzuhören und jedes Projekt perfekt zu beraten.
                  </p>
                </div>
              
                <div>
                  <p className="text-[#FFFFFF] ml-[5%] mt-2">
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
