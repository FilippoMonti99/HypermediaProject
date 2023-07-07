import { _ as __nuxt_component_1 } from "./SmallCard-567dbcdc.js";
import { a as useRoute, b as useRuntimeConfig, u as useHead } from "../server.mjs";
import "./index-e12b288f.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-1d2059a0.js";
import "destr";
import "devalue";
import "klona";
import { n as newLineOnFullStop } from "./text-functions-5c023cb7.js";
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5 } from "./sfondo-3204fbea.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
const _id__vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: area } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/areas/" + id, "$LpZQ2Apvba")), __temp = await __temp, __restore(), __temp);
    const getSrc = (name) => {
      const path = `/assets/img/${name}.jpeg`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/Economy.jpeg": __vite_glob_0_0, "/assets/img/Health.jpeg": __vite_glob_0_1, "/assets/img/Tourism.jpeg": __vite_glob_0_2, "/assets/img/innov.jpeg": __vite_glob_0_3, "/assets/img/investment.jpeg": __vite_glob_0_4, "/assets/img/sfondo.jpeg": __vite_glob_0_5 });
      return modules[path].default;
    };
    useHead({
      title: "Area - Innovate Ventures ",
      meta: [
        {
          name: "description",
          content: "single area page, information about that spaific area, projects related"
        },
        {
          name: "keywords",
          content: "area, projects"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SmallCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="info-group-area"><div><img id="area-imm"${ssrRenderAttr("src", getSrc(unref(area).name))} alt=""></div><div id="data-container-area"><p class="data-area"><span>${ssrInterpolate(unref(area).name)}</span></p></div></div><p id="description-area">${("newLineOnFullStop" in _ctx ? _ctx.newLineOnFullStop : unref(newLineOnFullStop))(unref(area).description)}</p><div id="person-card-container"><!--[-->`);
      ssrRenderList(unref(area).projects, (project) => {
        _push(ssrRenderComponent(_component_SmallCard, {
          link: "/projects/" + project.id,
          title: project.name,
          subtitle: project.field
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/areas/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-6b2d4d3d.js.map
