import { d as _export_sfc, _ as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './pngegg-cb7c62f3.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img id="img"${ssrRenderAttr("src", _imports_0)} alt="Innovate Ventures"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            id: "img",
            src: _imports_0,
            alt: "Innovate Ventures"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/people",
    class: "links"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`PEOPLE`);
      } else {
        return [
          createTextVNode("PEOPLE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "links"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`PROJECTS`);
      } else {
        return [
          createTextVNode("PROJECTS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/areas",
    class: "links"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`AREAS`);
      } else {
        return [
          createTextVNode("AREAS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "links"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ABOUT US`);
      } else {
        return [
          createTextVNode("ABOUT US")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "links"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CONTACT US`);
      } else {
        return [
          createTextVNode("CONTACT US")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-container"><div class="footer-logo"><img id="foto"${ssrRenderAttr("src", _imports_0)} alt="Innovate Ventures"><h3>Innovate Ventures</h3></div><div class="footer-contact"><h4>Contact Us</h4><p>123 Innovation Street, Cityville</p><p>+1 123-456-7890</p><p>info@innovateventures.com</p></div></div><div class="footer-bottom"><p>\xA9<b>2023 Innovate Ventures. All rights reserved.</b><h4>Innovate Ventures</h4></p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_TheFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-8b24c618.mjs.map
