import * as React from "react";
import { hot } from "react-hot-loader/root";
import "./app.css";
import imagePreload from "./imagePreload";

const App = () => {
  const [preloadDone, setPreloadDone] = React.useState<boolean>(false);
  const [loadPercentage, setLoadPercentage] = React.useState<number>(0);

  const imageSrcArr = [
    "https://i.loli.net/2020/02/11/ue1xQbf5sNDwMi6.png",
    "https://i.loli.net/2020/02/11/GYScqUtVmxzkjFO.png",
    "https://i.loli.net/2020/02/11/SsPRCVZUk7Q6jci.png",
    "https://i.loli.net/2020/02/11/DWMCzoF1GcSkvIt.png",
    "https://i.loli.net/2020/02/11/zyr9CeVpFDOTMQH.png",
    "https://i.loli.net/2020/02/11/F4gkWtwKbSYzenE.png",
    "https://i.loli.net/2020/02/11/8rUZxv26TYLSEFh.png"
  ];
  React.useEffect(() => {
    imagePreload(imageSrcArr, {
      eachLoad: count => {
        setLoadPercentage(count / imageSrcArr.length);
      },
      allLoad: () => {
        setPreloadDone(true);
      }
    });
  }, []);

  return (
    <div className="wrapper">
      {preloadDone ? (
        imageSrcArr.map((src, index) => <img src={src} key={index} alt="img" />)
      ) : (
        <div className="pre-page">{`${(loadPercentage * 100).toFixed(
          2
        )}%`}</div>
      )}
    </div>
  );
};

export default hot(App);
