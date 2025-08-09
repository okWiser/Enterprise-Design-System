"use strict";(self.webpackChunk_enterprise_core=self.webpackChunk_enterprise_core||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Large:()=>Large,Outline:()=>Outline,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("../../node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.Ay.button`
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Size styles */
  padding: ${props=>"sm"===props.$size?"0.5rem 0.75rem":"lg"===props.$size?"1rem 1.5rem":"0.75rem 1rem"};
  font-size: ${props=>"sm"===props.$size?"0.875rem":"lg"===props.$size?"1.125rem":"1rem"};
  
  /* Variant styles */
  background-color: ${props=>"secondary"===props.$variant?"#f1f5f9":"outline"===props.$variant?"transparent":"#0ea5e9"};
  color: ${props=>"secondary"===props.$variant?"#0f172a":"outline"===props.$variant?"#0ea5e9":"white"};
  border-color: ${props=>"outline"===props.$variant?"#0ea5e9":"transparent"};
  
  &:hover:not(:disabled) {
    background-color: ${props=>"secondary"===props.$variant?"#e2e8f0":"outline"===props.$variant?"#f0f9ff":"#0284c7"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Button=({variant="primary",size="md",children,...props})=>(0,jsx_runtime.jsx)(StyledButton,{$variant:variant,$size:size,...props,children});Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"Components/Button",component:Button,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}}}},Primary={args:{variant:"primary",children:"Button"}},Secondary={args:{variant:"secondary",children:"Button"}},Outline={args:{variant:"outline",children:"Button"}},Small={args:{size:"sm",children:"Small Button"}},Large={args:{size:"lg",children:"Large Button"}},Disabled={args:{disabled:!0,children:"Disabled Button"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    children: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    children: 'Button'\n  }\n}",...Secondary.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'outline',\n    children: 'Button'\n  }\n}",...Outline.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'sm',\n    children: 'Small Button'\n  }\n}",...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'lg',\n    children: 'Large Button'\n  }\n}",...Large.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    children: 'Disabled Button'\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Outline","Small","Large","Disabled"]}}]);
//# sourceMappingURL=components-Button-Button-stories.9bf8af17.iframe.bundle.js.map