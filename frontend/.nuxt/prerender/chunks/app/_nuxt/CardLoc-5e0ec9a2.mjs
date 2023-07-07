import { _ as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "CardLoc",
  __ssrInlineRender: true,
  props: ["title", "subtitle", "link", "img_link"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="image-container"><img class="img"${ssrRenderAttr("src", __props.img_link)} alt=""></div><span class="title">${ssrInterpolate(__props.title)}</span><span class="subtitle">${ssrInterpolate(__props.subtitle)}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "linkstyle11"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` see more information`);
          } else {
            return [
              createTextVNode(" see more information")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardLoc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=CardLoc-5e0ec9a2.mjs.map
