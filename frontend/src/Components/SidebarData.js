import React from "react";


import * as ImIcons from 'react-icons/im'
import * as GoIcons from 'react-icons/go'
import * as SiIcons from 'react-icons/si'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
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
        title:'Réferentiel des charges',
        path:'/ReferentielCharges',
        icon:<RiIcons.RiGitRepositoryCommitsFill/>,
        cName:'nav-text'
    },
    {
        title:'Réferentiel des bénéfices',
        path:'/ReferentielBénéfices',
        icon:<SiIcons.SiCivicrm/>,
        cName:'nav-text'
    }, 
    {
        title:'Simuler equipe',
        path:'/SimulerEquipe',
        icon:<RiIcons.RiTeamFill/>,
        cName:'nav-text'
    }, 
    {
        title:'Dashboard',
        path:'/Dashboard',
        icon:<BiIcons.BiSolidDashboard/>,
        cName:'nav-text',
        
    }, 
    {
        title:'Déconnexion',
        path:'/Déconnexion',
        icon:<BiIcons.BiLogOut/>,
        cName:'nav-text'
    },  
    
    

]