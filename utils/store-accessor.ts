import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import sample from '~/store/sample';

let Sample: sample;

function initialiseStores(store: Store<any>): void {
    Sample = getModule(sample, store);
}

export { initialiseStores, Sample };
