let a=[1,2,3]

a.map((e)=>{
  return  e*2
}).filter((e)=>e%2).reduce((acc,pre=>acc+pre))