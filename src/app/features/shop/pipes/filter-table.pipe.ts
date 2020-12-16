import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    let offset = (args['page'] - 1) * args['count_per_page']
    let elementDisplay = value.slice(offset, offset+ args['count_per_page'])
    console.log(elementDisplay)
    return elementDisplay
  }

}
