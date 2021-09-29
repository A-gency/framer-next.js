import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (ea5dec5)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useOnVariantChange,useActiveVariantCallback,transformTemplate,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,CycleVariantState,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import{Twemoji}from"https://framerusercontent.com/modules/xwmmLiR3CC4FXXYz8XsN/cv9kkyHbkaUbM1vdgiQs/Twemoji.js";const TwemojiFonts=getFonts(Twemoji);const cycleOrder=["RC3PcT66f","IB9RWUXh2"];const variantClassNames={"RC3PcT66f":"framer-v-w7i397","IB9RWUXh2":"framer-v-1ij6y25"};const humanReadableVariantMap={"Variant 1":"RC3PcT66f","Variant 2":"IB9RWUXh2"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="RC3PcT66f",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"RC3PcT66f",variant,transitions,variantClassNames,cycleOrder});const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapw7i397=activeVariantCallback(async(...args)=>{setVariant("IB9RWUXh2");});const onAppearw7i397=activeVariantCallback(async(...args)=>{await delay(()=>setVariant(CycleVariantState),1e3);});const onTap1ij6y25=activeVariantCallback(async(...args)=>{setVariant("RC3PcT66f");});useOnVariantChange(baseVariant,{"default":onAppearw7i397});const variantProps=React.useMemo(()=>({"IB9RWUXh2":{"RC3PcT66f":{"onTap":onTap1ij6y25,"data-framer-name":"Variant 2","data-highlight":true},"AuGePko41":{"style":{"width":"100%","height":"100%"}},"AuGePko41-container":{"transformTemplate":transformTemplate("x")},"xw0K6bOvN":{"style":{"width":"100%","height":"100%"}},"xw0K6bOvN-container":{"transformTemplate":undefined},"JC5gdf2Mf":{"style":{"width":"100%","height":"100%"}},"JC5gdf2Mf-container":{"transformTemplate":transformTemplate("y")},"mETNlk9u4":{"style":{"width":"100%","height":"100%"}},"mETNlk9u4-container":{"transformTemplate":undefined},"GoMlCOcLU":{"style":{"width":"100%","height":"100%"}},"GoMlCOcLU-container":{"transformTemplate":undefined}}}),[onTap1ij6y25]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,className:cx("framer-2A8cP",classNames),style:{"display":"contents"},onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"RC3PcT66f",className:cx("framer-w7i397",className),style:{"backgroundColor":"rgb(255, 255, 255)",...style},"data-highlight":true,"data-framer-name":"Variant 1",onTap:onTapw7i397,transition:transition,ref:ref,...addVariantProps("RC3PcT66f"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"AuGePko41-container",className:"framer-xkwkyx-container",transition:transition,...addVariantProps("AuGePko41-container"),children:/*#__PURE__*/ _jsx(Twemoji,{width:"100%",height:"100%",layoutId:"AuGePko41",id:"AuGePko41",isSelection:true,selection:"🔥",search:"⭐️",style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("AuGePko41")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"xw0K6bOvN-container",className:"framer-1e7k2d9-container",transition:transition,...addVariantProps("xw0K6bOvN-container"),children:/*#__PURE__*/ _jsx(Twemoji,{width:"100%",height:"100%",layoutId:"xw0K6bOvN",id:"xw0K6bOvN",isSelection:true,selection:"😆",search:"⭐️",style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("xw0K6bOvN")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"JC5gdf2Mf-container",className:"framer-nqolcb-container",transition:transition,...addVariantProps("JC5gdf2Mf-container"),children:/*#__PURE__*/ _jsx(Twemoji,{width:"100%",height:"100%",layoutId:"JC5gdf2Mf",id:"JC5gdf2Mf",isSelection:true,selection:"💖",search:"⭐️",style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("JC5gdf2Mf")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"mETNlk9u4-container",className:"framer-m4vmz6-container",transition:transition,...addVariantProps("mETNlk9u4-container"),children:/*#__PURE__*/ _jsx(Twemoji,{width:"100%",height:"100%",layoutId:"mETNlk9u4",id:"mETNlk9u4",isSelection:false,selection:"💖",search:"🥸",style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("mETNlk9u4")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"GoMlCOcLU-container",className:"framer-pb5w4m-container",transition:transition,...addVariantProps("GoMlCOcLU-container"),children:/*#__PURE__*/ _jsx(Twemoji,{width:"100%",height:"100%",layoutId:"GoMlCOcLU",id:"GoMlCOcLU",isSelection:false,selection:"💖",search:"😶‍🌫️",style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("GoMlCOcLU")})})]})})}));});const css=[".framer-2A8cP [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-2A8cP .framer-w7i397 { position: relative; cursor: pointer; overflow: hidden; width: 551px; height: 459px; }",".framer-2A8cP .framer-xkwkyx-container { position: absolute; width: 100px; height: 100px; left: 62px; top: 58px; flex: none; }",".framer-2A8cP .framer-1e7k2d9-container { position: absolute; width: 100px; height: 100px; right: 122px; bottom: 147px; flex: none; }",".framer-2A8cP .framer-nqolcb-container { position: absolute; width: 100px; height: 100px; right: 131px; top: 49px; flex: none; }",".framer-2A8cP .framer-m4vmz6-container { position: absolute; width: 100px; height: 100px; bottom: 39px; left: 45px; flex: none; }",".framer-2A8cP .framer-pb5w4m-container { position: absolute; width: 100px; height: 100px; bottom: 171px; left: 170px; flex: none; }",".framer-2A8cP.framer-v-1ij6y25 .framer-w7i397 { cursor: pointer; }",".framer-2A8cP.framer-v-1ij6y25 .framer-xkwkyx-container { width: 100px; height: 100px; right: auto; bottom: auto; left: 50%; top: 141px; flex: none; }",".framer-2A8cP.framer-v-1ij6y25 .framer-1e7k2d9-container { width: 100px; height: 100px; right: 47px; bottom: 39px; left: auto; top: auto; flex: none; }",".framer-2A8cP.framer-v-1ij6y25 .framer-nqolcb-container { width: 100px; height: 100px; right: 43px; bottom: auto; left: auto; top: 50%; flex: none; }",".framer-2A8cP.framer-v-1ij6y25 .framer-m4vmz6-container { width: 100px; height: 100px; right: auto; bottom: auto; left: 29px; top: 119px; flex: none; }",".framer-2A8cP.framer-v-1ij6y25 .framer-pb5w4m-container { width: 100px; height: 100px; right: auto; bottom: auto; left: 215px; top: 31px; flex: none; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 459
 * @framerIntrinsicWidth 551
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "IB9RWUXh2": {"layout": ["fixed", "fixed"]}}}
 */ const FramerZoWdS_6j5=withCSS(Component,css);export default FramerZoWdS_6j5;FramerZoWdS_6j5.displayName="Twemojis";FramerZoWdS_6j5.defaultProps={"width":551,"height":459};addPropertyControls(FramerZoWdS_6j5,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["RC3PcT66f","IB9RWUXh2"],"optionTitles":["Variant 1","Variant 2"]}});addFonts(FramerZoWdS_6j5,[...TwemojiFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerZoWdS_6j5","slots":[],"annotations":{"framerIntrinsicHeight":"459","framerIntrinsicWidth":"551","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"IB9RWUXh2\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerContractVersion":"1"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./ZoWdS_6j5.map