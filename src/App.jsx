import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Grab Restaurant</h1>
      <dir className="search">
        <input type="text" placeholder="Search Restaurant" />
      </dir>
      <div className="container">
        <div className="card">
          <div className="menu-1">
            <img
              src="https://food-cms.grab.com/compressed_webp/merchants/3-C2L3RKJXBFJ3TE/hero/c74423cef8d046bda717569a28283c00_1635084989470343822.webp"
              alt=""
            />
            <h3>ผัดไทยไฟทะลุดั้งเดิม - บวรนิเวศ</h3>
            <p>ผักไทยอร่อย</p>
            <button>Order Now</button>
          </div>

          <div className="menu-2">
            <img
              src="https://food-cms.grab.com/compressed_webp/merchants/3-C6NDJ7EETLEZJA/hero/3c02e752ccca4b648dcc6d5f0bd73268_1718609242705826724.webp"
              alt=""
            />
            <h3>ลานขนมไทย - ดิโอลด์สยามพลาซ่า</h3>
            <p>ลานขนมไทย</p>
            <button>Order Now</button>
          </div>

          <div className="menu-3">
            <img src="src/img/drink.png" alt="" />
            <h3>น้ำปั่นอินไซต์คาเฟ่</h3>
            <p>น้ำปั่นอร่อยๆ</p>
            <button>Order Now</button>
          </div>

          <div className="menu-4">
            <img
              src="https://food-cms.grab.com/compressed_webp/merchants/3-C2VVDCEUGNWFRA/hero/5daf20f4ff8a468abceb922837ae9695_1662533965762830470.webp"
              alt=""
            />
            <h3>เจดีย์ คาเฟ่ (Jedi Cafe) - ถนนบริพัตร</h3>
            <p>กาแฟ อร่อยๆ</p>
            <button>Order Now</button>
          </div>

          <div className="menu-5">
            <img
              src="https://food-cms.grab.com/compressed_webp/merchants/3-CZMTHA3WE4CJG6/hero/ee965b35daa24d79bf15cc6faaa80b3e_3d99eb235aba4d988047c8fb3b45dac0_1717951299053042794.webp"
              alt=""
            />
            <h3>กล่องดินสอ - ถนนดินสอ</h3>
            <p>ขนมเค้กอร่อยๆ</p>
            <button>Order Now</button>
          </div>

          <div className="menu-6">
            <img
              src="https://food-cms.grab.com/compressed_webp/merchants/3-C4DHC8KGE7CKE6/hero/469503cb-25cf-471c-b436-5c3024bce757__store_cover__2023__06__24__06__42__22.webp"
              alt=""
            />
            <h3>ร้านอาหารจีนแนะนำ</h3>
            <p>อาหารจีนอร่อยๆ</p>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
