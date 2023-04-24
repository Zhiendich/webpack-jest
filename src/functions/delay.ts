export const delay = (callback: () => number, ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};
