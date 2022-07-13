import { Component, ElementRef, ViewChild } from '@angular/core';
import { VidsService, YT_response } from "./vids.service";
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilterPipe]
})
export class AppComponent {
  title = 'video-search';
  vidsSearch: any;
  defValue: string = "cute rats";
  filterText: string = "";
  public isLoading: boolean = false;

  @ViewChild('usrInput')
  usrInput!: ElementRef | any;
  // Search img source
  reset: string = "../assets/img/search_reset.png"
  author: string = "../assets/img/search_author.png"
  date: string = "../assets/img/search_date.png"
  imgPath: string = this.reset

  constructor(public vids: VidsService) {
  }
  // Default search page
  ngOnInit(value: string = this.defValue) {
    this.vids.getData(value).subscribe(
      (data) => {
        this.vidsSearch = data.items
        if (this.vidsSearch == data.items) {
        }
        return this.vidsSearch
      })
  }
  // User search method
  getData() {
    let usrInput = this.usrInput.nativeElement.value
    this.isLoading = false
    console.log(this.isLoading)
    this.vids.getData(usrInput).subscribe(
      (data) => {
        this.vidsSearch = data.items
        if (this.vidsSearch == data.items) {
          this.isLoading = true
        }
        setTimeout(() => {
          return this.isLoading = false
        }, 1000) 
      })
  }

  // Sort parameters
  sortBtn(text: string) {
    this.filterText = text
    switch (text) {
      case "channel":
        this.imgPath = this.author
        break
      case "date":
        this.imgPath = this.date
        break
      default:
        this.imgPath = this.reset
    }
  }
}
