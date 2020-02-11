interface OptionType {
  eachLoad?: (count: number) => void;
  allLoad?: (count: number) => void;
}

const imagePreload = (imageSrcArr: Array<string>, option: OptionType = {}) => {
  let count = 0;
  imageSrcArr.map(imageSrc => {
    const image = new Image();
    image.src = imageSrc;

    image.addEventListener("load", () => {
      count++;
      option.eachLoad && option.eachLoad(count);
      count >= imageSrcArr.length && option.allLoad && option.allLoad(count);
    });
    image.addEventListener("error", () => {
      count++;
      option.eachLoad && option.eachLoad(count);
      count >= imageSrcArr.length && option.allLoad && option.allLoad(count);
    });
  });
};

export default imagePreload;
