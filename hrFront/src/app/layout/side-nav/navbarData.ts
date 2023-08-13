import { INavbarData } from './helper';

export const navbarData : INavbarData[] =[
  {
    routerLink:'dashboard',
    icon:'fa fa-home',
    label :'Dashboard'
  },

  {
    routerLink:'inventory',
    icon:'fa fa-list',
    label :'Inventory',
    items : [
      {
        routerLink:'inventory/products',
        label:'Products',
        // items:[
        //       {
        //         routerLink:'',
        //         label:'Level 2.1'
        //       },
        //       {
        //         routerLink:'',
        //         label:'Level 2.2'
        //       }

        // ]
      },
      {
        routerLink:'inventory/units',
        label:'Units'
      },
      {
        routerLink:'inventory/categories',
        label:'Categories'
      }


    ]
  } ,{
    routerLink:'sales',
    icon:'fa fa-tags',
    label :'Sales'
  },
   {
    routerLink:'purchases',
    icon:'fa fa-tags',
    label :'Purchases'
  },
  {
    routerLink:'suppliers',
    icon:'fa fa-tags',
    label :'Suppliers'
  },
  {
    routerLink:'customers',
    icon:'fa fa-users',
    label :'Customers'
  },
  {
    routerLink:'accounting',
    icon:'fa fa-tags',
    label :'Accounting'
  },
  {
    routerLink:'reports',
    icon:' fa  fa-file-text',
    label :'Reports'
  },
  {
    routerLink:'users',
    icon:'fa fa-user-circle',
    label :'Users'
  },
]
