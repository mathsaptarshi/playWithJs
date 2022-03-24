// Fetch and show data in a list from this endpoint https://jsonplaceholder.typicode.com/todos
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  apiUrl = 'https://www.techiediaries.com/api/data.json';

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.fetchData();
  }

  private fetchData(){
    const promise = this.httpClient.get("https://jsonplaceholder.typicode.com/todos").toPromise();
    console.log(promise);  
    promise.then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
}


/* 

1. Create a parent and its child component, add a button in parent component. On clicking the button .Change the color of child component.
2. Create a component declare an json array ([{name:'a',age:30},{name:'b',age:50}]....).create a dynamic select box using this array.OnChange show the details inside the array.
3. Create a component declare an json array ([{name:'a',age:30},{name:'b',age:50}]....).sort the data according age or name.
4. call an api https://jsonplaceholder.typicode.com/users
5.

*/