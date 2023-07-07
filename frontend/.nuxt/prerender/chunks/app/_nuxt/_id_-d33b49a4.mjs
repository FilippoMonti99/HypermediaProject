import { a as useRoute, b as useRuntimeConfig, u as useHead, d as _export_sfc, _ as __nuxt_component_0$1 } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps, withCtx, createVNode } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_1 } from './SmallCard-567dbcdc.mjs';
import { u as useFetch } from './fetch-1d2059a0.mjs';
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5, f as __vite_glob_0_6, g as __vite_glob_0_7, h as __vite_glob_0_8, i as __vite_glob_0_9, j as __vite_glob_0_10, k as __vite_glob_0_11, l as __vite_glob_0_12, m as __vite_glob_0_13, n as __vite_glob_0_14 } from './Wearable Health Monitoring-3b68839e.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/klona/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/radix3/dist/index.mjs';
import '../../renderer.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/devalue/index.js';

const _sfc_main$1 = {
  props: [
    "title",
    "link"
  ]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cardella" }, _attrs))}><span class="title">${ssrInterpolate($props.title)}</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: $props.link }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="small-butt"${_scopeId}> Go to the page</button>`);
      } else {
        return [
          createVNode("button", { class: "small-butt" }, " Go to the page")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SmallCardArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/projects/" + id, "$NLv8nVzATR")), __temp = await __temp, __restore(), __temp);
    const getSrc = (name) => {
      const path = `/assets/img/projects/${name}.jpeg`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/projects/AI-Driven Drug Discovery.jpeg": __vite_glob_0_0, "/assets/img/projects/Adventure Tourism Tech.jpeg": __vite_glob_0_1, "/assets/img/projects/Clean Energy Innovators.jpeg": __vite_glob_0_2, "/assets/img/projects/Destination Management Platform.jpeg": __vite_glob_0_3, "/assets/img/projects/Digital Mental Health.jpeg": __vite_glob_0_4, "/assets/img/projects/E-commerce Disruptor.jpeg": __vite_glob_0_5, "/assets/img/projects/FinTech Revolution.jpeg": __vite_glob_0_6, "/assets/img/projects/Personalized Medicine Diagnostics.jpeg": __vite_glob_0_7, "/assets/img/projects/Smart Manufacturing.jpeg": __vite_glob_0_8, "/assets/img/projects/Supply Chain Optimization.jpeg": __vite_glob_0_9, "/assets/img/projects/Sustainable Accommodation.jpeg": __vite_glob_0_10, "/assets/img/projects/Telemedicine Platform.jpeg": __vite_glob_0_11, "/assets/img/projects/Travel Experience Aggregator.jpeg": __vite_glob_0_12, "/assets/img/projects/Virtual Travel Experiences.jpeg": __vite_glob_0_13, "/assets/img/projects/Wearable Health Monitoring.jpeg": __vite_glob_0_14 });
      return modules[path].default;
    };
    useHead({
      title: "Project - Innovate Ventures ",
      meta: [
        {
          name: "description",
          content: "single project page, information about a specific project"
        },
        {
          name: "keywords",
          content: "project, supervisor, area"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SmallCardArea = __nuxt_component_0;
      const _component_SmallCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="info-group-project"><div><img id="proj-imm"${ssrRenderAttr("src", getSrc(unref(project).name))} alt=""></div><div id="data-container"><p class="data-project"><b>Name:</b> <span>${ssrInterpolate(unref(project).name)}</span></p><p class="data-project"><b>Area:</b> <span>${ssrInterpolate(unref(project).field)}</span></p></div></div><p id="description-project">${unref(project).description}</p><div class="small-cards-pair"><div class="carta-1"><h1 id="proj">Area:</h1><div id="project-card-container">`);
      _push(ssrRenderComponent(_component_SmallCardArea, {
        title: unref(project).area.name,
        link: "/areas/" + unref(project).area.id
      }, null, _parent));
      _push(`</div></div><div class="carta-2"><h1 id="proj">Supervisor:</h1><div id="project-card-container">`);
      _push(ssrRenderComponent(_component_SmallCard, {
        title: unref(project).person.name,
        subtitle: unref(project).person.role,
        link: "/people/" + unref(project).person.id
      }, null, _parent));
      _push(`</div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-d33b49a4.mjs.map
