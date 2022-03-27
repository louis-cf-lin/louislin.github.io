const typeEffect = (text: string) => {
  const chars = text.split("");
  let delay = 1000;
  let i = 0;

  const timerFunction = (i: number) => {
    if (i === chars.length) return;
    setTimeout(() => {
      console.log(chars[i]);
      i++;
      timerFunction(i);
    }, delay);
    delay = delay + 1000 + Math.floor(Math.random() * 4000);
  };

  timerFunction(i);
};

export default typeEffect;
