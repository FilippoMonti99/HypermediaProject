import { _ as __nuxt_component_1 } from './SmallCard-567dbcdc.mjs';
import { a as useRoute, b as useRuntimeConfig, u as useHead } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/index.mjs';
import { u as useFetch } from './fetch-1d2059a0.mjs';
import { n as newLineOnFullStop } from './text-functions-5c023cb7.mjs';
import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5, f as __vite_glob_0_6, g as __vite_glob_0_7, h as __vite_glob_0_8, i as __vite_glob_0_9 } from './Steven Lee-bef04e01.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-60338673.mjs.map
