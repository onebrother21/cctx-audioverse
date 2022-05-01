import { CommonStateWithEntities,initializeCommonStateWithEntities } from "./common.state";
import { Layout } from '../models';

export interface LayoutsState extends CommonStateWithEntities<Layout> {}
export const initializeLayouts = ():LayoutsState => ({...initializeCommonStateWithEntities()});