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

    require('color-thief');

    console.log('inside colour finder');

    const image = 'https://unsplash.it/1000/700/?random';


    var thief = new colorThief();
    console.log(thief.getColor(image));

  };

  return {
    init,
  };
})();
