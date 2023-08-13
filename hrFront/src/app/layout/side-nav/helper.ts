export interface INavbarData{
  routerLink:string;
  label:string;
  icon?:string;
  expanded? :boolean;
  items?: INavbarData[]
}
