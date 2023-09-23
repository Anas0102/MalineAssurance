import React from "react";

import * as ImIcons from 'react-icons/im'
import * as VsIcons from 'react-icons/vsc'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as TbIcons from 'react-icons/tb'
export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<ImIcons.ImHome3/>,    
        cName:'nav-text'
      
    },
    {
        title:'Référentiel des charges fixes',
        path:'/FixedChargesList',
        icon:<FaIcons.FaFileContract/>,
        cName:'nav-text'
    },
    {
        title:'Réferentiel des charges variables',
        path:'/ReferentielChargesvariables',
        icon:<VsIcons.VscSymbolVariable/>,
        cName:'nav-text'
    }, 
   
   
    {
        title:'Réferentiel des commisssions',
        path:'/ReferentielCharges',
        icon:<TbIcons.TbPercentage/>,
        cName:'nav-text'
    },
   
    {
        title:'Simuler Equipe',
        path:'/CalculCommission',
        icon:<RiIcons.RiTeamFill/>,
        cName:'nav-text'
    }, 
   
    
    
    

]