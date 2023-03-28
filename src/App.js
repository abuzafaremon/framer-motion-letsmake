import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [move, setMove] = useState(false);
  const [rotate, setRotate] = useState(false);
  // const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6]);
  return (
    <div className={`min-h-screen ${move && "bg-slate-800 text-white"}`}>
      <div className="flex justify-end mr-1">
        <motion.div
          animate={{ x: 0, scale: 1 }}
          initial={{ x: -200, scale: 0 }}
          transition={{ duration: 1 }}
          className={`w-20 rounded-full p-1 bg-slate-700 ${
            move && "bg-slate-50"
          } relative`}
        >
          <motion.button
            onClick={() => setMove(!move)}
            animate={{ x: move ? 45 : 0 }}
            className={`bg-white ${
              move && "bg-slate-700"
            } p-2 rounded-full w-7 h-7`}
          ></motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          magnam ullam facere eius delectus unde quos nemo, qui reiciendis
          libero. Dolorem beatae perspiciatis cum repudiandae, labore sapiente
          veritatis nostrum et. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quasi dolores quis eos aperiam? Commodi laboriosam,
          rerum voluptatum repellat molestiae, sapiente sit odio ipsa dolore
          unde consectetur modi dignissimos reiciendis tenetur? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Minus dignissimos cumque
          itaque iusto officiis inventore! Quasi sapiente, cumque distinctio
          laboriosam veniam omnis perferendis obcaecati illum adipisci nesciunt!
          Magnam, eius debitis? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Animi iure, natus quo tenetur error blanditiis
          quidem dolore perferendis ipsa placeat eveniet voluptate esse
          obcaecati tempore, in repudiandae fugiat, aut ullam.
        </p>
      </motion.div>
      <section className="min-h-screen">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p whileHover={{ fontSize: "25px", color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            magnam ullam facere eius delectus unde quos nemo, qui reiciendis
            libero. Dolorem beatae perspiciatis cum repudiandae, labore sapiente
            veritatis nostrum et. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quasi dolores quis eos aperiam? Commodi
            laboriosam, rerum voluptatum repellat molestiae, sapiente sit odio
            ipsa dolore unde consectetur modi dignissimos reiciendis tenetur?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            dignissimos cumque itaque iusto officiis inventore! Quasi sapiente,
            cumque distinctio laboriosam veniam omnis perferendis obcaecati
            illum adipisci nesciunt! Magnam, eius debitis? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Animi iure, natus quo tenetur
            error blanditiis quidem dolore perferendis ipsa placeat eveniet
            voluptate esse obcaecati tempore, in repudiandae fugiat, aut ullam.
          </motion.p>
        </motion.div>
      </section>
      <section className="flex justify-center min-h-screen items-center">
        <motion.div
          animate={{ rotate: rotate ? 360 : 0 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
          initial={{ scale: 1, x: 200 }}
          whileHover={{ scale: 5 }}
          onClick={() => setRotate(!rotate)}
          className="w-14 h-14 bg-slate-400 rounded text-xs"
        >
          <p>Hover Me</p>
          <p>Click Me</p>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
