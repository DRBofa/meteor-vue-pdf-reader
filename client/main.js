import Vue from "vue";
import App from "./App.vue";
import "./main.html";
import pdfPreview from './components/Index.vue';

const VuePdfReader = {
    install: function(vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue;
        }
        Vue.component('VuePdfReader', pdfPreview);
    }
}

if (!Promise.map) {
    Promise.map = function(vals, cb) {
        return Promise.all(
            vals.map(function(val, index) {
                return new PromisePromise(function(resolve) {
                    cb(val, index, resolve);
                })
            })
        )
    }
}


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePdfReader)
}

export default VuePdfReader

Meteor.startup(() => {
    new Vue({
        el: "#app",
        ...App
    });
});