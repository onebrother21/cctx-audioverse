export const randomIntFromInterval = (min:number,max:number) => Math.floor(Math.random() * (max - min + 1) + min);
export const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
export const longId = () => S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4();