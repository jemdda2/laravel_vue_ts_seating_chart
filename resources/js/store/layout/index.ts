import { Module } from "vuex";
//@ts-ignore
import { LayoutState, MessageState, RootState } from "@/store/types";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const layoutState: LayoutState = {
    loading: true,
    code: "",
    halls: [],
    hallLayout: [],
    editSeats: [],
    editSeatGroups: [],
    seats: [],
    seatGroups: [],
    hallId: 0,
    layoutId: 0,
    success: "",
    warning: "",
    error: ""
};

export const layout: Module<LayoutState, RootState> = {
    namespaced: true,
    state: layoutState,
    getters,
    actions: actions.layoutActions,
    mutations: mutations.layoutMutations
};

export const messageState: MessageState = {
    success: "",
    warning: "",
    error: ""
};

export const message: Module<MessageState, RootState> = {
    namespaced: true,
    state: messageState,
    // getters,
    //actions: actions,
    mutations: mutations.messageMutations
};
