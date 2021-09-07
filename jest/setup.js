jest.useFakeTimers();

const FRAME_TIME = 10;

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, FRAME_TIME);
};
