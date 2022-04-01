import { AbstractControl, AsyncValidatorFn, FormArray, ValidatorFn } from "@angular/forms";
import { debounceTime, map, Observable, take } from "rxjs";

export function minSelectedCheckboxes(min = 1):ValidatorFn {
  const validator = (formArray:FormArray) => {
    const totalSelected = formArray.controls
      // get a list of checkbox values (boolean)
      .map(control => control.value)
      // total up the number of checked checkboxes
      .reduce((prev, next) => next ? prev + next : prev, 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { required: true };
  };

  return validator as ValidatorFn;
}

export function checkAsyncError(errSelector:Observable<any>): AsyncValidatorFn {
  return (control:AbstractControl): Promise<{[key:string]:any}|null>|Observable<{[key:string]:any}|null> => {
    return errSelector.pipe(
      debounceTime(500),
      take(1),
      map(value => {
        console.log(value);
        return !!value ? { invalid: true } : null;}));
  };
}