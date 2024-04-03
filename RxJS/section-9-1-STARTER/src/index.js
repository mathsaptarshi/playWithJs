import { Observable } from 'rxjs';

const observable = new Observable((subscriber)=> {
  subscriber.next('Hello');
  // subscriber.error('test');
  subscriber.next('test');
  subscriber.complete();
  subscriber.next('new');

  /*
    to protect from memory leak
  */
  return () => {
    
  }
});

console.log('before');

observable.subscribe({
  next: (value) => {
    console.log(value)
  },
  error: (err) => {
    console.log('err called',err)
  },
  complete: () => {
    console.log('complete called')
  }
})

console.log('after');
