import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform
 {

  transform(value : string) : string 
  {
     let temp : string = "";
     let a : number = 0;
     for(a=value.length-1;a>=0;a--)
     {
      temp = temp+value[a];
     }
    
     return temp;
  }

}
