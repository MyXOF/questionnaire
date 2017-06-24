webpackJsonp([1],{117:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Index",data:function(){return{fullscreenLoading:!1}}}},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Index",data:function(){return{fullscreenLoading:!1}}}},119:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(16),a=n.n(s),i=n(14);e.default={name:"QuestionList",data:function(){return{questionnaireName:"",questionnaireTemplateId:"",uid:""}},methods:a()({},n.i(i.b)(["getQuestionnaireEachList","getQuestionnaireTemplateList","addQuestionnaire","changeQuestionnaireEachStatus"]),{init:function(){console.log(this.$route.query.uid,"this.$route.query.uid"),this.uid=this.$route.query.uid,this.getQuestionnaireEachList(),this.getQuestionnaireTemplateList()},add:function(){var t=this;this.addQuestionnaire({title:this.questionnaireName,templateId:this.questionnaireTemplateId}).then(function(){t.getQuestionnaireEachList(),t.$notify({title:"成功",message:"问卷添加成功",type:"success"})})},changeStatus:function(t,e){var n=this;this.changeQuestionnaireEachStatus({id:t,status:e}).then(function(t){t?(n.getQuestionnaireEachList(),n.$notify({title:"成功",message:"更新成功",type:"success"})):n.$notify({title:"警告",message:"开启新问卷前，请先关闭同一模板下的其他问卷。",type:"warning"})})}}),components:{},computed:a()({},n.i(i.c)({QuestionnaireEach:function(t){return t.QuestionnaireEach},QuestionnaireTemplate:function(t){return t.QuestionnaireTemplate}})),mounted:function(){this.init()}}},120:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(16),a=n.n(s),i=n(24),o=n.n(i),r=n(14);e.default={name:"Questionnaire",data:function(){return{questionnaireName:"",rate:null,radio:[],result:{templetId:"",questionnaireId:"",questionnaireTitle:"",userName:"",department:"",answer:[]}}},methods:a()({},n.i(r.b)(["getQuestionnaireTemplateById","setTemplate","getQuestionnaireEachById","saveQuestionnaire","getUserInfoById","authUserFinishedQuestionnaire"]),{init:function(){var t=this;console.log(this.$route.query,"list-this.$route.query"),this.getUserInfoById(this.$route.query).then(function(e){var n=t.$route.params.id;e?(t.result.userName=e.name,t.result.department=e.department,t.authUserFinishedQuestionnaire({userName:e.name,id:n}).then(function(e){e?t.$router.push({path:"/success"}):t.getQuestionnaireEachById({id:n}).then(function(e){e?(t.questionnaireName=e.title,t.result.questionnaireTitle=e.title,t.result.questionnaireId=e._id,t.result.templetId=e.templateId,t.getQuestionnaireTemplateById({id:e.templateId}).then(function(e){t.putResultAnswer(e),t.setTemplate(e)})):t.$router.push({path:"/error"})})})):t.$router.push({path:"/error"})})},putResultAnswer:function(t){var e=this;t.topic.forEach(function(t){"单选"===t.type?t.allowAddReasonStatus?e.result.answer.push({topicId:t._id,number:t.number,must:t.must,question:t.question,type:t.type,selectContent:"",additional:"",optionSort:o.a.map(t.options,"content")}):e.result.answer.push({topicId:t._id,number:t.number,must:t.must,question:t.question,type:t.type,selectContent:"",optionSort:o.a.map(t.options,"content")}):"多选"===t.type?e.result.answer.push({topicId:t._id,number:t.number,must:t.must,question:t.question,type:t.type,selectMultipleContent:[],optionSort:o.a.map(t.options,"content")}):"问答"===t.type?e.result.answer.push({topicId:t._id,number:t.number,must:t.must,question:t.question,type:t.type,selectContent:""}):e.result.answer.push({topicId:t._id,number:t.number,must:t.must,question:t.question,type:t.type,selectContent:0,grade:{begin:t.grade.begin,end:t.grade.end,type:t.grade.type}})})},dataIsNum:function(){return this.result.answer.some(function(t){return t.must?"多选"===t.type?(console.log(0===t.selectMultipleContent.length,"1111"),0===t.selectMultipleContent.length):(console.log(!t.selectContent,"2222"),!t.selectContent):(console.log(!1,"nomust"),!1)})},finished:function(){var t=this;this.dataIsNum()?this.$notify({title:"警告",message:"请完成必填题目后再提交问卷",type:"warning"}):this.saveQuestionnaire(this.result).then(function(e){e?t.$notify.error({title:"失败",message:"提交失败"}):(t.$notify({title:"成功",message:"感谢您的参与，问卷提交成功！",type:"success"}),t.$router.push({path:"/success"}))})},changeRadio:function(t){console.log(t,"changeRadio")},changeCheckbox:function(t){console.log(t,"changeCheckbox")}}),components:{},computed:a()({},n.i(r.c)({QuestionnaireTemplate:function(t){return t.QuestionnaireTemplate},Questionnaire:function(t){return t.Questionnaire}})),mounted:function(){this.init()}}},121:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(16),a=n.n(s),i=n(14);e.default={name:"SetQuestion",data:function(){return{active:0,name:"",questionName:"",multiple:"1",grade:!1}},methods:a()({},n.i(i.b)(["getQuestionList"]),{init:function(){this.getQuestionList()},back:function(){0==this.active--&&(this.active=0)},next:function(){console.log(this.active,"active"),this.active++>2&&(this.active=0)}}),components:{},computed:a()({},n.i(i.c)({Question:function(t){return t.Question}})),mounted:function(){this.init()}}},122:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(16),a=n.n(s),i=n(14);e.default={name:"Statistics",data:function(){return{title:""}},methods:a()({},n.i(i.b)(["getQuestionnaireList","setQuestionnaireList"]),{init:function(){var t=this;this.title=this.$route.query.questionnaireName+"问卷数据统计",this.getQuestionnaireList({questionnaireId:this.$route.query.questionnaireId}).then(function(e){e=t.putCheckboxData(e),e=t.countResult(e),console.log(e,"111111"),t.setQuestionnaireList(e)})},putCheckboxData:function(t){return t.map(function(t){return"多选"===t.result[0].type&&(t.result=t.result.reduce(function(t,e){return 0===e.selectMultipleContent.length?(_.assignIn(e,{selectContent:"无"}),t.push(e)):e.selectMultipleContent.length>1?e.selectMultipleContent.forEach(function(n){var s=_.cloneDeep(e);_.assignIn(s,{selectContent:n}),t.push(s)}):(_.assignIn(e,{selectContent:e.selectMultipleContent[0]}),t.push(e)),t},[])),t})},countResult:function(t){return t.map(function(t){if("单选"===t.result[0].type||"多选"===t.result[0].type){var e=_.countBy(t.result,"selectContent"),n=t.result.reduce(function(t,e){return e.additional&&t.push({userName:e.userName,additional:e.additional}),t},[]);_.assignIn(t,{additionalArr:n,countSelect:e,personSum:t.result.length})}else if("问答"===t.result[0].type){var s=t.result.reduce(function(t,e){return e.selectContent&&t.push({userName:e.userName,additional:e.selectContent}),t},[]);_.assignIn(t,{answerArr:s})}else if("打分"===t.result[0].type){var a=t.result.reduce(function(t,e){return e.selectContent&&(t+=parseInt(e.selectContent)),t},0);_.assignIn(t,{scroe:a,personSum:t.result.length,hightest:t.result[0].grade.end})}return t})}}),components:{},computed:a()({},n.i(i.c)({Questionnaire:function(t){return t.Questionnaire}})),mounted:function(){this.init()}}},123:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Index",data:function(){return{fullscreenLoading:!1}}}},124:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=n(76),i=n(74),o=n.n(i),r=n(75),l=(n.n(r),n(73)),u=n(45),c=(n.n(u),n(72)),d=n(15);s.default.use(o.a),s.default.use(a.a);var p=new a.a({routes:c.a});p.beforeEach(function(t,e,n){t.path;n()}),d.a.host="http://oaservice.kuyun.com";new s.default({store:l.a,router:p}).$mount("#app")},125:function(t,e,n){"use strict";var s=n(28),a=n.n(s),i=n(24),o=(n.n(i),n(2),n(15)),r=n(26),l=n.n(r),u={template:[],list:[],choiceQuestion:[],essayQuestion:[],grade:[]},c={setTemplate:function(t,e){t.template=e},setQuestionnaireList:function(t,e){t.list=e}},d={setTemplate:function(t,e){var n=t.commit;t.state;n("setTemplate",e)},saveQuestionnaire:function(t,e){var n=t.commit;t.state;return new a.a(function(t,s){l.a.post(o.a.host+"/questionnaire",e).then(function(e){var s=e.data;n("getQuestionnaireEachList",s),t()}).catch(function(e){t(e)})})},getUserInfoById:function(t,e){t.commit,t.state;return new a.a(function(t,n){l.a.get(o.a.host+"/user/"+e.uid+"/info").then(function(e){var n=e.data;t(n)}).catch(function(e){t()})})},authUserFinishedQuestionnaire:function(t,e){var n=(t.commit,t.state,e.id),s=e.userName;return new a.a(function(t,e){l.a.get(o.a.host+"/questionnaire/"+n+"/user/finished?userName="+s).then(function(e){var n=e.data;t(n)}).catch(function(e){t()})})},getQuestionnaireList:function(t,e){t.commit,t.state;return new a.a(function(t,n){l.a.get(o.a.host+"/questionnaire/"+e.questionnaireId+"/statistics").then(function(e){var n=e.data;t(n)}).catch(function(e){t()})})},setQuestionnaireList:function(t,e){var n=t.commit;t.state;n("setQuestionnaireList",e)}},p={};e.a={state:u,actions:d,getters:p,mutations:c}},126:function(t,e,n){"use strict";var s=n(28),a=n.n(s),i=n(24),o=n.n(i),r=(n(2),n(15)),l=n(26),u=n.n(l),c={list:[]},d={getQuestionnaireEachList:function(t,e){t.list=e}},p={getQuestionnaireEachList:function(t){var e=t.commit;t.state;return new a.a(function(t,n){u.a.get(r.a.host+"/questionnaireEachs").then(function(t){var n=t.data;e("getQuestionnaireEachList",n)}).catch(function(t){console.log(t,"questionnaireEach")})})},getQuestionnaireEachById:function(t,e){t.commit,t.state;return new a.a(function(t,n){u.a.get(r.a.host+"/questionnaireEach/"+e.id).then(function(e){var n=e.data;console.log(n,"data"),t(n)}).catch(function(e){t()})})},addQuestionnaire:function(t,e){t.commit,t.state;return o.a.assignIn(e,{operation:{userName:"yuanyang"}}),new a.a(function(t,n){u.a.post(r.a.host+"/questionnaireEach",e).then(function(e){e.data;t()}).catch(function(t){console.log(t,"questionnaire")})})},changeQuestionnaireEachStatus:function(t,e){t.commit,t.state;return new a.a(function(t,n){u.a.patch(r.a.host+"/questionnaireEach/"+e.id+"/status",{status:e.status}).then(function(e){var n=e.data;t(n)}).catch(function(e,n){console.log(n,"ddddddd"),t()})})}},f={getRangeTime:function(t){return{begin:utils.getFormatTimeByArr(t.beginDotTime),end:utils.getFormatTimeByArr(t.endDotTime)}}};e.a={state:c,actions:p,getters:f,mutations:d}},127:function(t,e,n){"use strict";var s=n(28),a=n.n(s),i=n(24),o=(n.n(i),n(2),n(15)),r=n(26),l=n.n(r),u={list:[]},c={getQuestionnaireTemplateList:function(t,e){t.list=e}},d={getQuestionnaireTemplateList:function(t){var e=t.commit;t.state;return new a.a(function(t,n){l.a.get(o.a.host+"/questionnaireTemplates").then(function(t){var n=t.data;e("getQuestionnaireTemplateList",n)}).catch(function(t){console.log(t,"questionnaireTemplet")})})},getQuestionnaireTemplateById:function(t,e){t.commit,t.state;return new a.a(function(t,n){l.a.get(o.a.host+"/questionnaireTemplate/"+e.id).then(function(e){var n=e.data;t(n)}).catch(function(t){console.log(t,"questionnaireTemplet")})})}},p={};e.a={state:u,actions:d,getters:p,mutations:c}},15:function(t,e,n){"use strict";var s=n(77);e.a=new s.a},181:function(t,e){},182:function(t,e){},183:function(t,e){},184:function(t,e){},185:function(t,e){},186:function(t,e){},187:function(t,e){},189:function(t,e,n){n(187);var s=n(7)(n(117),n(201),null,null);t.exports=s.exports},190:function(t,e,n){n(186);var s=n(7)(n(119),n(200),null,null);t.exports=s.exports},191:function(t,e,n){n(181);var s=n(7)(n(120),n(195),null,null);t.exports=s.exports},192:function(t,e,n){n(182);var s=n(7)(n(121),n(196),null,null);t.exports=s.exports},193:function(t,e,n){n(185);var s=n(7)(n(122),n(199),null,null);t.exports=s.exports},194:function(t,e,n){n(183);var s=n(7)(n(123),n(197),null,null);t.exports=s.exports},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"questionnairePage"}},[n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("h1",[t._v(t._s(t.questionnaireName))])]),t._v(" "),t._l(t.Questionnaire.template.topic,function(e,s){return n("el-row",{key:e._id,attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-col",[n("el-row",{attrs:{type:"flex",justify:"left",align:"middle"}},[t._v(t._s(s+1+"、"+e.question))]),t._v(" "),"单选"===e.type?n("el-row",{staticClass:"questionRow",attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-col",t._l(e.options,function(e,a){return n("el-row",{key:e._id,staticClass:"answerRow"},[n("el-radio",{staticClass:"radio",attrs:{label:e.content},model:{value:t.result.answer[s].selectContent,callback:function(e){t.result.answer[s].selectContent=e},expression:"result.answer[index].selectContent"}}),t._v(" "),e.allowAddReasonStatus?n("el-input",{attrs:{placeholder:"请输入理由",disabled:t.result.answer[s].selectContent!==e.content},model:{value:t.result.answer[s].additional,callback:function(e){t.result.answer[s].additional=e},expression:"result.answer[index].additional"}}):t._e()],1)}))],1):t._e(),t._v(" "),"多选"===e.type?n("el-row",{staticClass:"questionRow",attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-col",[n("el-checkbox-group",{staticClass:"answerRow",model:{value:t.result.answer[s].selectMultipleContent,callback:function(e){t.result.answer[s].selectMultipleContent=e},expression:"result.answer[index].selectMultipleContent"}},t._l(e.options,function(t,e){return n("el-checkbox",{key:t._id,attrs:{label:t.content}})}))],1)],1):t._e(),t._v(" "),"问答"===e.type?n("el-row",{staticClass:"questionRow",attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-col",[n("el-input",{staticClass:"answerRow",attrs:{type:"textarea",rows:4,placeholder:"请输入期望与建议"},model:{value:t.result.answer[s].selectContent,callback:function(e){t.result.answer[s].selectContent=e},expression:"result.answer[index].selectContent"}})],1)],1):t._e(),t._v(" "),"打分"===e.type?n("el-row",{staticClass:"questionRow",attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-rate",{staticClass:"answerRow",attrs:{max:10,"low-threshold":4,"high-threshold":8,texts:["极差","极差","失望","失望","一般","一般","满意","满意","惊喜","惊喜"],"show-text":""},model:{value:t.result.answer[s].selectContent,callback:function(e){t.result.answer[s].selectContent=e},expression:"result.answer[index].selectContent"}})],1):t._e()],1)],1)}),t._v(" "),n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.finished}},[t._v("提交问卷")])],1)],2)},staticRenderFns:[]}},196:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticClass:"row-padding",attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:4}},[n("el-steps",{attrs:{space:100,active:t.active,"finish-status":"success"}},[n("el-step",{attrs:{title:"步骤 1"}}),t._v(" "),n("el-step",{attrs:{title:"步骤 2"}}),t._v(" "),n("el-step",{attrs:{title:"步骤 3"}})],1)],1)],1),t._v(" "),0===t.active?n("el-row",{staticClass:"row-padding",attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:5}},[n("el-input",{attrs:{placeholder:"问卷模板名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1):t._e(),t._v(" "),1===t.active?n("el-row",{staticClass:"row-padding",attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",[n("el-row",{staticClass:"row-padding",attrs:{type:"flex",justify:"left",align:"middle"}},[n("h2",[t._v("题目设置：")])]),t._v(" "),n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:8}},[n("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入题目"},model:{value:t.questionName,callback:function(e){t.questionName=e},expression:"questionName"}})],1),t._v(" "),n("el-col",{attrs:{span:3,offset:1}},[n("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.multiple,callback:function(e){t.multiple=e},expression:"multiple"}},[t._v("单选")]),t._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:"2"},model:{value:t.multiple,callback:function(e){t.multiple=e},expression:"multiple"}},[t._v("多选")])],1),t._v(" "),n("el-col",{attrs:{span:5}},[n("span",[t._v("是否可打分")]),t._v(" "),n("el-switch",{attrs:{"on-color":"#13ce66","off-color":"#ff4949"},model:{value:t.grade,callback:function(e){t.grade=e},expression:"grade"}})],1)],1),t._v(" "),n("el-row",{staticClass:"row-padding",attrs:{type:"flex",justify:"left",align:"middle"}},[n("h2",[t._v("题目设置：")])]),t._v(" "),n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:8}},[n("el-input",{attrs:{placeholder:"答案"},model:{value:t.questionName,callback:function(e){t.questionName=e},expression:"questionName"}})],1),t._v(" "),n("el-col",{attrs:{span:4,offset:1}},[n("span",[t._v("是否可添加文字")]),t._v(" "),n("el-switch",{attrs:{"on-color":"#13ce66","off-color":"#ff4949"},model:{value:t.grade,callback:function(e){t.grade=e},expression:"grade"}})],1),t._v(" "),n("el-col",{attrs:{span:3,offset:1}},[n("el-button",{staticClass:"addLable",attrs:{type:"success",icon:"plus"}}),t._v(" "),n("el-button",{staticClass:"addLable",attrs:{type:"danger",icon:"minus"}})],1)],1)],1)],1):t._e(),t._v(" "),n("el-row",{staticClass:"row-padding",attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:2}},[n("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.back}},[t._v("上一步")])],1),t._v(" "),n("el-col",{attrs:{span:1}},[n("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.next}},[t._v("下一步")])],1)],1)],1)},staticRenderFns:[]}},197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("您已成功完成问卷！")])])}]}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("你请求的页面不存在，也可能去了月球！")])])}]}},199:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("h1",[t._v(t._s(t.title))])]),t._v(" "),t._l(t.Questionnaire.list,function(e,s){return n("el-row",{key:e._id,attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-col",[n("el-row",{attrs:{type:"flex",justify:"left",align:"middle"}},[t._v(t._s(s+1+"、"+e._id))]),t._v(" "),n("el-row",{staticClass:"questionRow",attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-col",["单选"===e.result[0].type||"多选"===e.result[0].type?n("el-row",{staticClass:"answerRow"},[t._l(e.result[0].optionSort,function(s,a){return n("el-row",{key:a,staticClass:"answerRow",attrs:{justify:"left",align:"middle"}},[n("el-col",{attrs:{span:2}},[n("el-tag",{attrs:{type:"gray"}},[t._v(t._s(s))])],1),t._v(" "),n("el-col",{attrs:{span:4}},[n("span",[n("span",[t._v(t._s((e.countSelect[s]||0)/e.personSum*100))]),t._v(" "),n("span",[t._v("%("+t._s(e.countSelect[s]||0)+"票)")])])])],1)}),t._v(" "),n("el-row",{staticClass:"additionalRow"},t._l(e.additionalArr,function(e,s){return n("el-tag",{key:s,staticClass:"additionalTag",attrs:{type:"primary"}},[t._v("\n                "+t._s(e.additional)+"("+t._s(e.userName)+")\n              ")])}))],2):t._e(),t._v(" "),"问答"===e.result[0].type?n("el-row",{staticClass:"answerRow"},t._l(e.answerArr,function(e,s){return n("el-row",{key:s,staticClass:"answerRow"},[n("el-tag",{attrs:{type:"primary"}},[t._v("\n                "+t._s(e.additional)+"("+t._s(e.userName)+")\n              ")])],1)})):t._e(),t._v(" "),"打分"===e.result[0].type?n("el-row",{staticClass:"answerRow"},[n("el-row",{staticClass:"answerRow",attrs:{justify:"left",align:"middle"}},[n("el-col",{attrs:{span:2}},[n("el-tag",{attrs:{type:"gray"}},[t._v("本月平均分：")])],1),t._v(" "),n("el-col",{attrs:{span:4}},[n("span",[t._v(t._s(e.scroe/e.personSum))])])],1),t._v(" "),n("el-row",{staticClass:"additionalRow"},t._l(e.result,function(e,s){return n("el-tag",{key:s,staticClass:"additionalTag",attrs:{type:"primary"}},[t._v("\n                "+t._s(e.selectContent)+"分("+t._s(e.userName)+")\n              ")])}))],1):t._e()],1)],1)],1)],1)})],2)},staticRenderFns:[]}},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{type:"flex",justify:"left",align:"middle"}},[n("el-col",{attrs:{span:15}},[n("h1",[t._v("问卷系统")])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("el-input",{attrs:{placeholder:"问卷模板名称"},model:{value:t.questionnaireName,callback:function(e){t.questionnaireName=e},expression:"questionnaireName"}})],1),t._v(" "),n("el-col",{attrs:{span:4,offset:1}},[n("el-select",{attrs:{placeholder:"选择模板"},model:{value:t.questionnaireTemplateId,callback:function(e){t.questionnaireTemplateId=e},expression:"questionnaireTemplateId"}},t._l(this.QuestionnaireTemplate.list,function(t){return n("el-option",{key:t._id,attrs:{label:t.title,value:t._id}})}))],1),t._v(" "),n("el-col",{attrs:{span:2,offset:1}},[n("el-button",{staticStyle:{},attrs:{type:"primary",size:"large"},on:{click:t.add}},[t._v("添加问卷")])],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:this.QuestionnaireEach.list,border:""}},[n("el-table-column",{attrs:{label:"名称",width:"300"},scopedSlots:t._u([["default",function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.title))])]}]])}),t._v(" "),n("el-table-column",{attrs:{label:"创建日期",width:"180"},scopedSlots:t._u([["default",function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.operation.dateString))])]}]])}),t._v(" "),n("el-table-column",{attrs:{label:"操作人",width:"150"},scopedSlots:t._u([["default",function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.operation.userName))])]}]])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([["default",function(e){return[e.row.status?n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){t.changeStatus(e.row._id,!e.row.status)}}},[t._v("关闭")]):n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){t.changeStatus(e.row._id,!e.row.status)}}},[t._v("开启")]),t._v(" "),n("router-link",{attrs:{to:{path:"statistics",query:{questionnaireId:e.row._id,questionnaireName:e.row.title}}}},[n("el-button",{attrs:{size:"small"}},[t._v("统计")])],1),t._v(" "),n("router-link",{attrs:{to:{path:"questionnaire/"+e.row._id,query:{uid:t.uid}}}},[n("el-button",{attrs:{size:"small"}},[t._v("查看")])],1)]}]])})],1)],1)},staticRenderFns:[]}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("访问出错或没有登录！")])])}]}},45:function(t,e,n){n(184);var s=n(7)(n(118),n(198),null,null);t.exports=s.exports},72:function(t,e,n){"use strict";var s=n(45),a=n.n(s),i=n(192),o=n.n(i),r=n(190),l=n.n(r),u=n(193),c=n.n(u),d=n(191),p=n.n(d),f=n(194),m=n.n(f),h=n(189),_=n.n(h);e.a=[{path:"/index",component:a.a},{path:"/",component:a.a},{path:"/questionList",component:l.a},{path:"/setQuestion",component:o.a},{path:"/statistics",component:c.a},{path:"/questionnaire/:id",component:p.a},{path:"/success",component:m.a},{path:"/error",component:_.a}]},73:function(t,e,n){"use strict";var s=n(2),a=n(14),i=n(125),o=n(126),r=n(127);s.default.use(a.a),e.a=new a.a.Store({strict:!1,modules:{QuestionnaireEach:o.a,QuestionnaireTemplate:r.a,Questionnaire:i.a}})},75:function(t,e){}},[124]);
//# sourceMappingURL=app.664136a3781021e53c4b.js.map