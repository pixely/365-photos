// Given an image (url? file?) return an array of prominent colours
import ColorThief from 'color-thief';

export default (() => {
  const find = function find(image) {
    return new Promise((resolve, reject) => {
      const thief = new ColorThief();
      thief.getColorAsync(image, (color, element) => {
        resolve({ colors: [...color] });
      });
    });
  };

  return {
    find,
  };
})();
