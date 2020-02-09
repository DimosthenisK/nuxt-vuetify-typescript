import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { $axios } from '~/plugins';
import * as _ from 'lodash';
import Vue from 'vue';

@Module({ name: 'sample', namespaced: true, stateFactory: true })
export default class sample extends VuexModule {
    sampleStae = false;

    @Mutation sampleMutation() {}

    @Action({ commit: 'sampleMutation' })
    async sampleAction() {
        // $axios.$get(...)
    }
}
