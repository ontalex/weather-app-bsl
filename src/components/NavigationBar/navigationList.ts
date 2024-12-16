import IconCommunity from "../icons/IconCommunity.vue";
import IconHome from "../icons/IconHome.vue";
import IconPeople from "../icons/IconPeople.vue";
import IconWorld from "../icons/IconWorld.vue";

import { type TNavigationList } from "../types/navigationList";

export const navigationList: TNavigationList = [
    {
        label: "Главная", link: "/", icon: IconHome
    },
    {
        label: "Погода в городах", link: "/weathers", icon: IconWorld
    },
    {
        label: "О нас", link: "/about", icon: IconPeople
    },
]
