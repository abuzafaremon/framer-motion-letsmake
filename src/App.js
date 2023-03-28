import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [move, setMove] = useState(false);
  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        move && "bg-slate-800"
      }`}
    >
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 200 }}
        className={`w-20 rounded-full p-1 bg-slate-700 ${
          move && "bg-slate-50"
        } relative`}
      >
        <motion.button
          onClick={() => setMove(!move)}
          animate={{ x: move ? 45 : 0 }}
          initial={{}}
          className={`bg-white ${
            move && "bg-slate-700"
          } p-2 rounded-full w-7 h-7`}
        ></motion.button>
      </motion.div>
    </div>
  );
}

export default App;
