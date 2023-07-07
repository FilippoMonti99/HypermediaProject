import { _ as __nuxt_component_1 } from "./SmallCard-567dbcdc.js";
import { a as useRoute, b as useRuntimeConfig, u as useHead } from "../server.mjs";
import "./index-e12b288f.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-1d2059a0.js";
import "destr";
import "devalue";
import "klona";
import { n as newLineOnFullStop } from "./text-functions-5c023cb7.js";
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5, f as __vite_glob_0_6, g as __vite_glob_0_7, h as __vite_glob_0_8, i as __vite_glob_0_9 } from "./Steven Lee-bef04e01.js";
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
    const { data: person } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().public.serverURL + "/people/" + id, "$ZLTXWWi2cH")), __temp = await __temp, __restore(), __temp);
    const getSrc = (name) => {
      const path = `/assets/img/people/${name}.jpeg`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/people/Anna Nguyen.jpeg": __vite_glob_0_0, "/assets/img/people/David Rodriguez.jpeg": __vite_glob_0_1, "/assets/img/people/Emily Chen.jpeg": __vite_glob_0_2, "/assets/img/people/Jane Doe.jpeg": __vite_glob_0_3, "/assets/img/people/John Smith.jpeg": __vite_glob_0_4, "/assets/img/people/Lisa Williams.jpeg": __vite_glob_0_5, "/assets/img/people/Mark Johnson.jpeg": __vite_glob_0_6, "/assets/img/people/Michael Brown.jpeg": __vite_glob_0_7, "/assets/img/people/Sarah Thompson.jpeg": __vite_glob_0_8, "/assets/img/people/Steven Lee.jpeg": __vite_glob_0_9 });
      return modules[path].default;
    };
    useHead({
      title: "Person - Innovate Ventures ",
      meta: [
        {
          name: "description",
          content: "single person page, all information about the current job/position of a specific pearson"
        },
        {
          name: "keywords",
          content: "person, projects, supervisor, position, job"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SmallCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="info-group-person"><div><img id="person-imm"${ssrRenderAttr("src", getSrc(unref(person).name))} alt=""></div><div id="data-container-person"><p class="data-person"><b>Name:</b> <span>${ssrInterpolate(unref(person).name)}</span></p><p class="data-person"><b>Role:</b> <span>${ssrInterpolate(unref(person).role)}</span></p><p class="data-person"><b>Age:</b> <span>${ssrInterpolate(unref(person).age)}</span></p></div></div><p id="description-person">${("newLineOnFullStop" in _ctx ? _ctx.newLineOnFullStop : unref(newLineOnFullStop))(unref(person).description)}</p><h1 id="proj-person">Projects supervised:</h1><div id="person-card-container"><!--[-->`);
      ssrRenderList(unref(person).projects, (project) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-60338673.js.map
