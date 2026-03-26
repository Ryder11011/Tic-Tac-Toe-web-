import { injectGlobalWebcomponentCss } from 'Frontend/generated/jar-resources/theme-util.js';

import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import '@vaadin/button/src/vaadin-button.js';
import '@vaadin/tooltip/src/vaadin-tooltip.js';
import 'Frontend/generated/jar-resources/disableOnClickFunctions.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import 'Frontend/generated/jar-resources/ReactRouterOutletElement.tsx';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '3f37e2d1c34f0f2a4e648f46db2f068dda0c77f13925a5e84e9fe76d0352b725') {
    pending.push(import('./chunks/chunk-8e5906de2159af03f63beaa676460c6a15ebcba8faeb974eeda7d1e32ea4c583.js'));
  }
  if (key === '6aa430068943e26e89c837e0a5e3a93fb4375cb9bd094a3c6755ae030ab49a5d') {
    pending.push(import('./chunks/chunk-8e5906de2159af03f63beaa676460c6a15ebcba8faeb974eeda7d1e32ea4c583.js'));
  }
  return Promise.all(pending);
}
window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}