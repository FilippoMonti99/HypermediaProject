import { d as _export_sfc, _ as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const SmallCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: [
    "title",
    "subtitle",
    "link"
  ]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cardina" }, _attrs))}><span class="title">${ssrInterpolate($props.title)}</span><span class="subtitle">${ssrInterpolate($props.subtitle)}</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: $props.link }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="small-butt"${_scopeId}>Go to the page</button>`);
      } else {
        return [
          createVNode("button", { class: "small-butt" }, "Go to the page")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SmallCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=SmallCard-567dbcdc.js.map
