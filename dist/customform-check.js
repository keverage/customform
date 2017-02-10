!function(t){"use strict";t.CustomFormCheck=function(e,s){this.CustomForm=e,this.element={context:this.CustomForm.elementContext,input:this.CustomForm.elementInput,type:this.CustomForm.support.type,wrapper:null,wrapperInput:null},t.extend(!0,this.settings={},this.CustomForm.settings,t.CustomFormCheck.defaults,s),this.load()},t.CustomFormCheck.defaults={classes:{states:{checked:"is-checked"}},onLoad:void 0,beforeWrap:void 0,afterEventsHandler:void 0,onComplete:void 0,onClick:void 0,onReset:void 0},t.CustomFormCheck.prototype={load:function(){void 0!==this.settings.onLoad&&this.settings.onLoad.call({CustomFormCheck:this,element:this.element}),this.wrap(),this.initElementsState(),this.eventsHandler(),this.resetHandler(),void 0!==this.settings.onComplete&&this.settings.onComplete.call({CustomFormCheck:this,element:this.element})},wrap:function(){this.element.wrapper=t("<span>",{class:this.settings.classes.prefix+" "+this.settings.classes.prefix+"-"+this.getInputType()}),this.element.wrapperInput=t("<span>",{class:this.settings.classes.input,tabindex:this.settings.tabindexStart}),void 0!==this.settings.beforeWrap&&this.settings.beforeWrap.call({CustomFormCheck:this,wrapper:this.element.wrapper,wrapperInput:this.element.wrapperInput}),this.getInput().parent().wrapInner(this.element.wrapper),this.element.wrapper=this.getInput().parent(),this.getInput().wrap(this.element.wrapperInput),this.element.wrapperInput=this.element.input.parent()},initElementsState:function(){this.getInput().prop("checked")&&this.getWrapper().addClass(this.settings.classes.states.checked),this.getInput().prop("disabled")&&(this.getWrapper().addClass(this.settings.classes.states.disabled),this.getInput().removeAttr("tabindex"))},eventsHandler:function(){var e=this;e.getWrapper().on("click keyup",function(s){if("click"===s.type||"keyup"===s.type&&32===s.keyCode){s.preventDefault();var n="radio"===e.getInputType();if(e.getInput().prop("disabled"))return;n&&e.getInputsRadio().prop("checked",!1).each(function(){e.getWrapper(t(this)).removeClass(e.settings.classes.states.checked)}),e.getWrapper()[n?"addClass":"toggleClass"](e.settings.classes.states.checked),e.getInput().prop("checked",!!n||e.getWrapper().hasClass(e.settings.classes.states.checked)),e.getInput().triggerHandler("click"),void 0!==e.settings.onClick&&e.settings.onClick.call({CustomFormCheck:e,wrapper:e.getWrapper(),input:e.getInput(),type:e.getInputType(),checked:e.getInput().prop("checked")})}}),void 0!==e.settings.afterEventsHandler&&e.settings.afterEventsHandler.call({CustomFormCheck:this,element:this.element})},resetHandler:function(){var e=this;e.getContext().on("reset",function(){var s=t(this);e.getWrapper().removeClass(e.settings.classes.states.checked+" "+e.settings.classes.states.disabled),setTimeout(function(){e.initElementsState(),void 0!==e.settings.onReset&&e.settings.onReset.call({CustomFormCheck:e,form:s})},0)})},getContext:function(){return this.element.context},getInput:function(){return this.element.input},getInputType:function(){return this.element.type},getWrapper:function(t){return void 0!==t?t.closest("."+this.settings.classes.prefix):this.element.wrapper},getInputsRadio:function(){return this.getContext().find(this.CustomForm.support.selector).filter('[name="'+this.getInput().attr("name")+'"]')}}}(jQuery);