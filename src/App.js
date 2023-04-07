import "./App.css";
import * as keys from "./utils/index";

function App() {
  return (
    <div className="container mx-auto mt-[400px] px-4">
      <div className="flex justify-center">
        <div>
          <div className="row flex">
            {keys.KEYBOARD_KEYS_ONE.map((key) => (
              <button key={key.id} className={` ${key.style}`}>
                {key.id}
              </button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_TWO.map((key) => (
              <button key={key.id}>{key.id}</button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_THREE.map((key) => (
              <button key={key.id} className={` ${key.style}`}>
                {key.id}
              </button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_FOUR.map((key) => (
              <button key={key.id}>{key.id}</button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_FIVE.map((key) => (
              <button key={key.id}>{key.id}</button>
            ))}
          </div>
          <div className="row">
            {keys.KEYBOARD_KEYS_SIX.map((key) => (
              <button key={key.id} className={` ${key.style}`}>
                {key.id}
              </button>
            ))}
          </div>
        </div>
        <div className="ml-7 grid grid-cols-3">
          {keys.KEYBOARD_KEYS_SEVEN.map((key) => (
            <button key={key.id} className={` ${key.style}`}>
              {key.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
