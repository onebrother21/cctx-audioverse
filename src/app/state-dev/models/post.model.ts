import { DocEntity } from '../types';
import { UserId } from '../../state/models/user.model';
import { FeaturedTags,FeatureTag } from './content.model';

export type Post = DocEntity & {
  slug?:string;
  author:UserId;
  featured:boolean;
  readTime:number;
  tags:(FeaturedTags|FeatureTag)[];
};