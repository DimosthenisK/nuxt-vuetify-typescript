import axios from '~/plugins/api';
import charts from '~/plugins/charts';
export const plugins = [axios, charts];
export * from '~/utils/axios-accessor';
