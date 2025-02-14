import {
  once,
  setRelaunchButton,
  showUI,
} from "@create-figma-plugin/utilities";

import { CreatePageHandler } from "./types";

export default async function () {
  setRelaunchButton(figma.currentPage, "designToolkit", {
    description: "Tool Kit Automations",
  });

  once<CreatePageHandler>("CREATE_PAGES", function () {
    // This is the list of pages to create in your document.
    const pages = [
      {
        name: "📙 COVER",
        node: "PAGE",
        title: "Cover"
      },
      { name: "-------------------------------", title: "", node: "PAGE" },
      {
        name: "📝 NOTES",
        node: "PAGE",
        title: "Notes",
        description: "Version History, Dev Handoff",
      },

      {
        name: "    ↳ Version History",
        node: "PAGE",
        title: "Version History",
        description: "Version Histroy",
      },
      {
        name: "    ↳ Dev Handoff",
        node: "PAGE",
        title: "Dev Handoff",
        description: "Dev Handoff",
      },
      { name: "-------------------------------", title: "", node: "PAGE" },
       {
        name: "🔒 CLIENT REVIEW",
        node: "PAGE",
        title: "Client Review",
        description: "Page for Cleint Reviews",
      },
             {
        name: "    ↳ 🟢 - xx.xx.xxxx",
        node: "PAGE",
        title: "Status and Date",
        description: "Status and Date for Reviews",
      },
         
      { name: "-------------------------------", title: "", node: "PAGE" },
       
      {
        name: "📈 UX",
        node: "PAGE",
        title: "UX",
        description: "Research, Exploration, User Flows, Wireframes",
      },
      {
        name: "    ↳ Research/Documents",
        node: "PAGE",
        title: "Research/Documnets",
        description: "Research,Documents",
      },
      {
        name: "    ↳ Explorations",
        node: "PAGE",
        title: "Explorations",
        description: "Explorations",
      },
      {
        name: "    ↳ User Flows",
        node: "PAGE",
        title: "User Flows",
        description: "User Flows",
      },
      {
        name: "    ↳ Wireframes",
        node: "PAGE",
        title: "Wireframes",
        description: "Wireframes",
      },
      {
        name: "        ↳ R1 - XX.XX.XXXX",
        node: "PAGE",
        title: "Round 1 Wireframes",
        description: "Round 1 Wireframes",
      },
      { name: "-------------------------------", node: "PAGE" },
      {
        name: "🎨 DESIGN / PROTOTYPE",
        node: "PAGE",
        title: "Design / Prototype",
        description: "Designs and Prototypes",
      },
      {
        name: "    ↳ Client Review R1 - XX.XX.XXXX",
        node: "PAGE",
        title: "Client Review R1",
        description: "Designs Client Review R1",
      },
      { name: "-------------------------------", node: "PAGE" },
      {
        name: "🖼️ UI KIT",
        node: "PAGE",
        title: "UI KIT",
        description: "UI Kit"
      },
      {
        name: "    ↳ Components",
        node: "PAGE",
        title: "Components",
        description: "Local Components"
      },
      {
        name: "    ↳ Templates",
        node: "PAGE",
        title: "Templates",
        description: "Templates"
      },
      { name: "-------------------------------", node: "PAGE" },
      {
        name: "🗂️ ANCILLARY",
        node: "PAGE",
        title: "Ancillary",
        description: "Ancillary"
      },
      {
        name: "    ↳ Future",
        node: "PAGE",
        title: "Future",
        description: "Future"
      },
      {
        name: "    ↳ Archive",
        node: "PAGE",
        title: "Archive",
        description: "Archive"
      },
      { name: "-------------------------------", node: "PAGE" },
      {
        name: "⚪️🟡🟠🔴🟢 <- Use for Status",
        node: "PAGE",
        title: "Status",
        description: "Status Symbols"
      }
    ];

    // Show a notification

    figma.notify("Building template", { timeout: Infinity });

    // Load any custom fonts required for editing text layers.
    // Figma developer console will advise you if you need to include any missing fonts.

    async function loadFont() {
      await figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
      await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
      await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
    }

    function insertTitle(pageName: string) {
      let matchPage = pages.filter((page) => page.name === pageName)[0];
    }

    // Setup your components for import into pages

    // Cover component
    let coverComponent: ComponentNode | null = null;

    async function getCoverComponent() {
      const coverComponentKey = "e53308fac052fcb551d0c808d67ed24c0b708848"; // Replace this with the Key for your cover component.
      const instance = await figma.importComponentByKeyAsync(coverComponentKey);
      coverComponent = instance;
    }

    // Title component 
    let statusComponent: ComponentNode | null = null;

    async function getStatusComponent() {
      const statusComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78"; // Replace this with the Key for your title component.
      const instance = await figma.importComponentByKeyAsync(statusComponentKey);
      statusComponent = instance;
    }

    // Example of a component to be imported
    let versionComponent: ComponentNode | null = null;

    async function getVersionComponent() {
      const versionComponentKey = "38d0e7c41e2bd196f438a3c96f2edcc6f323b1be"; // This is an example component, use this block as a reference when for importing additional components
      const instance = await figma.importComponentByKeyAsync(versionComponentKey);
      versionComponent = instance;
    }

    // Example of a component to be imported
    let devComponent: ComponentNode | null = null;

    async function getDevComponent() {
      const devComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78"; // This is an example component, use this block as a reference when for importing additional components
      const instance = await figma.importComponentByKeyAsync(devComponentKey);
      devComponent = instance;
    }

    // Example of a component to be imported
    let logoComponent: ComponentNode | null = null;

    async function getLogoComponent() {
      const logoComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78"; // This is an example component, use this block as a reference when for importing additional components
      const instance = await figma.importComponentByKeyAsync(logoComponentKey);
      logoComponent = instance;
    }

    // Example of a component to be imported
    let linkComponent: ComponentNode | null = null;

    async function getLinkComponent() {
      const linkComponentKey = "9067156dbb63fc0409f674307d168d39c1ca2e78"; // This is an example component, use this block as a reference when for importing additional components
      const instance = await figma.importComponentByKeyAsync(linkComponentKey);
      linkComponent = instance;
    }

        // Example of a component to be imported
        let statusKeyComponent: ComponentNode | null = null;

        async function getStatusKeyComponent() {
          const statusKeyComponent = "947a0e33331b416c82b7275e058eb4d5dde3f045"; // This is an example component, use this block as a reference when for importing additional components
          const instance = await figma.importComponentByKeyAsync(statusKeyComponent);
          linkComponent = instance;
        }

    // The following section is contained within a Promise, which means it only runs when the above components and fonts are available.
    const defaultPage = figma.currentPage;
console.log("Stored default page:", defaultPage.name, defaultPage.id);

Promise.all([
  getCoverComponent(),
  getStatusComponent(),
  getVersionComponent(),
  getDevComponent(),
  getLogoComponent(),
  getLinkComponent(),
  loadFont(),
]).then(async () => {
  console.log("%cFonts and components loaded", "color:green");

  let createdPages: PageNode[] = [];
  pages.forEach((page) => {
    const newPage = figma.createPage();
    newPage.name = page.name;
    if (newPage.name !== "📙 COVER") {
      figma.currentPage = newPage;
      insertTitle(page.name);
    }
    createdPages.push(newPage);
  });

  console.log("%cPages built", "color:green");

  // Switch to the Cover page and insert component
  // Switch to cover page and add cover instance.
const coverPage = createdPages.find(page => page.name === "📙 COVER");
if (coverPage) {
  figma.currentPage = coverPage;
  
  if (coverComponent) {
    const coverInstance: InstanceNode = coverComponent.createInstance();
    coverPage.appendChild(coverInstance);
    coverInstance.x = 0;
    coverInstance.y = 0;
    figma.currentPage.backgrounds = [{
      type: "SOLID",
      color: { r: 0.2, g: 0.2, b: 0.2 }
    }];
    figma.viewport.scrollAndZoomIntoView([coverInstance]);
  }
  
  // Reaffirm the active page.
  figma.currentPage = coverPage;
}

// Wait a bit longer for the active page to settle.
await new Promise(resolve => setTimeout(resolve, 300));

console.log("Active page before removal:", figma.currentPage.name, figma.currentPage.id);

// Option 1: Remove the stored default page if it's not active.
if (defaultPage.id !== figma.currentPage.id) {
  console.log("Removing stored default page:", defaultPage.name);
  defaultPage.remove();
} else {
  console.warn("Default page is still active; cannot remove.");
}

// Option 2: Backup removal by name.
const pageToRemove = figma.root.children.find(
  page => page.name === "Page 1" && page.id !== figma.currentPage.id
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
    height: 320,
  });
}
