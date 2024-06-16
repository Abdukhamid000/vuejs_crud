import {IRes} from "@/types/index.ts";

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
    createdAt: boolean
    updatedAt: boolean
}

export interface IRegionResForm {
    items: IRegion[]
    total: number
}


export interface IRegionRes extends IRes<IRegionResForm> {
}