// Given an image (url? file?) return an array of prominent colours
import ColorThief from 'color-thief';

const thief = new ColorThief();

export default (() => {
  const find = function find(image) {
    return new Promise((resolve, reject) => {
      thief.getColorAsync(image, (color, element) => {
        resolve({ colors: [...color] });
      });
    });
  };

  return {
    find,
  };
})();
