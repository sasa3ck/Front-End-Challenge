import { useEffect, useState } from "react";
import "./App.css";
import * as keys from "./utils/index";

const KEY_STATE = {
  DEFAULT: "default",
  PRESSED: "pressed",
  RELEASED: "released",
};

function App() {
  const [pressedKeys, setPressedKeys] = useState({});
  const [repeatingKeys, setRepeatingKeys] = useState([]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      setPressedKeys({});
      setRepeatingKeys([]);
      setTimer(60);
    }
    return () => clearInterval(interval);
  }, [timer]);


  const handleKeyDown = (key) => {
    setPressedKeys((prevState) => ({
      ...prevState,
      [key]: KEY_STATE.PRESSED,
    }));
    setTimeout(() => {
      setPressedKeys((prevState) => ({
        ...prevState,
        [key]: KEY_STATE.RELEASED,
      }));
    }, 3000);
  };

  const handleKeyUp = (key) => {
    setPressedKeys((prevState) => ({
      ...prevState,
      [key]: KEY_STATE.PRESSED,
    }));
    setRepeatingKeys((prevState) => [...prevState, key]);
  };

  const clickKeyDown = (e) => handleKeyDown(e.key);
  const clickKeyUp = (e) => handleKeyUp(e.key);

  useEffect(() => {
    window.addEventListener("keydown", clickKeyDown);
    window.addEventListener("keyup", clickKeyUp);

    return () => {
      window.removeEventListener("keydown", clickKeyDown);
      window.removeEventListener("keyup", clickKeyUp);
    };
  }, []);

  return (
    <div className="container mx-auto mt-[400px] px-4">
      <div className="flex justify-around mb-10">
        <div className="timer flex justify-center items-center">
          {/* {timer > 0 ? `Reset in ${timer}s` : "Keys Reset"} */}
          Reset in: {timer}s
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <div className="row flex">
            {keys.KEYBOARD_KEYS_ONE.map((key) => (
              <button
                key={key.id}
                className={`key ${pressedKeys[key.id] || KEY_STATE.DEFAULT} ${
                  key.style
                }`}
                onMouseDown={() => handleKeyDown(key.id)}
                onMouseUp={() => handleKeyUp(key.id)}
              >
                {key.id}
              </button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_TWO.map((key) => (
              <button
                key={key.id}
                className={`key ${pressedKeys[key.id] || KEY_STATE.DEFAULT}`}
                onMouseDown={() => handleKeyDown(key.id)}
                onMouseUp={() => handleKeyUp(key.id)}
              >
                {key.id}
              </button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_THREE.map((key) => (
              <button
                key={key.id}
                className={`key ${pressedKeys[key.id] || KEY_STATE.DEFAULT} ${
                  key.style
                }`}
                onMouseDown={() => handleKeyDown(key.id)}
                onMouseUp={() => handleKeyUp(key.id)}
              >
                {key.id}
              </button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_FOUR.map((key) => (
              <button
                key={key.id}
                className={`key ${pressedKeys[key.id] || KEY_STATE.DEFAULT}`}
                onMouseDown={() => handleKeyDown(key.id)}
                onMouseUp={() => handleKeyUp(key.id)}
              >
                {key.id}
              </button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_FIVE.map((key) => (
              <button
                key={key.id}
                className={`key ${pressedKeys[key.id] || KEY_STATE.DEFAULT}`}
                onMouseDown={() => handleKeyDown(key.id)}
                onMouseUp={() => handleKeyUp(key.id)}
              >
                {key.id}
              </button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_SIX.map((key) => (
              <button
                key={key.id}
                className={`key ${pressedKeys[key.id] || KEY_STATE.DEFAULT} ${
                  key.style
                }`}
                onMouseDown={() => handleKeyDown(key.id)}
                onMouseUp={() => handleKeyUp(key.id)}
              >
                {key.id}
              </button>
            ))}
          </div>
        </div>
        <div className="ml-7 grid grid-cols-3">
          {keys.KEYBOARD_KEYS_SEVEN.map((key) => (
            <button
              key={key.id}
              className={`key ${pressedKeys[key.id] || KEY_STATE.DEFAULT} ${
                key.style
              }`}
              onMouseDown={() => handleKeyDown(key.id)}
              onMouseUp={() => handleKeyUp(key.id)}
            >
              {key.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
