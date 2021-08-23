/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-lonely-if */
/* eslint-disable no-param-reassign */

// easing functions http://goo.gl/5HLl8
export const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

export const easeInCubic = (t: number, b: number, c: number, d: number): number => {
  const tc = (t /= d) * t * t;
  return b + c * tc;
};

export const easeInCubic2 = (t: number, b: number, c: number, d: number): number => {
  const tc = (t /= d) * t * t * t;
  return b + c * tc;
};

export const inOutQuintic = function (t: number, b: number, c: number, d: number): number {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
const requestAnimFrame = ((): ((cb: FrameRequestCallback) => any) => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    //@ts-ignore
    window.mozRequestAnimationFrame ||
    function (callback): void {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

const cancelAnimFrame = ((): ((handle: number) => void) => {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    //@ts-ignore
    window.mozCancelAnimationFrame ||
    window.clearTimeout
  );
})();

export function useRafScroll(): {
  start: (
    to: number,
    duration: number,
    callback?: (_elapsed: number, _duration: number) => any
  ) => void;
  stop: () => void;
} {
  // because it's so fucking difficult to detect the scrolling element, just move them all
  function move(amount: number) {
    document.documentElement.scrollTop = amount;
    // @ts-ignore
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  }
  function position() {
    return (
      document.documentElement.scrollTop ||
      // @ts-ignore
      document.body.parentNode.scrollTop ||
      document.body.scrollTop
    );
  }

  let rafId = -1;

  const stop = () => {
    if (rafId !== -1) {
      cancelAnimFrame(rafId);
      rafId = -1;
    }
  };

  const start = (
    to: number,
    duration: number,
    callback?: (_elapsed: number, _duration: number) => any
  ) => {
    stop();

    const from = position();
    const change = to - from;
    let elapsed = 0;
    const increment = 20;

    duration = typeof duration === "undefined" ? 500 : duration;

    const animateScroll = () => {
      // increment the time
      elapsed += increment;
      // find the value with the quadratic in-out easing function
      const val = easeInCubic(elapsed, from, change, duration);
      // move the document.body
      move(val);
      // do the animation unless its over
      if (elapsed < duration) {
        rafId = requestAnimFrame(animateScroll);
        callback && callback(elapsed, duration);
      } else {
        // the animation is done
        callback && callback(duration, duration);
      }
    };

    rafId = requestAnimFrame(animateScroll);
  };

  return {
    start,
    stop,
  };
}
