import { NavBarItem } from '../../interfaces/NavBarItem'

export const NavBarDefaultListItems: NavBarItem[] = [
    {
        id: 1,
        title: "Cuenta",
        icon: "ManageAccounts",
        path: "/",
        index: 0,
        options: [
            {
                id: 1,
                title: "Perfil",
                icon: "AccountCircle",
                path: "/perfil",
                index: 0
            },
            {
                id: 2,
                title: "Cerrar Sesion",
                icon: "Logout",
                path: "/logout",
                index: 1
            }
        ]
    },
];