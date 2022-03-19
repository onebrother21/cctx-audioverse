import { DocEntity } from '../types';
import { NavItem } from "./navigation.model";
import { PlayerId } from './player.model';

export type FeaturedTags = "angular"|"nodejs"|"nestjs"|"typescript"|"javascript"|"zextra";
export type FeatureTag = NavItem & {title:FeaturedTags;count?:number;};
export type SocialSharingItem = NavItem & Partial<{
  type:string;
  segments:string[];
  windowSize:string;
  share:string;}>;
export type Leaderboard = {
  newMembers:(NavItem & {rank?:number})[];
  this_week:(NavItem & {rank?:number})[];
  overall:(NavItem & {rank?:number})[];
  events:NavItem[];};
export type SocialSharing = {greeting:string[];menu:SocialSharingItem[];};
export type BlogInfo = {
  url:string;
  name:string;
  motto:string;
  social?:SocialSharingItem[];};
export type AboutUs = DocEntity & {readTime:number;};
export type Content = {
  blog:Partial<BlogInfo>;
  sharing:Partial<SocialSharing>;
  about:Partial<AboutUs>;
  tags:FeatureTag[];
  board:Partial<Leaderboard>;
  leaders:{
    wins:PlayerId[];
    winRate:PlayerId[];
    rank:PlayerId[];
    gp:PlayerId[];//games played
    rankChg:PlayerId[];
  };
  kudos:{
    pow:PlayerId[];
    pom:PlayerId[];
    miw:PlayerId[];
    mim:PlayerId[];
  };
  stats:{
    gp:number;
    avgWinRate:number;
    avgGameTime:number;
  };
};
//export const openSharingItem = (url,share,size) => {window.open(url,share,size);return false;};
