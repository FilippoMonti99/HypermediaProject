import { b as buildAssetsURL } from '../../renderer.mjs';
import { u as useHead, _ as __nuxt_component_0$1 } from '../server.mjs';
import { withCtx, createVNode, useSSRContext } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './pngegg-cb7c62f3.mjs';
import { _ as _imports_0$1 } from './team-cf370b7e.mjs';
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

const _imports_1 = "" + buildAssetsURL("ideas.3c517b1d.png");
const _imports_3 = "" + buildAssetsURL("proj.d87b4dae.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "see every information you want about Venture Innovative starting from our Home page"
        },
        {
          name: "keywords",
          content: "Venture, Innovative, VC"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="cont"><div class="tit"><h1>INNOVATE VENTURES</h1><h2 style="${ssrRenderStyle({ "margin-top": "-15px" })}">Leading investment firm specialized in funding startups</h2></div><div class="image2"><img id="uno"${ssrRenderAttr("src", _imports_0)} alt="Innovate Ventures"></div></div><div class="secondo"><div class="image2"><img id="sec"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="tit2"><h1> We believe in supporting visionary founders who are passionate about disrupting industries and solving complex challenges </h1></div></div><div class="terzo"><div class="tit3"><h1> Our experienced team brings a wealth of industry expertise and a vast network of connections to help our portfolio companies accelerate their growth and achieve their full potential </h1></div><div class="image2"><img id="ter"${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="quarto"><div class="image2"><img id="qua"${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="tit4"><h1> Our investment focus spans across sectors such as technology, healthcare, consumer products, fintech, and clean energy, among others </h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/mostrelevant",
        class: "linksyle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="mostrel"${_scopeId}><h1${_scopeId}> Our top ranked projects </h1></div>`);
          } else {
            return [
              createVNode("div", { id: "mostrel" }, [
                createVNode("h1", null, " Our top ranked projects ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4bcf2b7d.mjs.map
