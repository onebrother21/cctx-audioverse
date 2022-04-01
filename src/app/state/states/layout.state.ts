import { CommonState,initializeCommonState } from "./common.state";
import { Layout } from '../models';

export interface LayoutState extends CommonState,Layout {}
export const initializeLayout = ():LayoutState => ({
  ...initializeCommonState(),
  header:{open:true},
  footer:{open:true,copy:"2022"},
  main:{open:true},
  nav:{
    open:false,
    menus:[
      [
        {link:"/secur01/signup",icon:"fa fa-edit",label:"Sign Up"},
        {link:"/secur01/signin",icon:"fa fa-user-circle",label:"Sign In"},
      ],[
        {link:"/create",icon:"fa fa-plus",label:"Create New"},
        {link:"/recent",icon:"fa fa-folder",label:"Recent Projects"},
        {link:"/me",icon:"fa fa-users",label:"User Community"},
        {link:"/me/acct",icon:"fa fa-user",label:"Account & Settings"},
        {link:"/services",icon:"fa fa-question",label:"Help & Sservices"},
      ]
    ]
  },
  pagination:{current:0,total:0},
});