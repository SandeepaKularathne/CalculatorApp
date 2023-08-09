import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorApp';

  calValue: number = 0;
  calFun: any = 'No Function Use';
  calScNumber: string = 'anyValue';
  calFsNumber: number = 0 ;
  calSeNumber: number = 0 ;

  onClickValue(val: string, type: any){
    if(type == 'number'){
      this.onNumberClick(val);
    }else if(type == 'fuction'){
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string){
    if(this.calScNumber != 'anyValue'){
      this.calScNumber += val;
    }else{
      this.calScNumber = val;
    }
    this.calValue=parseFloat(this.calScNumber);
  }

  onFunctionClick(val: string){

    if(this.calFun == 'No Function Use'){
      this.calFsNumber = this.calValue;
      this.calValue=0;
      this.calScNumber = 'anyValue';
      this.calFun = val;
    }else if(this.calFun != 'No Function Use'){
      this.calSeNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){

    if(this.calFun == '+'){
      const Total = this.calFsNumber + this.calSeNumber;
      this.totalAssignValues(Total, val);

    } else if(this.calFun == '-'){
      const Total = this.calFsNumber - this.calSeNumber;
      this.totalAssignValues(Total, val);

    } else if(this.calFun == '/'){
      const Total = this.calFsNumber / this.calSeNumber;
      this.totalAssignValues(Total, val);

    } else if(this.calFun == 'X'){
      const Total = this.calFsNumber * this.calSeNumber;
      this.totalAssignValues(Total, val);

    }else if(this.calFun == '='){
      const Total = this.calFsNumber;
      this.totalAssignValues(Total, val);
    }
  }
  totalAssignValues(Total: number, val: string){
    this.calValue = Total;
      this.calFsNumber = Total;
      this.calSeNumber = 0;
      this.calScNumber = 'anyValue';
      this.calFun = val;
  }
}
