(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/node/relaunch-button/private/update-relaunch-buttons-data.js
  function getRelaunchButtonsData(node) {
    const pluginData = node.getPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY);
    if (pluginData === "") {
      return {};
    }
    return JSON.parse(pluginData);
  }
  function setRelaunchButtonsData(node, relaunchButtonsData) {
    if (Object.keys(relaunchButtonsData).length === 0) {
      node.setPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY, "");
      return;
    }
    node.setPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY, JSON.stringify(relaunchButtonsData));
  }
  var RELAUNCH_BUTTONS_PLUGIN_DATA_KEY;
  var init_update_relaunch_buttons_data = __esm({
    "node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/node/relaunch-button/private/update-relaunch-buttons-data.js"() {
      RELAUNCH_BUTTONS_PLUGIN_DATA_KEY = "relaunchButtons";
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/node/relaunch-button/set-relaunch-button.js
  function setRelaunchButton(node, relaunchButtonId, options = { description: "" }) {
    const relaunchButtonsData = __spreadProps(__spreadValues({}, getRelaunchButtonsData(node)), {
      [relaunchButtonId]: options.description
    });
    setRelaunchButtonsData(node, relaunchButtonsData);
    node.setRelaunchData(relaunchButtonsData);
  }
  var init_set_relaunch_button = __esm({
    "node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/node/relaunch-button/set-relaunch-button.js"() {
      init_update_relaunch_buttons_data();
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, options);
  }
  var init_ui = __esm({
    "node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_set_relaunch_button();
      init_ui();
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  async function main_default() {
    setRelaunchButton(figma.currentPage, "designToolkit", {
      description: "Tool Kit Automations"
    });
    once("CREATE_PAGES", function() {
      const pages = [
        {
          name: "\u{1F4D9} COVER",
          node: "PAGE",
          title: "Cover"
        },
        { name: "-------------------------------", title: "", node: "PAGE" },
        {
          name: "\u{1F4DD} NOTES",
          node: "PAGE",
          title: "Notes",
          description: "Version History, Dev Handoff"
        },
        {
          name: "    \u21B3 Version History",
          node: "PAGE",
          title: "Version History",
          description: "Version Histroy"
        },
        {
          name: "    \u21B3 Dev Handoff",
          node: "PAGE",
          title: "Dev Handoff",
          description: "Dev Handoff"
        },
        { name: "-------------------------------", title: "", node: "PAGE" },
        {
          name: "\u{1F512} CLIENT REVIEW",
          node: "PAGE",
          title: "Client Review",
          description: "Page for Cleint Reviews"
        },
        {
          name: "    \u21B3 \u{1F7E2} - xx.xx.xxxx",
          node: "PAGE",
          title: "Status and Date",
          description: "Status and Date for Reviews"
        },
        { name: "-------------------------------", title: "", node: "PAGE" },
        {
          name: "\u{1F4C8} UX",
          node: "PAGE",
          title: "UX",
          description: "Research, Exploration, User Flows, Wireframes"
        },
        {
          name: "    \u21B3 Research/Documents",
          node: "PAGE",
          title: "Research/Documnets",
          description: "Research,Documents"
        },
        {
          name: "    \u21B3 Explorations",
          node: "PAGE",
          title: "Explorations",
          description: "Explorations"
        },
        {
          name: "    \u21B3 User Flows",
          node: "PAGE",
          title: "User Flows",
          description: "User Flows"
        },
        {
          name: "    \u21B3 Wireframes",
          node: "PAGE",
          title: "Wireframes",
          description: "Wireframes"
        },
        {
          name: "        \u21B3 R1 - XX.XX.XXXX",
          node: "PAGE",
          title: "Round 1 Wireframes",
          description: "Round 1 Wireframes"
        },
        { name: "-------------------------------", node: "PAGE" },
        {
          name: "\u{1F3A8} DESIGN / PROTOTYPE",
          node: "PAGE",
          title: "Design / Prototype",
          description: "Designs and Prototypes"
        },
        {
          name: "    \u21B3 Client Review R1 - XX.XX.XXXX",
          node: "PAGE",
          title: "Client Review R1",
          description: "Designs Client Review R1"
        },
        { name: "-------------------------------", node: "PAGE" },
        {
          name: "\u{1F5BC}\uFE0F UI KIT",
          node: "PAGE",
          title: "UI KIT",
          description: "UI Kit"
        },
        {
          name: "    \u21B3 Components",
          node: "PAGE",
          title: "Components",
          description: "Local Components"
        },
        {
          name: "    \u21B3 Templates",
          node: "PAGE",
          title: "Templates",
          description: "Templates"
        },
        { name: "-------------------------------", node: "PAGE" },
        {
          name: "\u{1F5C2}\uFE0F ANCILLARY",
          node: "PAGE",
          title: "Ancillary",
          description: "Ancillary"
        },
        {
          name: "    \u21B3 Future",
          node: "PAGE",
          title: "Future",
          description: "Future"
        },
        {
          name: "    \u21B3 Archive",
          node: "PAGE",
          title: "Archive",
          description: "Archive"
        },
        { name: "-------------------------------", node: "PAGE" },
        {
          name: "\u26AA\uFE0F\u{1F7E1}\u{1F7E0}\u{1F534}\u{1F7E2} <- Use for Status",
          node: "PAGE",
          title: "Status",
          description: "Status Symbols"
        }
      ];
      figma.notify("Building template", { timeout: Infinity });
      async function loadFont() {
        await figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
      }
      function insertTitle(pageName) {
        let matchPage = pages.filter((page) => page.name === pageName)[0];
      }
      let coverComponent = null;
      async function getCoverComponent() {
        const coverComponentKey = "e53308fac052fcb551d0c808d67ed24c0b708848";
        const instance = await figma.importComponentByKeyAsync(coverComponentKey);
        coverComponent = instance;
      }
      let statusComponent = null;
      async function getStatusComponent() {
        const statusComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78";
        const instance = await figma.importComponentByKeyAsync(
          statusComponentKey
        );
        statusComponent = instance;
      }
      let versionComponent = null;
      async function getVersionComponent() {
        const versionComponentKey = "38d0e7c41e2bd196f438a3c96f2edcc6f323b1be";
        const instance = await figma.importComponentByKeyAsync(
          versionComponentKey
        );
        versionComponent = instance;
      }
      let devComponent = null;
      async function getDevComponent() {
        const devComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78";
        const instance = await figma.importComponentByKeyAsync(devComponentKey);
        devComponent = instance;
      }
      let logoComponent = null;
      async function getLogoComponent() {
        const logoComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78";
        const instance = await figma.importComponentByKeyAsync(logoComponentKey);
        logoComponent = instance;
      }
      let linkComponent = null;
      async function getLinkComponent() {
        const linkComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78";
        const instance = await figma.importComponentByKeyAsync(linkComponentKey);
        linkComponent = instance;
      }
      let statusKeyComponent = null;
      async function getStatusKeyComponent() {
        const statusKeyComponent2 = "947a0e33331b416c82b7275e058eb4d5dde3f045";
        const instance = await figma.importComponentByKeyAsync(
          statusKeyComponent2
        );
        linkComponent = instance;
      }
      const defaultPage = figma.currentPage;
      console.log("Stored default page:", defaultPage.name, defaultPage.id);
      Promise.all([
        getCoverComponent(),
        getStatusComponent(),
        getVersionComponent(),
        getDevComponent(),
        getLogoComponent(),
        getLinkComponent(),
        loadFont()
      ]).then(async () => {
        console.log("%cFonts and components loaded", "color:green");
        let createdPages = [];
        pages.forEach((page) => {
          const newPage = figma.createPage();
          newPage.name = page.name;
          if (newPage.name !== "\u{1F4D9} COVER") {
            figma.currentPage = newPage;
            insertTitle(page.name);
          }
          createdPages.push(newPage);
        });
        console.log("%cPages built", "color:green");
        const coverPage = createdPages.find((page) => page.name === "\u{1F4D9} COVER");
        if (coverPage) {
          figma.currentPage = coverPage;
          if (coverComponent) {
            const coverInstance = coverComponent.createInstance();
            coverPage.appendChild(coverInstance);
            coverInstance.x = 0;
            coverInstance.y = 0;
            figma.currentPage.backgrounds = [{
              type: "SOLID",
              color: { r: 0.2, g: 0.2, b: 0.2 }
            }];
            figma.viewport.scrollAndZoomIntoView([coverInstance]);
          }
          figma.currentPage = coverPage;
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
        console.log("Active page before removal:", figma.currentPage.name, figma.currentPage.id);
        if (defaultPage.id !== figma.currentPage.id) {
          console.log("Removing stored default page:", defaultPage.name);
          defaultPage.remove();
        } else {
          console.warn("Default page is still active; cannot remove.");
        }
        const pageToRemove = figma.root.children.find(
          (page) => page.name === "Page 1" && page.id !== figma.currentPage.id
        );
        if (pageToRemove) {
          console.log("Removing 'Page 1' by name:", pageToRemove.name);
          pageToRemove.remove();
        } else {
          console.warn("'Page 1' not found or it is active.");
        }
        figma.closePlugin("Design Toolkit template applied");
      });
    });
    showUI({
      width: 320,
      height: 320
    });
  }
  var init_main = __esm({
    "src/main.ts"() {
      "use strict";
      init_lib();
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"], "designToolkit": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = typeof figma.command === "undefined" || figma.command === "" ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();
