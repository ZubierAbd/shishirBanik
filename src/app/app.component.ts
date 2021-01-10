import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shishir';

  numberOfSpins: number = 0;
  otherText: string = "time";
  ShishirUrls = [];
  shishirText = "";
  ShishirQuotes = [
    "The only salvation in life is through Shishir", "Once Shishir always Shishir", "Round is a shape", "Only Shishir is real", "The truth lies in the gaze of Shishir"
  ]


  ngOnInit() {
    this.numberOfSpins = 0;

    setInterval(() => {
      this.numberOfSpins = this.numberOfSpins + 1;
      if (this.numberOfSpins != 0) {
        this.otherText = "times";
      }
    }, 3000)

    this.shishirText = this.ShishirQuotes[Math.floor(Math.random() * 5) - 1];

    setInterval(() => {
      this.shishirText = this.ShishirQuotes[Math.floor(Math.random() * 5) - 1]
    }, 5000);

  }
}
