import React, { useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';

function Abt({ cards }) {
  const [activeIndex, setActiveIndex] = useCycle(0, 1, 2);
  const direction = -1; // Set the direction to move from right to left

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, setActiveIndex]);

  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        {cards.map((card, index) => (
          <motion.div
            className="col-md-4 col-lg-3 " // Adjust the column width and spacing based on your layout
            key={index}
            initial={{ x: direction === -1 ? '100%' : '-100%' }}
            animate={{ x: activeIndex === index ? 0 : direction === -1 ? '-100%' : '-200%' }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Abt;
