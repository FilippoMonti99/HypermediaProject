import { _ as __nuxt_component_1 } from "./CardLoc-5e0ec9a2.js";
import { b as useRuntimeConfig, u as useHead } from "../server.mjs";
import "./index-e12b288f.js";
import { withAsyncContext, computed, unref, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-1d2059a0.js";
import "destr";
import "devalue";
import "klona";
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5, f as __vite_glob_0_6, g as __vite_glob_0_7, h as __vite_glob_0_8, i as __vite_glob_0_9, j as __vite_glob_0_10, k as __vite_glob_0_11, l as __vite_glob_0_12, m as __vite_glob_0_13, n as __vite_glob_0_14 } from "./Wearable Health Monitoring-3b68839e.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "ohash";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/projects", "$gUMxFkRIxZ")), __temp = await __temp, __restore(), __temp);
    const filtered = computed(() => {
      const arr = [];
      for (let loc of projects.value) {
        if (loc.most == 1)
          arr.push(loc);
      }
      return arr;
    });
    const getSrc = (name) => {
      const path = `/assets/img/projects/${name}.jpeg`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/projects/AI-Driven Drug Discovery.jpeg": __vite_glob_0_0, "/assets/img/projects/Adventure Tourism Tech.jpeg": __vite_glob_0_1, "/assets/img/projects/Clean Energy Innovators.jpeg": __vite_glob_0_2, "/assets/img/projects/Destination Management Platform.jpeg": __vite_glob_0_3, "/assets/img/projects/Digital Mental Health.jpeg": __vite_glob_0_4, "/assets/img/projects/E-commerce Disruptor.jpeg": __vite_glob_0_5, "/assets/img/projects/FinTech Revolution.jpeg": __vite_glob_0_6, "/assets/img/projects/Personalized Medicine Diagnostics.jpeg": __vite_glob_0_7, "/assets/img/projects/Smart Manufacturing.jpeg": __vite_glob_0_8, "/assets/img/projects/Supply Chain Optimization.jpeg": __vite_glob_0_9, "/assets/img/projects/Sustainable Accommodation.jpeg": __vite_glob_0_10, "/assets/img/projects/Telemedicine Platform.jpeg": __vite_glob_0_11, "/assets/img/projects/Travel Experience Aggregator.jpeg": __vite_glob_0_12, "/assets/img/projects/Virtual Travel Experiences.jpeg": __vite_glob_0_13, "/assets/img/projects/Wearable Health Monitoring.jpeg": __vite_glob_0_14 });
      return modules[path].default;
    };
    useHead({
      title: "Most relevant projects - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "most relevant projects, our top 5 ranked projects"
        },
        {
          name: "keywords",
          content: "most, relevant, projects, top"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardLoc = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="rank"><h1> Top ranked projects</h1><h6> At Innovate Ventures, we are committed to identifying and supporting innovative projects that have the potential to make a significant impact in the economy, health, and tourism sectors. Our team of experts has meticulously evaluated numerous ventures and handpicked a selection of top-ranked projects that exemplify groundbreaking ideas and promising growth potential.</h6></div><div id="card-container"><!--[-->`);
      ssrRenderList(unref(filtered), (project) => {
        _push(ssrRenderComponent(_component_CardLoc, {
          title: project.name,
          subtitle: project.field,
          link: "/projects/" + project.id,
          img_link: getSrc(project.name)
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mostrelevant/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-21625dfa.js.map
