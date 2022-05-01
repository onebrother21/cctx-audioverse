import { Payment } from "../models";
import { CommonState,initializeCommonState } from "./common.state";

export interface PaymentsState extends CommonState,Partial<Pick<Payment,"confirmation">> {}
export const initializePayments = ():PaymentsState => initializeCommonState();