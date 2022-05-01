import { Action, createReducer, on } from "@ngrx/store";
import { PaymentsActions as PAY } from "../actions";
import { PaymentsState,initializePayments } from "../states";
import { AppError } from "../common";

const initialState = initializePayments();
const reducer = createReducer(
  initialState,
  on(PAY.load,(s,{payload}) => ({
    ...s,
    confirmation:payload.confirmation,
    loading:false,
    error:null,
  })),
  on(PAY.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
  on(PAY.charge,s => ({...s,loading:true})),
);

export function PaymentsReducer(s:PaymentsState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;