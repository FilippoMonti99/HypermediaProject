import { b as buildAssetsURL } from '../../renderer.mjs';
import { useSSRContext, mergeProps } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/pippomonti99/Desktop/Hyper/progetto/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from '../server.mjs';
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
  __name: "TextImage",
  __ssrInlineRender: true,
  props: {
    isReverse: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    image: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "cont",
        class: { "info-group": !__props.isReverse, "reverse-info-group": __props.isReverse }
      }, _attrs))}><img id="tro"${ssrRenderAttr("src", __props.image)} alt=""><p class="desc">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TextImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const Health = "" + buildAssetsURL("Health.099aac07.png");
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Health
});
const innov = "" + buildAssetsURL("innov.c2c00ea0.png");
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: innov
});
const investment = "" + buildAssetsURL("investment.8359dda6.png");
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: investment
});
const logoecon = "" + buildAssetsURL("logoecon.cc9539fb.png");
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: logoecon
});
const logotour = "" + buildAssetsURL("logotour.5429ff80.png");
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: logotour
});
const pngegg = "" + buildAssetsURL("pngegg.4c817ab1.png");
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: pngegg
});
const startup = "" + buildAssetsURL("startup.2b22bf62.png");
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: startup
});
const img0 = "pngegg";
const img1 = "investment";
const img2 = "startup";
const img3 = "innov";
const img4 = "Health";
const img5 = "logoecon";
const img6 = "logotour";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const getSrc = (name) => {
      const path = `/assets/img/about/${name}.png`;
      const modules = /* @__PURE__ */ Object.assign({ "/assets/img/about/Health.png": __vite_glob_0_0, "/assets/img/about/innov.png": __vite_glob_0_1, "/assets/img/about/investment.png": __vite_glob_0_2, "/assets/img/about/logoecon.png": __vite_glob_0_3, "/assets/img/about/logotour.png": __vite_glob_0_4, "/assets/img/about/pngegg.png": __vite_glob_0_5, "/assets/img/about/startup.png": __vite_glob_0_6 });
      return modules[path].default;
    };
    useHead({
      title: "About us - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "About us page, brief information about who we are and in what we invest"
        },
        {
          name: "keywords",
          content: "about, economy, tourism, healthcare"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TextImage = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="firm"><h1>Our firm</h1>`);
      _push(ssrRenderComponent(_component_TextImage, {
        description: "Innovate Ventures is a leading venture capital firm dedicated to supporting and empowering early-stage and high-growth companies on their journey to success. With a passion for innovation and a commitment to nurturing entrepreneurial talent, we strive to make a lasting impact on the businesses we invest in and the industries they operate in. ",
        isReverse: true,
        image: getSrc(img0)
      }, null, _parent));
      _push(`</div><div class="history"><h1> Our History</h1>`);
      _push(ssrRenderComponent(_component_TextImage, {
        description: "Founded in 2005, our venture capital firm, Innovate Ventures, emerged as a result of a shared vision among a group of seasoned entrepreneurs and industry experts. With a passion for supporting innovation and driving technological advancements, they set out to establish a firm that would become a catalyst for groundbreaking ideas and transformative businesses.\n                                    The founders, led by John Smith, recognized the immense potential of emerging markets and the need for strategic investments to foster entrepreneurship and fuel economic growth. Drawing on their own experiences of building successful companies, they assembled a team of investors with diverse backgrounds in technology, finance, and business strategy. ",
        image: getSrc(img1)
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextImage, {
        description: "In the early years, Innovate Ventures focused on nurturing startups in the tech sector, providing capital, mentorship, and access to valuable networks. The firm quickly gained a reputation for its hands-on approach and commitment to helping entrepreneurs navigate the challenges of scaling their businesses. As Innovate Ventures expanded its portfolio, it began diversifying its investments across various industries, including finance, healthcare, energy, and tourism. This strategic shift allowed the firm to tap into new opportunities and support projects with high growth potential in different sectors.\n                                    Over the years, Innovate Ventures has established itself as a trusted partner for entrepreneurs seeking not only financial support but also strategic guidance and industry expertise. The firm's investment philosophy centers around identifying visionary founders, disruptive technologies, and scalable business models.",
        isReverse: true,
        image: getSrc(img2)
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextImage, {
        description: "Innovate Ventures has had several notable successes, with many of its portfolio companies achieving significant milestones, including successful IPOs, acquisitions by industry leaders, and global expansion. These successes have further solidified the firm's reputation and attracted a network of prominent investors and strategic partners. Today, Innovate Ventures continues to actively seek innovative projects that have the potential to shape industries and create lasting impact. With a dedicated team of investment professionals, the firm remains committed to supporting visionary entrepreneurs, driving technological advancements, and contributing to the growth and development of the entrepreneurial ecosystem.\n                                    Throughout its history, Innovate Ventures has remained true to its core values of integrity, collaboration, and entrepreneurship, fueling its mission to be at the forefront of innovation and drive positive change in the business world.",
        image: getSrc(img3)
      }, null, _parent));
      _push(`</div><div class="health"><h1> About Healtcare</h1>`);
      _push(ssrRenderComponent(_component_TextImage, {
        description: "With a deep understanding of the unique challenges and opportunities in the healthcare sector, our experienced team of investment professionals brings together a wealth of expertise, industry knowledge, and a robust network of strategic partners. We strive to identify and partner with exceptional entrepreneurs who are developing groundbreaking technologies, transformative therapies, digital health solutions, and disruptive business models.",
        isReverse: true,
        image: getSrc(img4)
      }, null, _parent));
      _push(`</div><div class="economy"><h1> About Economy</h1>`);
      _push(ssrRenderComponent(_component_TextImage, {
        description: "At Innovate Ventures, we believe that innovation is the key driver of economic growth. We actively seek out companies with disruptive business models, groundbreaking technologies, and novel approaches that have the potential to transform industries and create sustainable value. By investing in these visionary enterprises, we play a vital role in fueling economic expansion, driving job creation, and fostering entrepreneurial ecosystems.",
        image: getSrc(img5)
      }, null, _parent));
      _push(`</div><div class="tourism"><h1> About Tourism</h1>`);
      _push(ssrRenderComponent(_component_TextImage, {
        description: "Our investment philosophy is centered around supporting companies across various segments of the tourism industry, including travel technology, accommodations, experiences, destination marketing, and sustainable tourism initiatives. By partnering with innovative businesses in these areas, we aim to drive positive change, boost economic growth, and contribute to the overall development of the tourism ecosystem.",
        isReverse: true,
        image: getSrc(img6)
      }, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-0b530b5d.mjs.map
