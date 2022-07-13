import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(vidsSearch: any[], filterText: string = ''): any {
    if (filterText === "") {
        return vidsSearch
    }
    if (filterText === "channel") {
      vidsSearch = _.orderBy(vidsSearch, 'snippet.channelTitle')
        return vidsSearch
    }
    if (filterText === "date") {
        vidsSearch = _.orderBy(vidsSearch, 'snippet.publishedAt', 'desc')
        console.log(vidsSearch)
        return vidsSearch
    }
}}
  