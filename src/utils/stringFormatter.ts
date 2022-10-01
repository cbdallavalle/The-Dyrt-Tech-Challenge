export const capitalizeEveryWord = (str: string):string => {
  const splitStr = str.replace("-", " ").split(' ');
  return splitStr.reduce((fullStr: string, word: string) => {
    fullStr += word.charAt(0).toUpperCase() + word.substring(1) + ' ';
    return fullStr;
  }, '').trim();
};
