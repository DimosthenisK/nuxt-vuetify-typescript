<template>
    <v-app dark>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            <v-list>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="miniVariant = !miniVariant"
                            >mdi-{{
                                `chevron-${miniVariant ? 'right' : 'left'}`
                            }}</v-icon
                        >
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Close</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="clipped" fixed app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title v-text="title" />
            <v-spacer />
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on">
                        <v-icon class="pr-2">mdi-account-circle</v-icon>
                        Username
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>Log Out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; Copyright 2019</span>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class DefaultLayout extends Vue {
    data() {
        return {
            clipped: true,
            drawer: true,
            fixed: false,
            items: [
                {
                    icon: 'mdi-food',
                    title: 'Index',
                    to: '/'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Sample'
        };
    }
}
</script>
