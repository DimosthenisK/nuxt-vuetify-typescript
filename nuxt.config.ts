import colors from 'vuetify/es5/util/colors';
import { Configuration } from '@nuxt/types';
import settings from './settings';
let fSettings =
    //@ts-ignore
    settings[process.env.NODE_ENV ? process.env.NODE_ENV : 'development'];

const config: Configuration = {
    env: {
        ...fSettings
    },
    server: {
        port: fSettings.port
    },
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'SampleProject',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/api', '~/plugins/charts'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        treeShake: true,
        customVariables: ['~/assets/variables.scss'],
        breakpoint: {
            thresholds: {
                xs: 0,
                sm: 425,
                md: 768 + 16, //16px for the scrollbar
                lg: 1024 + 16 //16px for the scrollbar
            }
        },
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};

export default config;
