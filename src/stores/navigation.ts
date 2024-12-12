import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Состояние открытости навигационного меню
 */
// export const storeNavigation = defineStore(
//     "navigation",
//     () => {
//         /**
//          * (true - открыто, false - закрыто)
//          */
//         const isOpen = ref<boolean>(false);
//         /**
//          * Смена состояния на указанное
//          * @param state (true - открыто, false - закрыто)
//          */
//         function setState(state: boolean) {
//             console.log("chenge state:", state, "; current:", isOpen.value);
//             isOpen.value = state
//         }
//         function change() {
//             isOpen.value = !isOpen.value
//         }
//         return {
//             state: isOpen,
//             set: setState,
//             change
//         }
//     }
// )
export const storeNavigation = defineStore(
    "navigation",
    {
        "state": () => ({
            state: false
        }),
        "actions": {
            setState: (state: boolean) => {
                this.state = state
            }
        }
    }
)
