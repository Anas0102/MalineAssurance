import React from "react";

import * as AiIcons  from'react-icons/ai';
import * as ImIcons from 'react-icons/im'
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'
export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<ImIcons.ImHome3/>,    
        cName:'nav-text'
      
    },
    {
        title:'Projets',
        path:'/Projets',
        icon:<GoIcons.GoProject/>,
        cName:'nav-text'
    },
    {
        title:'Contrats',
        path:'/listdesContrats',
        icon:<FaIcons.FaFileContract/>,
        cName:'nav-text'
    },
    {
        title:'Dashboard',
        path:'/Dashboard',
        icon:<BiIcons.BiSolidDashboard/>,
        cName:'nav-text',
        
    },
    {
        title:'Catalogue',
        path:'/Catalogue',
        icon:<GrIcons.GrCatalogOption/>,
        cName:'nav-text'
    },
    {
        title:'Taches',
        path:'/Taches',
        icon:<MdIcons.MdTaskAlt/>,
        cName:'nav-text'
    }, 
    {
        title:'Setting',
        path:'/Setting',
        icon:<AiIcons.AiTwotoneSetting/>,
        cName:'nav-text'
    },  
    {
        title:'Déconnexion',
        path:'/Déconnexion',
        icon:<BiIcons.BiLogOut/>,
        cName:'nav-text'
    },  
    

]