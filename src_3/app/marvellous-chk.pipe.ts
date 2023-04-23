import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number,Param : string): string 
  {
    let a = 0;
    let b = 0;
    let str : string = "";
     if(Param == "Prime")
     {
        for(a=2;a<value;a++)
        {
            b = b+1;
        }
        if(b==0)
        {
          str="It in not Prime number";
        }
        else
        {
          str="It is Prime number";
        }
     }
     if(Param == "Perfect")
     {
      for(a=1;a<value;a++)
      {
        if(value%a==0)
        {
          b=b+a;
        }
      }
      if(b==value)
      {
         str="It is Perfect number";
      }
      else 
      {
        str="It is not Perfect number";
      }
     }
     if(Param == "Even")
     {
      if(value%2==0)
      {
        str="It is Even number";
      }
      else
      {
        str="It is Odd number";
      }
     }
    return str;
  }

}
