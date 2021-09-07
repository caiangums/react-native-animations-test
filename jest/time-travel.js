import { advanceBy, advanceTo, clear } from 'jest-date-mock';

const FRAME_TIME = 10;

function advanceOneFrame() {
  advanceBy(FRAME_TIME);
  jest.advanceTimersByTime(FRAME_TIME);
}

/**
 * Setup tests for time travel (start date)
 */
export function setup(startDate = '') {
  advanceTo(new Date(startDate));
}

/**
 * Travel a specific amount of time (in ms) inside a test
 */
export function travel(time = FRAME_TIME) {
  const framesToRun = time / FRAME_TIME;
  let actualFrame = 0;

  while (actualFrame < framesToRun) {
    advanceOneFrame();
    actualFrame += 1;
  }
}

/**
 * End testing with time travel
 */
export function teardown() {
  clear();
}
