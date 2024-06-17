import type {IRes} from "./index";

export interface IRegionName {
    uz: string
    ru: string
    en: string
    _id: string
}

export interface IRegion {
    _id: string
    name: IRegionName
    isActive: boolean
    createdAt: string
    updatedAt: string
}

export interface IRegionResForm {
    items: IRegion[]
    total: number
}


export interface IRegionRes extends IRes<IRegionResForm> {
}