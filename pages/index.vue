<template> </template>

<script lang="ts">
import { Sample } from '~/store';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Context } from '@nuxt/types';

@Component({
    middleware: ['base'],
    asyncData: async (context: Context) => {
        return {};
    }
})
export default class IndexPage extends Vue {}
</script>
