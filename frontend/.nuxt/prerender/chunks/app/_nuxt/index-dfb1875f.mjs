import { b as buildAssetsURL } from '../../renderer.mjs';
import { b as useRuntimeConfig, u as useHead, _ as __nuxt_component_0$1 } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps, withCtx, createTextVNode } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useFetch } from './fetch-1d2059a0.mjs';
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5 } from './sfondo-3204fbea.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/devalue/index.js';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/klona/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/radix3/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/@unhead/shared/dist/index.mjs';

const _sfc_main$1 = {
  __name: "CardArea",
  __ssrInlineRender: true,
  props: ["title", "link", "imm_link"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-area" }, _attrs))}><div class="image-container"><img class="img"${ssrRenderAttr("src", __props.imm_link)} alt=""></div><span class="title">${ssrInterpolate(__props.title)}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "linkstyle2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`see more information`);
          } else {
            return [
              createTextVNode("see more information")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _imports_0 = "" + buildAssetsURL("invest.adf3e50a.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: areas } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/areas", "$Stmmz1SXB6")), __temp = await __temp, __restore(), __temp);
    const getSrc = (name) => {
      const path = `/assets/img/${name}.jpeg`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/Economy.jpeg": __vite_glob_0_0, "/assets/img/Health.jpeg": __vite_glob_0_1, "/assets/img/Tourism.jpeg": __vite_glob_0_2, "/assets/img/innov.jpeg": __vite_glob_0_3, "/assets/img/investment.jpeg": __vite_glob_0_4, "/assets/img/sfondo.jpeg": __vite_glob_0_5 });
      return modules[path].default;
    };
    useHead({
      title: "All areas - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "All areas page, the 3 main areas in which we invest"
        },
        {
          name: "keywords",
          content: "areas, economy, tourism, healthcare"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardArea = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="cont-ar1"><div class="image2"><img id="a1"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="aree"><h1>Areas of investment</h1><h3 style="${ssrRenderStyle({ "margin-top": "-15px" })}">At Innovate Ventures, we are driven by a strong belief in the power of innovation and the transformative potential of visionary entrepreneurs</h3></div></div><div class="sottot"><h2> We have carefully chosen our areas of investment to strategically position ourselves for long-term success and impactful returns. We recognize that focusing our efforts on specific sectors allows us to develop a deep expertise and a comprehensive understanding of the unique challenges and opportunities within those industries. This focused approach enables us to identify and support the most promising startups, providing them with the necessary resources, guidance, and capital to thrive and disrupt their respective markets. </h2></div><div id="card-container"><!--[-->`);
      ssrRenderList(unref(areas), (area) => {
        _push(ssrRenderComponent(_component_CardArea, {
          title: area.name,
          link: "/areas/" + area.id,
          imm_link: getSrc(area.name)
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/areas/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-dfb1875f.mjs.map
