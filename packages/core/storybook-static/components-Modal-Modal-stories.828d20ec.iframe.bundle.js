"use strict";(self.webpackChunk_enterprise_core=self.webpackChunk_enterprise_core||[]).push([[607],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
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
`,Button=({variant="primary",size="md",children,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledButton,{$variant:variant,$size:size,...props,children});Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.tsx")},"./src/components/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Large:()=>Large,Open:()=>Open,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const colors_neutral={200:"#e2e8f0",900:"#0f172a"},typography={fontFamily:{sans:["Inter","system-ui","sans-serif"]},fontSize:{lg:"1.125rem",base:"1rem"},fontWeight:{semibold:600,normal:400}},spacing_4="1rem",spacing_6="1.5rem",Overlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({isOpen})=>isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ModalContent=styled_components_browser_esm.Ay.div`
  background: white;
  border-radius: ${spacing_4};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-height: 90vh;
  overflow-y: auto;
  
  ${({size})=>`\n      width: 90vw;\n      max-width: ${{sm:"400px",md:"500px",lg:"700px"}[size]};\n    `}
`,ModalHeader=styled_components_browser_esm.Ay.div`
  padding: ${spacing_6};
  border-bottom: 1px solid ${colors_neutral[200]};
  
  h2 {
    margin: 0;
    font-family: ${typography.fontFamily.sans.join(", ")};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.semibold};
    color: ${colors_neutral[900]};
  }
`,ModalBody=styled_components_browser_esm.Ay.div`
  padding: ${spacing_6};
  font-family: ${typography.fontFamily.sans.join(", ")};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.normal};
  color: ${colors_neutral[900]};
  line-height: 1.5;
`,ModalFooter=styled_components_browser_esm.Ay.div`
  padding: ${spacing_6};
  border-top: 1px solid ${colors_neutral[200]};
  display: flex;
  gap: ${spacing_4};
  justify-content: flex-end;
`,Modal=({isOpen,onClose,children,size="md"})=>(0,jsx_runtime.jsx)(Overlay,{isOpen,onClick:onClose,children:(0,jsx_runtime.jsx)(ModalContent,{size,onClick:e=>e.stopPropagation(),children})});Modal.displayName="Modal",Modal.Header=ModalHeader,Modal.Body=ModalBody,Modal.Footer=ModalFooter;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Modal.Header",Header.__docgenInfo={description:"",displayName:"Modal.Header",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal.Header"]={docgenInfo:Modal.Header.__docgenInfo,name:"Modal.Header",path:"src/components/Modal/Modal.tsx#Modal.Header"})}catch(__react_docgen_typescript_loader_error){}try{Body.displayName="Modal.Body",Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal.Body"]={docgenInfo:Modal.Body.__docgenInfo,name:"Modal.Body",path:"src/components/Modal/Modal.tsx#Modal.Body"})}catch(__react_docgen_typescript_loader_error){}try{Footer.displayName="Modal.Footer",Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal.Footer"]={docgenInfo:Modal.Footer.__docgenInfo,name:"Modal.Footer",path:"src/components/Modal/Modal.tsx#Modal.Footer"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.ts");const Modal_stories={title:"Components/Modal",component:Modal,parameters:{layout:"centered"},tags:["autodocs"]},ModalDemo=({size="md"})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{onClick:()=>setIsOpen(!0),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal,{isOpen,onClose:()=>setIsOpen(!1),size,children:[(0,jsx_runtime.jsx)(Modal.Header,{children:(0,jsx_runtime.jsx)("h2",{children:"Modal Title"})}),(0,jsx_runtime.jsx)(Modal.Body,{children:"This is the modal content. Click outside or the close button to dismiss."}),(0,jsx_runtime.jsxs)(Modal.Footer,{children:[(0,jsx_runtime.jsx)(Button.$,{variant:"secondary",onClick:()=>setIsOpen(!1),children:"Cancel"}),(0,jsx_runtime.jsx)(Button.$,{variant:"primary",onClick:()=>setIsOpen(!1),children:"Confirm"})]})]})]})},Default={render:()=>(0,jsx_runtime.jsx)(ModalDemo,{})},Small={render:()=>(0,jsx_runtime.jsx)(ModalDemo,{size:"sm"})},Large={render:()=>(0,jsx_runtime.jsx)(ModalDemo,{size:"lg"})},Open={args:{isOpen:!0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Modal.Header,{children:(0,jsx_runtime.jsx)("h2",{children:"Always Open Modal"})}),(0,jsx_runtime.jsx)(Modal.Body,{children:"This modal is always open for demonstration purposes."}),(0,jsx_runtime.jsx)(Modal.Footer,{children:(0,jsx_runtime.jsx)(Button.$,{variant:"primary",children:"Action"})})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <ModalDemo />\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => <ModalDemo size="sm" />\n}',...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  render: () => <ModalDemo size="lg" />\n}',...Large.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:'{\n  args: {\n    isOpen: true,\n    children: <>\r\n        <Modal.Header>\r\n          <h2>Always Open Modal</h2>\r\n        </Modal.Header>\r\n        <Modal.Body>\r\n          This modal is always open for demonstration purposes.\r\n        </Modal.Body>\r\n        <Modal.Footer>\r\n          <Button variant="primary">Action</Button>\r\n        </Modal.Footer>\r\n      </>\n  }\n}',...Open.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small","Large","Open"]}}]);
//# sourceMappingURL=components-Modal-Modal-stories.828d20ec.iframe.bundle.js.map