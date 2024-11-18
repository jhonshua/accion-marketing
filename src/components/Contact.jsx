import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  const handleContactClick = () => {
    navigate('/contactanos');
  };

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden "
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.4,
            },
          },
        }}
        className='flex md:pb-40 mx-4 sm:mx-auto'
      >
         <h3 className="sectionText" onClick={handleContactClick}>
          Contáctanos
        </h3>
        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");