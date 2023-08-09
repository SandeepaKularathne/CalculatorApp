import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorApp';

  result: number = 0;
  firstOperand: number = 0 ;
  secondOperand: number = 0 ;
  displayValue: string = 'anyValue';
  currentOperator: any = 'No Function Use';

  onClickValue(val: string, type: any){
    if(type === 'number'){
      this.onNumberClick(val);
    }else if(type === 'fuction'){
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string){
    
    if(this.displayValue != 'anyValue'){
      this.displayValue += val;
    }else{
      this.displayValue = val;
    }
    this.result=parseFloat(this.displayValue);
  }

  onFunctionClick(val: string){

    if(val == 'AC'){

      if(this.displayValue !== 'anyValue' && this.displayValue.length > 0){ 

        if(this.displayValue === '0'){
          this.result=parseFloat(this.displayValue);

        }else if(this.displayValue.length === 1){
          this.displayValue = this.displayValue.slice(0, -1);
          this.result=0;

        }else{
          this.displayValue = this.displayValue.slice(0, -1);
          this.result=parseFloat(this.displayValue);
        }
          
      }else{
        this.clearAll();
      }
      
    }else if(val == '+/-'){
      this.result = this.result * (-1);
      
    }else if(this.currentOperator === 'No Function Use'){
      this.firstOperand = this.result;
      this.result=0;
      this.displayValue = 'anyValue';
      this.currentOperator = val;

    }else if(this.currentOperator != 'No Function Use'){
      this.secondOperand = this.result;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){

    if(this.currentOperator === '+'){
      const Total = this.firstOperand + this.secondOperand;
      this.totalAssignValues(Total, val);

    } else if(this.currentOperator === '-'){
      const Total = this.firstOperand - this.secondOperand;
      this.totalAssignValues(Total, val);

    } else if(this.currentOperator === '/'){
      const Total = this.firstOperand / this.secondOperand;
      this.totalAssignValues(Total, val);

    } else if(this.currentOperator === 'X'){
      const Total = this.firstOperand * this.secondOperand;
      this.totalAssignValues(Total, val);

    }else if(this.currentOperator === '='){
      const Total = this.firstOperand;
      this.totalAssignValues(Total, val);
    }
  }

  totalAssignValues(Total: number, val: string){
    this.result = Total;
    this.firstOperand = Total;
    this.secondOperand = 0;
    this.displayValue = 'anyValue';
    this.currentOperator = val;
  }

  clearAll(){
    this.result = 0;
    this.firstOperand = 0;
    this.secondOperand = 0;
    this.displayValue = 'anyValue';
    this.currentOperator = 'No Function Use';
  }
}
