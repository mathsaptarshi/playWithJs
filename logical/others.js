console.log('Start');
setTimeout(()=>{
  console.log('Timeout 1')
},0)
setTimeout(()=>{
  console.log('Timeout 2')
},1000)
Promise.resolve().then(()=>{
  console.log('Promise Resolved')
})
console.log('End');