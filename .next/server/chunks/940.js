"use strict";exports.id=940,exports.ids=[940],exports.modules={60940:(e,t,r)=>{r.d(t,{FewShotPromptTemplate:()=>s});var a=r(41061),i=r(97226),l=r(88128);r(21647);class s extends a.Al{constructor(e){if(super(e),Object.defineProperty(this,"lc_serializable",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"examples",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"exampleSelector",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"examplePrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"suffix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"exampleSeparator",{enumerable:!0,configurable:!0,writable:!0,value:"\n\n"}),Object.defineProperty(this,"prefix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),void 0!==this.examples&&void 0!==this.exampleSelector)throw Error("Only one of 'examples' and 'example_selector' should be provided");if(void 0===this.examples&&void 0===this.exampleSelector)throw Error("One of 'examples' and 'example_selector' should be provided");if(this.validateTemplate){let e=this.inputVariables;this.partialVariables&&(e=e.concat(Object.keys(this.partialVariables))),(0,i.af)(this.prefix+this.suffix,this.templateFormat,e)}}_getPromptType(){return"few_shot"}static lc_name(){return"FewShotPromptTemplate"}async getExamples(e){if(void 0!==this.examples)return this.examples;if(void 0!==this.exampleSelector)return this.exampleSelector.selectExamples(e);throw Error("One of 'examples' and 'example_selector' should be provided")}async partial(e){let t=this.inputVariables.filter(t=>!(t in e)),r={...this.partialVariables??{},...e};return new s({...this,inputVariables:t,partialVariables:r})}async format(e){let t=await this.mergePartialAndUserVariables(e),r=await this.getExamples(t),a=await Promise.all(r.map(e=>this.examplePrompt.format(e))),l=[this.prefix,...a,this.suffix].join(this.exampleSeparator);return(0,i.SM)(l,this.templateFormat,t)}serialize(){if(this.exampleSelector||!this.examples)throw Error("Serializing an example selector is not currently supported");if(void 0!==this.outputParser)throw Error("Serializing an output parser is not currently supported");return{_type:this._getPromptType(),input_variables:this.inputVariables,example_prompt:this.examplePrompt.serialize(),example_separator:this.exampleSeparator,suffix:this.suffix,prefix:this.prefix,template_format:this.templateFormat,examples:this.examples}}static async deserialize(e){let t;let{example_prompt:r}=e;if(!r)throw Error("Missing example prompt");let a=await l.PromptTemplate.deserialize(r);if(Array.isArray(e.examples))t=e.examples;else throw Error("Invalid examples format. Only list or string are supported.");return new s({inputVariables:e.input_variables,examplePrompt:a,examples:t,exampleSeparator:e.example_separator,prefix:e.prefix,suffix:e.suffix,templateFormat:e.template_format})}}}};