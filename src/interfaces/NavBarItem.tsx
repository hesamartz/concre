/* eslint-disable @typescript-eslint/no-unused-vars */

interface Options {
    id: number;
    title?: string;
    icon?: string;
    path?: string;
    index: number;
}
export interface NavBarItem {
    id: number;
    title?: string;
    icon?: string;
    path?: string;
    index: number;
    options?: Options[];
}