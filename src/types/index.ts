export interface IRes<T = {}> {
    success: boolean
    message: string
    data: T
}