import { Component } from '@angular/core';
import { of, from, map, take, tap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reaxtive_ng';

  ngOnInit(){
    // of ([2,4,5,6]).subscribe(item => console.log(item)) //logs a list
    of (2,4,5,6).subscribe(item => console.log(item)) // logs individual items from the provided data


    // from(2,4,5,6]).subscribe(item => console.log(item)) // returns an error
    from([2,4,5,6]).subscribe({
      next: item => console.log(`Resulting item... ${item}`),
      error: err => console.error(`Resulting item... ${err}`),
      complete: () => console.log(`Completed emitting`)
    })

    of(["Person One", "Person Two", "Person three", "Person four"]).subscribe({
      next: item => console.log(`Resulting item... ${item}`),
      error: err => console.error(`Resulting item... ${err}`),
      complete: () => console.log(`Completed emitting`)
    })

    console.log("");
    console.log("============================================");
    console.log("Additional RxJS Operators");
    console.log("============================================");

    const items$ = of("someString", "anotherString", "yetAnotherStering", "additional")

    items$.pipe(
      map(item => item + "Here's some aditional mapping"), // used when you'd like to change the data you're expecting
      tap(item => console.log(`Tapped: ${item}`)), // use tap for debugging, siimply loggin the value received without changing it
      take(2) // use take to limit the amount of data received by the observer - aka filter obervable
    ).subscribe(
      // item => console.log(`Subscribed: ${item}`)
    );

  }
}
