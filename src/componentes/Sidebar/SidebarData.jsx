import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Suporte',
    path: '/Suporte',
    icon: <IoIcons.IoIosConstruct />,
    cName: 'nav-text'
  },
  {
    title: 'Comercial',
    path: '/Comercial',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Financeiro',
    path: '/Financeiro',
    icon: <IoIcons.IoMdCash />,
    cName: 'nav-text'
  },
  {
    title: 'Sair',
    path: '/login',
    icon: <IoIcons.IoIosExit />,
    cName: 'nav-text'
  }];