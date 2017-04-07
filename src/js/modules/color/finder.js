// Given an image (url? file?) return an array of prominent colours
export default (() => {
  const defaults = {

  };

  let settings;

  /**
   * Init module with given options.
   * Set up element references.
   *
   * @param {Object} [options={}] - overrides for the default settings object.
   */
  const init = function init(options = {}) {
    settings = Object.assign(defaults, options);

    const ColorThief = require('color-thief'); // eslint-disable-line global-require
    const image = document.querySelectorAll('img')[0];
    const thief = new ColorThief();
    thief.getColorAsync('http://d38786mw6ound9.cloudfront.net/2017/01/18211905/IMG_9754.jpg', (color, element) => {
      // console.log(color, element);
    });
  };

  return {
    init,
  };
})();
