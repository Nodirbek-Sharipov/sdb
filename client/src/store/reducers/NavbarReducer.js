import React from "react";
import PhoneIcon from "../../components/icons/PhoneIcon";
import ComputerIcon from "../../components/icons/ComputerIcon";
import WashingMachineIcon from "../../components/icons/WashingMachineIcon";
import CarIcon from "../../components/icons/CarIcon";
const CHANGE_NAVBAR_ACTIVE = 'CHANGE_NAVBAR_ACTIVE';
const CHANGE_LINK_ISACTIVE = 'CHANGE_LINK_ISACTIVE';

let initialState = {
    navbarActive: false,
    navbarLinks: [
        {
            id:1,
            title: 'Telefonlar',
            path: '/category/telefonlar',
            icon: <PhoneIcon/>,
            isActive: true,
            links: [
                {
                    id: 1,
                    link_title: 'Apple',
                    link_path: '#'
                },
                {
                    id: 2,
                    link_title: 'Samsung',
                    link_path: '#'
                },
                {
                    id: 3,
                    link_title: 'Xiaomi',
                    link_path: '#'
                },
                {
                    id: 5,
                    link_title: 'BQ',
                    link_path: '#'
                },
                {
                    id: 6,
                    link_title: 'Honor',
                    link_path: '#'
                },
                {
                    id: 7,
                    link_title: 'Huawei',
                    link_path: '#'
                },
                {
                    id: 8,
                    link_title: 'Infinix',
                    link_path: '#'
                },
                {

                    id: 9,
                    link_title: 'Nokia',
                    link_path: '#'
                },
                {
                    id: 10,
                    link_title: 'OnePlus',
                    link_path: '#'
                },
                {
                    id: 11,
                    link_title: 'Oppo',
                    link_path: '#'
                },
                {
                    id: 14,
                    link_title: 'ZTE',
                    link_path: '#'
                },
                {
                    id: 15,
                    link_title: 'Terra Pro',
                    link_path: '#'
                },
            ]
        },
        {
            id:2,
            title: 'Kompyuterlar',
            path: '/category/kompyuterlar',
            icon: <ComputerIcon/>,
            isActive: false,
            links: [
                {
                    id: 1,
                    link_title: 'Apple',
                    link_path: '#'
                },
                {
                    id: 2,
                    link_title: 'Samsung',
                    link_path: '#'
                },
                {
                    id: 3,
                    link_title: 'Xiaomi',
                    link_path: '#'
                },
            ]
        },
        {
            id:3,
            title: 'Maishiy texnika ',
            path: '/category/maishiy-texnika',
            icon: <WashingMachineIcon/>,
            isActive: false,
            links: [
                {
                    id: 1,
                    link_title: 'Apple',
                    link_path: '#'
                },
                {
                    id: 2,
                    link_title: 'Samsung',
                    link_path: '#'
                },
                {
                    id: 3,
                    link_title: 'Xiaomi',
                    link_path: '#'
                },
                {
                    id: 4,
                    link_title: 'Blackview',
                    link_path: '#'
                },
                {
                    id: 5,
                    link_title: 'BQ',
                    link_path: '#'
                },
                {
                    id: 6,
                    link_title: 'Honor',
                    link_path: '#'
                },

            ]
        },
        {
            id:4,
            title: 'Avtomahsulotlar',
            path: '/category/avtomahsulotlar',
            icon: <CarIcon/>,
            isActive: false,
            links: [
                {
                    id: 1,
                    link_title: 'Apple',
                    link_path: '#'
                },
                {
                    id: 2,
                    link_title: 'Samsung',
                    link_path: '#'
                },
                {
                    id: 3,
                    link_title: 'Xiaomi',
                    link_path: '#'
                },
                {
                    id: 4,
                    link_title: 'Blackview',
                    link_path: '#'
                },
                {
                    id: 5,
                    link_title: 'BQ',
                    link_path: '#'
                },
                {
                    id: 6,
                    link_title: 'Honor',
                    link_path: '#'
                },
                {
                    id: 7,
                    link_title: 'Huawei',
                    link_path: '#'
                },

            ]
        },
    ],
};

const NavbarReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CHANGE_NAVBAR_ACTIVE:
            state.navbarActive = !state.navbarActive;
            return state;

        case CHANGE_LINK_ISACTIVE:
            state.navbarLinks.forEach(el => {
                if(el.id === action.id){
                    state.navbarLinks.forEach(item =>{
                        item.isActive = false
                    })
                    el.isActive = action.bool;
                }
            });
            return state;

        default:
            return state;
    }
}

export const changeNavbarActiveAC = () =>({
    type:CHANGE_NAVBAR_ACTIVE,
});

export const changeLinkIsActiveAC = (id, bool) =>({
    type:CHANGE_LINK_ISACTIVE, bool: bool, id:id
});


export default NavbarReducer;