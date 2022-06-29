import { Component, ElementRef, ViewChild } from '@angular/core';
import { VidsService } from "./vids.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-search';
  vidsSearch: any;
  defValue: string = "rat hunt";

  @ViewChild('usrInput')
  usrInput!: ElementRef | any;
  constructor(private vids: VidsService) {
  }

  ngOnInit(value: string = this.defValue) {
    this.vids.getData(value).subscribe((data) => {
      // console.log(data)
      this.vidsSearch = data.items
    })
  }

  getData() {
    var usrInput = this.usrInput.nativeElement.value
    this.ngOnInit(usrInput);
    // this.vids.getData(usrInput).subscribe((data) => {
    //   console.log(data)
    //   this.vidsSearch = data.items
    // })
  }
// Filter parameters
//   this.filterArgs = { title: "bar" };
// this.items = this.vidsSearch
}
