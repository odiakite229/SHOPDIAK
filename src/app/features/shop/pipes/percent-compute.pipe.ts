import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentCompute'
})
export class PercentComputePipe implements PipeTransform {

  transform(value: number, percent: number): unknown {
    let result = value - (percent * value) / 100
    return result;
  }

}
