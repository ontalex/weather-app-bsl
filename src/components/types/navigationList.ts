import type { Component } from "vue";

export type TNavigationList = TNavigationItem[];

type TNavigationItem = {
    label?: string
    icon?: Component
    link: string
}
