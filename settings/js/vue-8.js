(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{329:function(e,s,i){"use strict";i.r(s);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-settings",attrs:{id:"content"}},[s("app-navigation",{attrs:{menu:e.menu}},[s("template",{slot:"settings-content"},[s("div",[s("p",[e._v(e._s(e.t("settings","Default quota:")))]),e._v(" "),s("multiselect",{staticClass:"multiselect-vue",attrs:{value:e.defaultQuota,options:e.quotaOptions,"tag-placeholder":"create",placeholder:e.t("settings","Select default quota"),label:"label","track-by":"id",allowEmpty:!1,taggable:!0},on:{tag:e.validateQuota,input:e.setDefaultQuota}})],1),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showLanguages,expression:"showLanguages"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"showLanguages"},domProps:{checked:Array.isArray(e.showLanguages)?e._i(e.showLanguages,null)>-1:e.showLanguages},on:{change:function(t){var s=e.showLanguages,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n=e._i(s,null);i.checked?n<0&&(e.showLanguages=s.concat([null])):n>-1&&(e.showLanguages=s.slice(0,n).concat(s.slice(n+1)))}else e.showLanguages=a}}}),e._v(" "),s("label",{attrs:{for:"showLanguages"}},[e._v(e._s(e.t("settings","Show Languages")))])]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showLastLogin,expression:"showLastLogin"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"showLastLogin"},domProps:{checked:Array.isArray(e.showLastLogin)?e._i(e.showLastLogin,null)>-1:e.showLastLogin},on:{change:function(t){var s=e.showLastLogin,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n=e._i(s,null);i.checked?n<0&&(e.showLastLogin=s.concat([null])):n>-1&&(e.showLastLogin=s.slice(0,n).concat(s.slice(n+1)))}else e.showLastLogin=a}}}),e._v(" "),s("label",{attrs:{for:"showLastLogin"}},[e._v(e._s(e.t("settings","Show last login")))])]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showUserBackend,expression:"showUserBackend"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"showUserBackend"},domProps:{checked:Array.isArray(e.showUserBackend)?e._i(e.showUserBackend,null)>-1:e.showUserBackend},on:{change:function(t){var s=e.showUserBackend,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n=e._i(s,null);i.checked?n<0&&(e.showUserBackend=s.concat([null])):n>-1&&(e.showUserBackend=s.slice(0,n).concat(s.slice(n+1)))}else e.showUserBackend=a}}}),e._v(" "),s("label",{attrs:{for:"showUserBackend"}},[e._v(e._s(e.t("settings","Show user backend")))])]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showStoragePath,expression:"showStoragePath"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"showStoragePath"},domProps:{checked:Array.isArray(e.showStoragePath)?e._i(e.showStoragePath,null)>-1:e.showStoragePath},on:{change:function(t){var s=e.showStoragePath,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n=e._i(s,null);i.checked?n<0&&(e.showStoragePath=s.concat([null])):n>-1&&(e.showStoragePath=s.slice(0,n).concat(s.slice(n+1)))}else e.showStoragePath=a}}}),e._v(" "),s("label",{attrs:{for:"showStoragePath"}},[e._v(e._s(e.t("settings","Show storage path")))])])])],2),e._v(" "),s("user-list",{attrs:{users:e.users,showConfig:e.showConfig,selectedGroup:e.selectedGroup,externalActions:e.externalActions}})],1)};a._withStripped=!0;var n=i(93),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-list-grid",attrs:{id:"app-content"},on:{"&scroll":function(t){return e.onScroll(t)}}},[s("div",{staticClass:"row",class:{sticky:e.scrolled&&!e.showConfig.showNewUserForm},attrs:{id:"grid-header"}},[s("div",{staticClass:"avatar",attrs:{id:"headerAvatar"}}),e._v(" "),s("div",{staticClass:"name",attrs:{id:"headerName"}},[e._v(e._s(e.t("settings","Username")))]),e._v(" "),s("div",{staticClass:"displayName",attrs:{id:"headerDisplayName"}},[e._v(e._s(e.t("settings","Display name")))]),e._v(" "),s("div",{staticClass:"password",attrs:{id:"headerPassword"}},[e._v(e._s(e.t("settings","Password")))]),e._v(" "),s("div",{staticClass:"mailAddress",attrs:{id:"headerAddress"}},[e._v(e._s(e.t("settings","Email")))]),e._v(" "),s("div",{staticClass:"groups",attrs:{id:"headerGroups"}},[e._v(e._s(e.t("settings","Groups")))]),e._v(" "),e.subAdminsGroups.length>0&&e.settings.isAdmin?s("div",{staticClass:"subadmins",attrs:{id:"headerSubAdmins"}},[e._v(e._s(e.t("settings","Group admin for")))]):e._e(),e._v(" "),s("div",{staticClass:"quota",attrs:{id:"headerQuota"}},[e._v(e._s(e.t("settings","Quota")))]),e._v(" "),e.showConfig.showLanguages?s("div",{staticClass:"languages",attrs:{id:"headerLanguages"}},[e._v(e._s(e.t("settings","Language")))]):e._e(),e._v(" "),e.showConfig.showStoragePath?s("div",{staticClass:"headerStorageLocation storageLocation"},[e._v(e._s(e.t("settings","Storage location")))]):e._e(),e._v(" "),e.showConfig.showUserBackend?s("div",{staticClass:"headerUserBackend userBackend"},[e._v(e._s(e.t("settings","User backend")))]):e._e(),e._v(" "),e.showConfig.showLastLogin?s("div",{staticClass:"headerLastLogin lastLogin"},[e._v(e._s(e.t("settings","Last login")))]):e._e(),e._v(" "),s("div",{staticClass:"userActions"})]),e._v(" "),s("form",{directives:[{name:"show",rawName:"v-show",value:e.showConfig.showNewUserForm,expression:"showConfig.showNewUserForm"}],staticClass:"row",class:{sticky:e.scrolled&&e.showConfig.showNewUserForm},attrs:{id:"new-user",disabled:e.loading.all},on:{submit:function(t){return t.preventDefault(),e.createUser(t)}}},[s("div",{class:e.loading.all?"icon-loading-small":"icon-add"}),e._v(" "),s("div",{staticClass:"name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.id,expression:"newUser.id"}],attrs:{id:"newusername",type:"text",required:"",placeholder:e.t("settings","Username"),name:"username",autocomplete:"off",autocapitalize:"none",autocorrect:"off",pattern:"[a-zA-Z0-9 _\\.@\\-']+"},domProps:{value:e.newUser.id},on:{input:function(t){t.target.composing||e.$set(e.newUser,"id",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"displayName"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.displayName,expression:"newUser.displayName"}],attrs:{id:"newdisplayname",type:"text",placeholder:e.t("settings","Display name"),name:"displayname",autocomplete:"off",autocapitalize:"none",autocorrect:"off"},domProps:{value:e.newUser.displayName},on:{input:function(t){t.target.composing||e.$set(e.newUser,"displayName",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{id:"newuserpassword",type:"password",required:""===e.newUser.mailAddress,placeholder:e.t("settings","Password"),name:"password",autocomplete:"new-password",autocapitalize:"none",autocorrect:"off",minlength:e.minPasswordLength},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"mailAddress"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.mailAddress,expression:"newUser.mailAddress"}],attrs:{id:"newemail",type:"email",required:""===e.newUser.password,placeholder:e.t("settings","Email"),name:"email",autocomplete:"off",autocapitalize:"none",autocorrect:"off"},domProps:{value:e.newUser.mailAddress},on:{input:function(t){t.target.composing||e.$set(e.newUser,"mailAddress",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"groups"},[e.settings.isAdmin?e._e():s("input",{class:{"icon-loading-small":e.loading.groups},attrs:{type:"text",tabindex:"-1",id:"newgroups",required:!e.settings.isAdmin},domProps:{value:e.newUser.groups}}),e._v(" "),s("multiselect",{staticClass:"multiselect-vue",attrs:{options:e.canAddGroups,disabled:e.loading.groups||e.loading.all,"tag-placeholder":"create",placeholder:e.t("settings","Add user in group"),label:"name","track-by":"id",multiple:!0,taggable:!0,"close-on-select":!1},on:{tag:e.createGroup},model:{value:e.newUser.groups,callback:function(t){e.$set(e.newUser,"groups",t)},expression:"newUser.groups"}},[s("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.t("settings","No results")))])])],1),e._v(" "),e.subAdminsGroups.length>0&&e.settings.isAdmin?s("div",{staticClass:"subadmins"},[s("multiselect",{staticClass:"multiselect-vue",attrs:{options:e.subAdminsGroups,placeholder:e.t("settings","Set user as admin for"),label:"name","track-by":"id",multiple:!0,"close-on-select":!1},model:{value:e.newUser.subAdminsGroups,callback:function(t){e.$set(e.newUser,"subAdminsGroups",t)},expression:"newUser.subAdminsGroups"}},[s("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.t("settings","No results")))])])],1):e._e(),e._v(" "),s("div",{staticClass:"quota"},[s("multiselect",{staticClass:"multiselect-vue",attrs:{options:e.quotaOptions,placeholder:e.t("settings","Select user quota"),label:"label","track-by":"id",allowEmpty:!1,taggable:!0},on:{tag:e.validateQuota},model:{value:e.newUser.quota,callback:function(t){e.$set(e.newUser,"quota",t)},expression:"newUser.quota"}})],1),e._v(" "),e.showConfig.showLanguages?s("div",{staticClass:"languages"},[s("multiselect",{staticClass:"multiselect-vue",attrs:{options:e.languages,placeholder:e.t("settings","Default language"),label:"name","track-by":"code",allowEmpty:!1,"group-values":"languages","group-label":"label"},model:{value:e.newUser.language,callback:function(t){e.$set(e.newUser,"language",t)},expression:"newUser.language"}})],1):e._e(),e._v(" "),e.showConfig.showStoragePath?s("div",{staticClass:"storageLocation"}):e._e(),e._v(" "),e.showConfig.showUserBackend?s("div",{staticClass:"userBackend"}):e._e(),e._v(" "),e.showConfig.showLastLogin?s("div",{staticClass:"lastLogin"}):e._e(),e._v(" "),s("div",{staticClass:"userActions"},[s("input",{staticClass:"button primary icon-checkmark-white has-tooltip",attrs:{type:"submit",id:"newsubmit",value:"",title:e.t("settings","Add a new user")}})])]),e._v(" "),e._l(e.filteredUsers,function(t,i){return s("user-row",{key:i,attrs:{user:t,settings:e.settings,showConfig:e.showConfig,groups:e.groups,subAdminsGroups:e.subAdminsGroups,quotaOptions:e.quotaOptions,languages:e.languages,externalActions:e.externalActions}})}),e._v(" "),s("infinite-loading",{ref:"infiniteLoading",on:{infinite:e.infiniteHandler}},[s("div",{attrs:{slot:"spinner"},slot:"spinner"},[s("div",{staticClass:"users-icon-loading icon-loading"})]),e._v(" "),s("div",{attrs:{slot:"no-more"},slot:"no-more"},[s("div",{staticClass:"users-list-end"})]),e._v(" "),s("div",{attrs:{slot:"no-results"},slot:"no-results"},[s("div",{attrs:{id:"emptycontent"}},[s("div",{staticClass:"icon-contacts-dark"}),e._v(" "),s("h2",[e._v(e._s(e.t("settings","No users in here")))])])])])],2)};o._withStripped=!0;var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return 1===Object.keys(e.user).length?s("div",{staticClass:"row",attrs:{"data-id":e.user.id}},[s("div",{staticClass:"avatar",class:{"icon-loading-small":e.loading.delete||e.loading.disable}},[e.loading.delete||e.loading.disable?e._e():s("img",{attrs:{alt:"",width:"32",height:"32",src:e.generateAvatar(e.user.id,32),srcset:e.generateAvatar(e.user.id,64)+" 2x, "+e.generateAvatar(e.user.id,128)+" 4x"}})]),e._v(" "),s("div",{staticClass:"name"},[e._v(e._s(e.user.id))]),e._v(" "),s("div",{staticClass:"obfuscated"},[e._v(e._s(e.t("settings","You do not have permissions to see the details of this user")))])]):s("div",{staticClass:"row",class:{disabled:e.loading.delete||e.loading.disable},attrs:{"data-id":e.user.id}},[s("div",{staticClass:"avatar",class:{"icon-loading-small":e.loading.delete||e.loading.disable}},[e.loading.delete||e.loading.disable?e._e():s("img",{attrs:{alt:"",width:"32",height:"32",src:e.generateAvatar(e.user.id,32),srcset:e.generateAvatar(e.user.id,64)+" 2x, "+e.generateAvatar(e.user.id,128)+" 4x"}})]),e._v(" "),s("div",{staticClass:"name"},[e._v(e._s(e.user.id))]),e._v(" "),s("form",{staticClass:"displayName",class:{"icon-loading-small":e.loading.displayName},on:{submit:function(t){return t.preventDefault(),e.updateDisplayName(t)}}},[s("input",{ref:"displayName",attrs:{id:"displayName"+e.user.id+e.rand,type:"text",disabled:e.loading.displayName||e.loading.all,autocomplete:"new-password",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.user.displayname}}),e._v(" "),s("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]),e._v(" "),e.settings.canChangePassword?s("form",{staticClass:"password",class:{"icon-loading-small":e.loading.password},on:{submit:function(t){return t.preventDefault(),e.updatePassword(t)}}},[s("input",{ref:"password",attrs:{id:"password"+e.user.id+e.rand,type:"password",required:"",disabled:e.loading.password||e.loading.all,minlength:e.minPasswordLength,value:"",placeholder:e.t("settings","New password"),autocomplete:"new-password",autocorrect:"off",autocapitalize:"off",spellcheck:"false"}}),e._v(" "),s("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):s("div"),e._v(" "),s("form",{staticClass:"mailAddress",class:{"icon-loading-small":e.loading.mailAddress},on:{submit:function(t){return t.preventDefault(),e.updateEmail(t)}}},[s("input",{ref:"mailAddress",attrs:{id:"mailAddress"+e.user.id+e.rand,type:"email",disabled:e.loading.mailAddress||e.loading.all,autocomplete:"new-password",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.user.email}}),e._v(" "),s("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]),e._v(" "),s("div",{staticClass:"groups",class:{"icon-loading-small":e.loading.groups}},[s("multiselect",{staticClass:"multiselect-vue",attrs:{value:e.userGroups,options:e.availableGroups,disabled:e.loading.groups||e.loading.all,"tag-placeholder":"create",placeholder:e.t("settings","Add user in group"),label:"name","track-by":"id",limit:2,multiple:!0,taggable:e.settings.isAdmin,closeOnSelect:!1},on:{tag:e.createGroup,select:e.addUserGroup,remove:e.removeUserGroup}},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.formatGroupsTitle(e.userGroups),expression:"formatGroupsTitle(userGroups)",modifiers:{auto:!0}}],staticClass:"multiselect__limit",attrs:{slot:"limit"},slot:"limit"},[e._v("+"+e._s(e.userGroups.length-2))]),e._v(" "),s("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.t("settings","No results")))])])],1),e._v(" "),e.subAdminsGroups.length>0&&e.settings.isAdmin?s("div",{staticClass:"subadmins",class:{"icon-loading-small":e.loading.subadmins}},[s("multiselect",{staticClass:"multiselect-vue",attrs:{value:e.userSubAdminsGroups,options:e.subAdminsGroups,disabled:e.loading.subadmins||e.loading.all,placeholder:e.t("settings","Set user as admin for"),label:"name","track-by":"id",limit:2,multiple:!0,closeOnSelect:!1},on:{select:e.addUserSubAdmin,remove:e.removeUserSubAdmin}},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.formatGroupsTitle(e.userSubAdminsGroups),expression:"formatGroupsTitle(userSubAdminsGroups)",modifiers:{auto:!0}}],staticClass:"multiselect__limit",attrs:{slot:"limit"},slot:"limit"},[e._v("+"+e._s(e.userSubAdminsGroups.length-2))]),e._v(" "),s("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.t("settings","No results")))])])],1):e._e(),e._v(" "),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.usedSpace,expression:"usedSpace",modifiers:{auto:!0}}],staticClass:"quota",class:{"icon-loading-small":e.loading.quota}},[s("multiselect",{staticClass:"multiselect-vue",attrs:{value:e.userQuota,options:e.quotaOptions,disabled:e.loading.quota||e.loading.all,"tag-placeholder":"create",placeholder:e.t("settings","Select user quota"),label:"label","track-by":"id",allowEmpty:!1,taggable:!0},on:{tag:e.validateQuota,input:e.setUserQuota}}),e._v(" "),s("progress",{staticClass:"quota-user-progress",class:{warn:e.usedQuota>80},attrs:{max:"100"},domProps:{value:e.usedQuota}})],1),e._v(" "),e.showConfig.showLanguages?s("div",{staticClass:"languages",class:{"icon-loading-small":e.loading.languages}},[s("multiselect",{staticClass:"multiselect-vue",attrs:{value:e.userLanguage,options:e.languages,disabled:e.loading.languages||e.loading.all,placeholder:e.t("settings","No language set"),label:"name","track-by":"code",allowEmpty:!1,"group-values":"languages","group-label":"label"},on:{input:e.setUserLanguage}})],1):e._e(),e._v(" "),e.showConfig.showStoragePath?s("div",{staticClass:"storageLocation"},[e._v(e._s(e.user.storageLocation))]):e._e(),e._v(" "),e.showConfig.showUserBackend?s("div",{staticClass:"userBackend"},[e._v(e._s(e.user.backend))]):e._e(),e._v(" "),e.showConfig.showLastLogin?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.user.lastLogin>0?e.OC.Util.formatDate(e.user.lastLogin):"",expression:"user.lastLogin>0 ? OC.Util.formatDate(user.lastLogin) : ''",modifiers:{auto:!0}}],staticClass:"lastLogin"},[e._v("\n\t\t"+e._s(e.user.lastLogin>0?e.OC.Util.relativeModifiedDate(e.user.lastLogin):e.t("settings","Never"))+"\n\t")]):e._e(),e._v(" "),s("div",{staticClass:"userActions"},[e.OC.currentUser===e.user.id||"admin"===e.user.id||e.loading.all?e._e():s("div",{staticClass:"toggleUserActions"},[s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"icon-more",on:{click:e.toggleMenu}}),e._v(" "),s("div",{staticClass:"popovermenu",class:{open:e.openedMenu}},[s("popover-menu",{attrs:{menu:e.userActions}})],1)]),e._v(" "),s("div",{staticClass:"feedback",style:{opacity:""!==e.feedbackMessage?1:0}},[s("div",{staticClass:"icon-checkmark"}),e._v("\n\t\t\t"+e._s(e.feedbackMessage)+"\n\t\t")])])])};r._withStripped=!0;var u=function(){var e=this.$createElement,t=this._self._c||e;return t("ul",this._l(this.menu,function(e,s){return t("popover-item",{key:s,attrs:{item:e}})}))};u._withStripped=!0;var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[e.item.href?s("a",{attrs:{href:e.item.href?e.item.href:"#",target:e.item.target?e.item.target:"",rel:"noreferrer noopener"},on:{click:e.item.action}},[s("span",{class:e.item.icon}),e._v(" "),e.item.text?s("span",[e._v(e._s(e.item.text))]):e.item.longtext?s("p",[e._v(e._s(e.item.longtext))]):e._e()]):e.item.action?s("button",{on:{click:e.item.action}},[s("span",{class:e.item.icon}),e._v(" "),e.item.text?s("span",[e._v(e._s(e.item.text))]):e.item.longtext?s("p",[e._v(e._s(e.item.longtext))]):e._e()]):s("span",{staticClass:"menuitem"},[s("span",{class:e.item.icon}),e._v(" "),e.item.text?s("span",[e._v(e._s(e.item.text))]):e.item.longtext?s("p",[e._v(e._s(e.item.longtext))]):e._e()])])};l._withStripped=!0;var d={props:["item"]},c=i(50),g=Object(c.a)(d,l,[],!1,null,null,null);g.options.__file="src/components/popoverMenu/popoverItem.vue";var h={name:"popoverMenu",props:["menu"],components:{popoverItem:g.exports}},p=Object(c.a)(h,u,[],!1,null,null,null);p.options.__file="src/components/popoverMenu.vue";var m=p.exports,v=i(325),f=i.n(v),w=i(323),_=i.n(w),b=i(7),U=i(326);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}b.default.use(U.a);var C={name:"userRow",props:["user","settings","groups","subAdminsGroups","quotaOptions","showConfig","languages","externalActions"],components:{popoverMenu:m,Multiselect:_.a},directives:{ClickOutside:f.a},mounted:function(){},data:function(){return{rand:parseInt(1e3*Math.random()),openedMenu:!1,feedbackMessage:"",loading:{all:!1,displayName:!1,password:!1,mailAddress:!1,groups:!1,subadmins:!1,quota:!1,delete:!1,disable:!1,languages:!1}}},computed:{userActions:function(){var e=[{icon:"icon-delete",text:t("settings","Delete user"),action:this.deleteUser},{icon:this.user.enabled?"icon-close":"icon-add",text:this.user.enabled?t("settings","Disable user"):t("settings","Enable user"),action:this.enableDisableUser}];return null!==this.user.email&&""!==this.user.email&&e.push({icon:"icon-mail",text:t("settings","Resend welcome email"),action:this.sendWelcomeMail}),e.concat(this.externalActions)},userGroups:function(){var e=this,t=this.groups.filter(function(t){return e.user.groups.includes(t.id)});return t},userSubAdminsGroups:function(){var e=this,t=this.subAdminsGroups.filter(function(t){return e.user.subadmin.includes(t.id)});return t},availableGroups:function(){var e=this;return this.groups.map(function(t){var s=Object.assign({},t);return s.$isDisabled=!1===t.canAdd&&!e.user.groups.includes(t.id)||!1===t.canRemove&&e.user.groups.includes(t.id),s})},usedSpace:function(){return this.user.quota.used?t("settings","{size} used",{size:OC.Util.humanFileSize(this.user.quota.used)}):t("settings","{size} used",{size:OC.Util.humanFileSize(0)})},usedQuota:function(){var e=this.user.quota.quota;e>0?e=Math.min(100,Math.round(this.user.quota.used/e*100)):e=95*(1-1/(this.user.quota.used/(10*Math.pow(2,30))+1));return isNaN(e)?0:e},userQuota:function(){if(this.user.quota.quota>=0){var e=OC.Util.humanFileSize(this.user.quota.quota),t=this.quotaOptions.find(function(t){return t.id===e});return t||{id:e,label:e}}return"default"===this.user.quota.quota?this.quotaOptions[0]:this.quotaOptions[1]},minPasswordLength:function(){return this.$store.getters.getPasswordPolicyMinLength},userLanguage:function(){var e=this,t=this.languages[0].languages.concat(this.languages[1].languages).find(function(t){return t.code===e.user.language});return"object"!==y(t)&&""!==this.user.language?{code:this.user.language,name:this.user.language}:""!==this.user.language&&t}},methods:{toggleMenu:function(){this.openedMenu=!this.openedMenu},hideMenu:function(){this.openedMenu=!1},generateAvatar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32;return OC.generateUrl("/avatar/{user}/{size}?v={version}",{user:e,size:t,version:oc_userconfig.avatar.version})},formatGroupsTitle:function(e){return e.map(function(e){return e.name}).slice(2).join(", ")},deleteUser:function(){var e=this;this.loading.delete=!0,this.loading.all=!0;var t=this.user.id;return this.$store.dispatch("deleteUser",t).then(function(){e.loading.delete=!1,e.loading.all=!1})},enableDisableUser:function(){var e=this;this.loading.delete=!0,this.loading.all=!0;var t=this.user.id,s=!this.user.enabled;return this.$store.dispatch("enableDisableUser",{userid:t,enabled:s}).then(function(){e.loading.delete=!1,e.loading.all=!1})},updateDisplayName:function(){var e=this,t=this.$refs.displayName.value;this.loading.displayName=!0,this.$store.dispatch("setUserData",{userid:this.user.id,key:"displayname",value:t}).then(function(){e.loading.displayName=!1,e.$refs.displayName.value=t})},updatePassword:function(){var e=this,t=this.$refs.password.value;this.loading.password=!0,this.$store.dispatch("setUserData",{userid:this.user.id,key:"password",value:t}).then(function(){e.loading.password=!1,e.$refs.password.value=""})},updateEmail:function(){var e=this,t=this.$refs.mailAddress.value;this.loading.mailAddress=!0,this.$store.dispatch("setUserData",{userid:this.user.id,key:"email",value:t}).then(function(){e.loading.mailAddress=!1,e.$refs.mailAddress.value=t})},createGroup:function(e){var t=this;return this.loading={groups:!0,subadmins:!0},this.$store.dispatch("addGroup",e).then(function(){t.loading={groups:!1,subadmins:!1};var s=t.user.id;t.$store.dispatch("addUserGroup",{userid:s,gid:e})}).catch(function(){t.loading={groups:!1,subadmins:!1}}),this.$store.getters.getGroups[this.groups.length]},addUserGroup:function(e){var t=this;if(!1===e.canAdd)return!1;this.loading.groups=!0;var s=this.user.id,i=e.id;return this.$store.dispatch("addUserGroup",{userid:s,gid:i}).then(function(){return t.loading.groups=!1})},removeUserGroup:function(e){var t=this;if(!1===e.canRemove)return!1;this.loading.groups=!0;var s=this.user.id,i=e.id;return this.$store.dispatch("removeUserGroup",{userid:s,gid:i}).then(function(){t.loading.groups=!1,t.$route.params.selectedGroup===i&&t.$store.commit("deleteUser",s)}).catch(function(){t.loading.groups=!1})},addUserSubAdmin:function(e){var t=this;this.loading.subadmins=!0;var s=this.user.id,i=e.id;return this.$store.dispatch("addUserSubAdmin",{userid:s,gid:i}).then(function(){return t.loading.subadmins=!1})},removeUserSubAdmin:function(e){var t=this;this.loading.subadmins=!0;var s=this.user.id,i=e.id;return this.$store.dispatch("removeUserSubAdmin",{userid:s,gid:i}).then(function(){return t.loading.subadmins=!1})},setUserQuota:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";return this.loading.quota=!0,t=t.id?t.id:t,this.$store.dispatch("setUserData",{userid:this.user.id,key:"quota",value:t}).then(function(){return e.loading.quota=!1}),t},validateQuota:function(e){var t=OC.Util.computerFileSize(e);return null!==t&&t>=0&&this.setUserQuota(OC.Util.humanFileSize(OC.Util.computerFileSize(e)))},setUserLanguage:function(e){var t=this;return this.loading.languages=!0,this.$store.dispatch("setUserData",{userid:this.user.id,key:"language",value:e.code}).then(function(){return t.loading.languages=!1}),e},sendWelcomeMail:function(){var e=this;this.loading.all=!0,this.$store.dispatch("sendWelcomeMail",this.user.id).then(function(s){s&&(e.feedbackMessage=t("setting","Welcome mail sent!"),setTimeout(function(){e.feedbackMessage=""},2e3)),e.loading.all=!1})}}},A=Object(c.a)(C,r,[],!1,null,null,null);A.options.__file="src/components/userList/userRow.vue";var L=A.exports,k=i(327),S=i.n(k),G={name:"userList",props:["users","showConfig","selectedGroup","externalActions"],components:{userRow:L,Multiselect:_.a,InfiniteLoading:S.a},data:function(){var e={id:"none",label:t("settings","Unlimited")},s={id:"default",label:t("settings","Default quota")};return{unlimitedQuota:e,defaultQuota:s,loading:{all:!1,groups:!1},scrolled:!1,searchQuery:"",newUser:{id:"",displayName:"",password:"",mailAddress:"",groups:[],subAdminsGroups:[],quota:s,language:{code:"en",name:t("settings","Default language")}}}},mounted:function(){this.settings.canChangePassword||OC.Notification.showTemporary(t("settings","Password change is disabled because the master key is disabled")),b.default.set(this.newUser.language,"code",this.settings.defaultLanguage),this.setNewUserDefaultGroup(this.$route.params.selectedGroup),this.userSearch=new OCA.Search(this.search,this.resetSearch)},computed:{settings:function(){return this.$store.getters.getServerData},filteredUsers:function(){if("disabled"===this.selectedGroup){var e=this.users.filter(function(e){return!1===e.enabled});return 0===e.length&&this.$refs.infiniteLoading&&this.$refs.infiniteLoading.isComplete&&(this.$router.push({name:"users"}),this.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")),e}return this.settings.isAdmin?this.users.filter(function(e){return!1!==e.enabled}):this.users.filter(function(e){return!1!==e.enabled&&e.id!==oc_current_user})},groups:function(){return this.$store.getters.getGroups.filter(function(e){return"disabled"!==e.id}).sort(function(e,t){return e.name.localeCompare(t.name)})},canAddGroups:function(){return this.groups.map(function(e){return(e=Object.assign({},e)).$isDisabled=!1===e.canAdd,e})},subAdminsGroups:function(){return this.$store.getters.getSubadminGroups},quotaOptions:function(){var e=this.settings.quotaPreset.reduce(function(e,t){return e.concat({id:t,label:t})},[]);return e.unshift(this.unlimitedQuota),e.unshift(this.defaultQuota),e},minPasswordLength:function(){return this.$store.getters.getPasswordPolicyMinLength},usersOffset:function(){return this.$store.getters.getUsersOffset},usersLimit:function(){return this.$store.getters.getUsersLimit},languages:function(){return Array({label:t("settings","Common languages"),languages:this.settings.languages.commonlanguages},{label:t("settings","All languages"),languages:this.settings.languages.languages})}},watch:{selectedGroup:function(e,t){this.$store.commit("resetUsers"),this.$refs.infiniteLoading.$emit("$InfiniteLoading:reset"),this.setNewUserDefaultGroup(e)}},methods:{onScroll:function(e){this.scrolled=e.target.scrollTo>0},validateQuota:function(e){var t=OC.Util.computerFileSize(e);return null!==t&&t>=0?(e=OC.Util.humanFileSize(OC.Util.computerFileSize(e)),this.newUser.quota={id:e,label:e}):this.newUser.quota=this.quotaOptions[0]},infiniteHandler:function(e){this.$store.dispatch("getUsers",{offset:this.usersOffset,limit:this.usersLimit,group:"disabled"!==this.selectedGroup?this.selectedGroup:"",search:this.searchQuery}).then(function(t){t?e.loaded():e.complete()})},search:function(e){this.searchQuery=e,this.$store.commit("resetUsers"),this.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")},resetSearch:function(){this.search("")},resetForm:function(){Object.assign(this.newUser,this.$options.data.call(this).newUser),this.loading.all=!1},createUser:function(){var e=this;this.loading.all=!0,this.$store.dispatch("addUser",{userid:this.newUser.id,password:this.newUser.password,displayName:this.newUser.displayName,email:this.newUser.mailAddress,groups:this.newUser.groups.map(function(e){return e.id}),subadmin:this.newUser.subAdminsGroups.map(function(e){return e.id}),quota:this.newUser.quota.id,language:this.newUser.language.code}).then(function(){return e.resetForm()}).catch(function(){return e.loading.all=!1})},setNewUserDefaultGroup:function(e){if(e&&e.length>0){var t=this.groups.find(function(t){return t.id===e});if(t)return void(this.newUser.groups=[t])}this.newUser.groups=[]},createGroup:function(e){var t=this;return this.loading.groups=!0,this.$store.dispatch("addGroup",e).then(function(s){t.newUser.groups.push(t.groups.find(function(t){return t.id===e})),t.loading.groups=!1}).catch(function(){t.loading.groups=!1}),this.$store.getters.getGroups[this.groups.length]}}},$=Object(c.a)(G,o,[],!1,null,null,null);$.options.__file="src/components/userList.vue";var x=$.exports,N=i(324),q=i.n(N);i(1);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}b.default.use(q.a);var P={name:"Users",props:["selectedGroup"],components:{AppNavigation:n.AppNavigation,userList:x,Multiselect:_.a},beforeMount:function(){this.$store.commit("initGroups",{groups:this.$store.getters.getServerData.groups,orderBy:this.$store.getters.getServerData.sortGroups,userCount:this.$store.getters.getServerData.userCount}),this.$store.dispatch("getPasswordPolicyMinLength")},created:function(){Object.assign(OCA,{Settings:{UserList:{registerAction:this.registerAction}}})},data:function(){return{unlimitedQuota:{id:"none",label:t("settings","Unlimited")},selectedQuota:!1,externalActions:[],showAddGroupEntry:!1,loadingAddGroup:!1,showConfig:{showStoragePath:!1,showUserBackend:!1,showLastLogin:!1,showNewUserForm:!1,showLanguages:!1}}},methods:{toggleNewUserMenu:function(){this.showConfig.showNewUserForm=!this.showConfig.showNewUserForm,this.showConfig.showNewUserForm&&b.default.nextTick(function(){window.newusername.focus()})},getLocalstorage:function(e){var t=this.$localStorage.get(e);return this.showConfig[e]=null!==t?"true"===t:this.showConfig[e],this.showConfig[e]},setLocalStorage:function(e,t){return this.showConfig[e]=t,this.$localStorage.set(e,t),t},removeGroup:function(e){var s=this;OC.dialogs.confirm(t("settings","You are about to remove the group {group}. The users will NOT be deleted.",{group:e}),t("settings","Please confirm the group removal "),function(t){t&&s.$store.dispatch("removeGroup",e)})},setDefaultQuota:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";this.$store.dispatch("setAppConfig",{app:"files",key:"default_quota",value:t.id?t.id:t}).then(function(){"object"!==O(t)&&(t={id:t,label:t}),e.defaultQuota=t})},validateQuota:function(e){var t=OC.Util.computerFileSize(e);return 0===t?this.setDefaultQuota("none"):null!==t&&this.setDefaultQuota(OC.Util.humanFileSize(OC.Util.computerFileSize(e)))},registerAction:function(e,t,s){return this.externalActions.push({icon:e,text:t,action:s}),this.externalActions},createGroup:function(e){var t=this,s=e.target[0].value;this.loadingAddGroup=!0,this.$store.dispatch("addGroup",s).then(function(){t.showAddGroupEntry=!1,t.loadingAddGroup=!1}).catch(function(){t.loadingAddGroup=!1})}},computed:{users:function(){return this.$store.getters.getUsers},loading:function(){return 0===Object.keys(this.users).length},usersOffset:function(){return this.$store.getters.getUsersOffset},usersLimit:function(){return this.$store.getters.getUsersLimit},showLanguages:{get:function(){return this.getLocalstorage("showLanguages")},set:function(e){this.setLocalStorage("showLanguages",e)}},showLastLogin:{get:function(){return this.getLocalstorage("showLastLogin")},set:function(e){this.setLocalStorage("showLastLogin",e)}},showUserBackend:{get:function(){return this.getLocalstorage("showUserBackend")},set:function(e){this.setLocalStorage("showUserBackend",e)}},showStoragePath:{get:function(){return this.getLocalstorage("showStoragePath")},set:function(e){this.setLocalStorage("showStoragePath",e)}},userCount:function(){return this.$store.getters.getUserCount},settings:function(){return this.$store.getters.getServerData},quotaOptions:function(){var e=this.settings.quotaPreset.reduce(function(e,t){return e.concat({id:t,label:t})},[]);return e.unshift(this.unlimitedQuota),e},defaultQuota:{get:function(){return!1!==this.selectedQuota?this.selectedQuota:OC.Util.computerFileSize(this.settings.defaultQuota)>0?{id:this.settings.defaultQuota,label:this.settings.defaultQuota}:this.unlimitedQuota},set:function(e){this.selectedQuota=e}},menu:function(){var e=this,s=this,i=this.$store.getters.getGroups,a=(i=(i=Array.isArray(i)?i:[]).map(function(i){var a={};return a.id=i.id.replace(" ","_"),a.key=a.id,a.utils={},a.router={name:"group",params:{selectedGroup:i.id}},a.text=i.name,i.usercount-i.disabled>0&&(a.utils.counter=i.usercount-i.disabled),"admin"!==a.id&&"disabled"!==a.id&&e.settings.isAdmin&&(a.utils.actions=[{icon:"icon-delete",text:t("settings","Remove group"),action:function(){s.removeGroup(i.id)}}]),a})).find(function(e){return"disabled"!==e.id&&"admin"!==e.id});if(a=void 0===a?[]:a,(a=Array.isArray(a)?a:[a]).length>0){var n={caption:!0,text:t("settings","Groups")};i.unshift(n)}var o=i.find(function(e){return"admin"==e.id}),r=i.find(function(e){return"disabled"==e.id});i=i.filter(function(e){return-1===["admin","disabled"].indexOf(e.id)}),o&&o.text&&(o.text=t("settings","Admins"),o.icon="icon-user-admin",i.unshift(o)),r&&r.text&&(r.text=t("settings","Disabled users"),r.icon="icon-disabled-users",r.utils&&r.utils.counter>0&&i.unshift(r));var u={id:"everyone",key:"everyone",icon:"icon-contacts-dark",router:{name:"users"},text:t("settings","Everyone")};this.userCount>0&&b.default.set(u,"utils",{counter:this.userCount}),i.unshift(u);var l={id:"addgroup",key:"addgroup",icon:"icon-add",text:t("settings","Add group"),classes:this.loadingAddGroup?"icon-loading-small":""};return this.showAddGroupEntry?(b.default.set(l,"edit",{text:t("settings","Add group"),action:this.createGroup,reset:function(){s.showAddGroupEntry=!1}}),l.classes="editing"):b.default.set(l,"action",function(){s.showAddGroupEntry=!0}),i.unshift(l),{id:"usergrouplist",new:{id:"new-user-button",text:t("settings","New user"),icon:"icon-add",action:this.toggleNewUserMenu},items:i}}}},D=Object(c.a)(P,a,[],!1,null,null,null);D.options.__file="src/views/Users.vue";s.default=D.exports}}]);
//# sourceMappingURL=vue-8.js.map