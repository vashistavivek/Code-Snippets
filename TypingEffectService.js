function TypingEffect() {
  
  const DELAY_FOR_CHARACTER = 80;

  let loopInterval;

  const iterateOverTitlesOnce = (setState, titles) => {
    let characterNumber = 1;

    for(let i = 1 ; i <= titles.length ; i++){

      const title = titles[ i - 1 ];

      title.split('').forEach((ch, ind) => {

        setTimeout( () => {

          setState(title.substr(0, ind + 1));

        }, DELAY_FOR_CHARACTER * characterNumber);

        characterNumber++;

      });

      //creating delay for next iteration
      characterNumber+=20;
    }
  }

  this.start = (titles, setState) => {

    const intervalDelay = titles.reduce((acc, title) => title.length + acc, arr.length * 20);
    
    iterateOverTitlesOnce(setState, titles);

    loopInterval = setInterval(() => {

      iterateOverTitlesOnce(setState, titles);

    }, intervalDelay * DELAY_FOR_CHARACTER);

  }

  this.stop = () => {

    clearInterval(loopInterval);

  }
}
export default TypingEffect;