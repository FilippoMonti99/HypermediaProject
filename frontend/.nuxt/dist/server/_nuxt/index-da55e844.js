import { _ as __nuxt_component_0$1, b as useRuntimeConfig, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./index-e12b288f.js";
import { u as useFetch } from "./fetch-1d2059a0.js";
import "destr";
import "devalue";
import "klona";
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5, f as __vite_glob_0_6, g as __vite_glob_0_7, h as __vite_glob_0_8, i as __vite_glob_0_9 } from "./Steven Lee-bef04e01.js";
import { _ as _imports_0 } from "./team-cf370b7e.js";
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
const Card_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: ["title", "subtitle", "link", "img_link"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="image-container"><img class="img"${ssrRenderAttr("src", __props.img_link)} alt=""></div><span class="title">${ssrInterpolate(__props.title)}</span><span class="subtitle">${ssrInterpolate(__props.subtitle)}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "linkstyle6"
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
      _push(`<div class="buttons"><button class="primary"> Message </button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: people } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people", "$86ry0ThwyT")), __temp = await __temp, __restore(), __temp);
    const getSrc = (name) => {
      const path = `/assets/img/people/${name}.jpeg`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/people/Anna Nguyen.jpeg": __vite_glob_0_0, "/assets/img/people/David Rodriguez.jpeg": __vite_glob_0_1, "/assets/img/people/Emily Chen.jpeg": __vite_glob_0_2, "/assets/img/people/Jane Doe.jpeg": __vite_glob_0_3, "/assets/img/people/John Smith.jpeg": __vite_glob_0_4, "/assets/img/people/Lisa Williams.jpeg": __vite_glob_0_5, "/assets/img/people/Mark Johnson.jpeg": __vite_glob_0_6, "/assets/img/people/Michael Brown.jpeg": __vite_glob_0_7, "/assets/img/people/Sarah Thompson.jpeg": __vite_glob_0_8, "/assets/img/people/Steven Lee.jpeg": __vite_glob_0_9 });
      return modules[path].default;
    };
    useHead({
      title: "All people - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "All people page, the team that currently work in our firm"
        },
        {
          name: "keywords",
          content: "person, team, people"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="cont-peo1"><div class="peop1"><h1>Our team</h1><h3>At Innovate Ventures, our success is driven by the collective brilliance and diverse expertise of our exceptional team</h3></div><div class="image2"><img id="pe1"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="sottot-peo"><h2> Each member brings a unique set of skills, experiences, and perspectives, contributing to a dynamic and forward-thinking environment that fuels our ability to identify and support groundbreaking startups. Our team is led by visionary leaders who have a proven track record of success in entrepreneurship, investment, and strategic guidance. With their wealth of experience, they provide invaluable insights and strategic direction, ensuring that our investment decisions align with our long-term objectives and deliver exceptional returns. </h2></div><div id="card-container"><!--[-->`);
      ssrRenderList(unref(people), (person) => {
        _push(ssrRenderComponent(_component_Card, {
          title: person.name,
          subtitle: person.role,
          link: "/people/" + person.id,
          img_link: getSrc(person.name)
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-da55e844.js.map
