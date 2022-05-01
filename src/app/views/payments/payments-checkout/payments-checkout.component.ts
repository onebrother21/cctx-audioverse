import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { PaymentsService } from '../payments.service';
import { AppAlert,UserJson } from '@state';

@Component({
  selector: 'qs-payments-checkout',
  templateUrl: './payments-checkout.component.html',
  styleUrls: ['./payments-checkout.component.scss'],
})
export class PaymentsCheckoutComponent {
  title = "payments-checkout";
  message = "";
  loading = false;
  isSubmitted = false;
  error:AppAlert|null = null;
  editor:FormGroup;
  formdata = {
    cardNumber:['',[
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern(/^[\d]*$/),
    ]],
    expMonth:['',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
      Validators.pattern(/^[\d]*$/),
    ]],
    expYear:['',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
      Validators.pattern(/^[\d]*$/),
    ]],
    cvv:['',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^[\d]*$/),
    ]],
    zip:['',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern(/^[\d]*$/),
    ]],
  };
  formReset = {
    cardNumber:"",
    expMonth:"",
    expYear:"",
    cvv:"",
    zip:""
  };
  constructor(private payments:PaymentsService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.payments.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
  }
  private ngUnsubscribe:Subject<boolean> = new Subject();
  ngOnDestroy(){
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
  get f(){return this.editor.controls;}
  getErr(field:string,errname?:string){return this.f[field].errors?.[errname||field];}
  reset(){this.editor.reset(this.formReset);}
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const {cardNumber,expMonth,expYear,cvv,zip} = this.editor.value;
      const o = {
        number:cardNumber,
        exp_month:expMonth,
        exp_year:expYear,
        cvv,zip,
        amount:5 * 100,
      };
      this.payments.send(o);
      this.isSubmitted = false;
    }
  }
  hasErrors(){
    this.error = null;
    if(this.editor.invalid) switch(true){
      case this.isSubmitted && !!this.getErr('cardNumber','required'):this.error =  {name:"cardNumberReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('cardNumber','minlength'):this.error =  {name:"cardNumberInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('cardNumber','maxlength'):this.error =  {name:"cardNumberInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('cardNumber','pattern'):this.error =  {name:"cardNumberInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expMonth','required'):this.error =  {name:"expMonthReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expMonth','minlength'):this.error =  {name:"expMonthInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expMonth','maxlength'):this.error =  {name:"expMonthInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expMonth','pattern'):this.error =  {name:"expMonthInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expYear','required'):this.error =  {name:"expYearReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expYear','minlength'):this.error =  {name:"expYearInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expYear','maxlength'):this.error =  {name:"expYearInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('expYear','pattern'):this.error =  {name:"expYearInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('cvv','required'):this.error =  {name:"cvvReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('cvv','minlength'):this.error =  {name:"cvvInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('cvv','maxlength'):this.error =  {name:"cvvInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('cvv','pattern'):this.error =  {name:"cvvInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('zip','required'):this.error =  {name:"zipReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('zip','minlength'):this.error =  {name:"zipInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('zip','maxlength'):this.error =  {name:"zipInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('zip','pattern'):this.error =  {name:"zipInvalid",type:"error"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}