import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { u as useHead } from "../server.mjs";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const _imports_0 = "" + __buildAssetsURL("headquarter.6eaed29f.png");
const contact_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact us - Innovate Ventures",
      meta: [
        {
          name: "description",
          content: "Contac us page: our e-mail, adress, telephone number and a form to send us an e-mail directly from this page"
        },
        {
          name: "keywords",
          content: "contact, name, surname, e-mail, telephone "
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}><form><div class="form-cont"><div class="text-form"><h1>Contact us</h1><h4>For further information</h4></div><div class="act-form"><div><label for="name">Name &amp; Surname</label><input type="text" id="name" placeholder="Name &amp; Surname" required></div><div><label for="mail">E-mail</label><input type="email" id="mail" placeholder="E-mail" required></div><div id="message-div"><label for="message">Message</label><textarea id="message" placeholder="Write your message here"></textarea></div><button class="contbutt">Send Message</button></div></div></form><div class="cont-cont"><div class="context"><h1>Headquarter</h1><h4>123 Innovation Street, Cityville </h4><h4>+1 123-456-7890</h4><h4>info@innovateventures.com</h4></div><div class="image2"><img id="cont1"${ssrRenderAttr("src", _imports_0)} alt=""></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-3759fd60.js.map
