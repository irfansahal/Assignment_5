export default function GenerateNextCount(list){
  const nextCount = list.reduce((current,next)=>{
    return Math.max(current,next.count);
  },0)
  return nextCount + 1 
}