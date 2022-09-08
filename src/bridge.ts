/**
 * 3dgis bridge for every where
 * @example
 *
 */
(function () {
  window.Gis3DBridge = {
    listeners: {},
    addEventListener(event, el, handler) {
      const script = document.createElement('script');
      script.language = 'javascript';
      script.type = 'text/javascript';
      script.event = event;
      script.setAttribute('for', el.id);
      script.text = `window.Gis3DBridge.fire('${event}', arguments)`;
      document.body.appendChild(script);
      // eslint-disable-next-line
      el.Gis3DBridge = script;
      this.listeners[event] = handler;
    },
    fire(event, args) {
      const handler = this.listeners[event];
      handler && handler.apply(this, args);
    },
    removeEventListener(event, el) {
      document.removeChild(el.Gis3DBridge);
      delete this.listeners[event];
      // eslint-disable-next-line
      delete el.Gis3DBridge;
    },
  };
})();
