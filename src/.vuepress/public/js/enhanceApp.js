import Vue from 'vue';

import CustomComponent from '../../components/landing.vue';

export default ({ Vue }) => {
    Vue.component('custom-component', CustomComponent);
};