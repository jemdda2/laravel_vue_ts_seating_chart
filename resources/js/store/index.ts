import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { layout } from "./layout";
import { groups } from "./groups";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0"
    },
    modules: {
        layout,
        groups
    }
};

export default new Vuex.Store<RootState>(store);
