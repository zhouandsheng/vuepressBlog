(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{423:function(e,a,t){"use strict";t.r(a);var s=t(56),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一、vue概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、vue概念"}},[e._v("#")]),e._v(" 一、Vue概念")]),e._v(" "),t("h3",{attrs:{id:"_1-vue特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue特点"}},[e._v("#")]),e._v(" 1.Vue特点")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.采用组件化模式，提高代码复用率，且让代码更好维护\n2.声明式编码，让编码人员无需直接操作DOM，提高开发效率\n3.使用虚拟DOM+优秀的Diff算法，尽量复用DOM节点\n")])])]),t("h3",{attrs:{id:"_2-vue中mvvm模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue中mvvm模型"}},[e._v("#")]),e._v(" 2.vue中MVVM模型")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("M：模型(Model)：对应daa中的数据\nV：视图（View）：模板\nVM:视图模型（ViewModel）:Vue实例对象\n")])])]),t("h3",{attrs:{id:"_3-介绍一下spa以及spa有什么缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-介绍一下spa以及spa有什么缺点"}},[e._v("#")]),e._v(" 3.介绍一下SPA以及SPA有什么缺点")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SPA是单页面应用，就是指只有一个主页面的应用\n优点：用户体验好，快，内容改变不需要重新加载整个页面，对服务器压力较小，前后端分离，页面效果炫酷\n缺点：不利于seo，初次加载耗时较多，页面复杂度高\n")])])]),t("h3",{attrs:{id:"_4-vue项目优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue项目优化"}},[e._v("#")]),e._v(" 4.Vue项目优化")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.路由懒加载:使用时候会变成按需加载\nconst router = new VueRouter({\n    routes:[\n        {path:'/foo',component:()=>import('./Foo.vue')}\n    ]\n})\n2.keep-alive 缓存页面\n3.使用v-show复用修复DOM\n4.v-for与v-if避免同时使用\n5.长列表性能优化\n    只显示，不发生任何变化，就不需要相应画\n    大数据长列表，可采用虚拟滚动  <recycle-scroller> 只渲染显示范围的数据，用户滚动的时候更新后面的数据\n6.事件的销毁 定时器的清除\n7.图片懒加载  vue-lazyload \n8.第三方插件按需引入\n（1）代码层面的优化\n\nv-if 和 v-show 区分使用场景\n\ncomputed 和 watch 区分使用场景\n\nv-for 遍历必须为 item 添加 key，且避免同时使用 v-if\n\n长列表性能优化\n\n事件的销毁\n\n图片资源懒加载\n\n路由懒加载\n\n第三方插件的按需引入\n\n优化无限列表性能\n\n服务端渲染 SSR or 预渲染\n（2）Webpack 层面的优化\n\nWebpack 对图片进行压缩\n\n减少 ES6 转为 ES5 的冗余代码\n\n提取公共代码\n\n模板预编译\n\n提取组件的 CSS\n\n优化 SourceMap\n\n构建结果输出分析\n\nVue 项目的编译优化\n")])])]),t("h3",{attrs:{id:"_5-vue打开页面空白原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue打开页面空白原因"}},[e._v("#")]),e._v(" 5.vue打开页面空白原因")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("在vue.config.js文件中的  publicPath:'/   =>./\n")])])]),t("h2",{attrs:{id:"二、vue基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、vue基础"}},[e._v("#")]),e._v(" 二、Vue基础")]),e._v(" "),t("h3",{attrs:{id:"_1-vue中v-if和v-show是做什么用的-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue中v-if和v-show是做什么用的-有什么区别"}},[e._v("#")]),e._v(" 1.vue中v-if和v-show是做什么用的，有什么区别")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("v-if    创建节点  没有元素\nv-shou  显示，隐藏 有元素\n\nv-if是真正的条件渲染，因为他会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建\nv-show不管初始条件是什么，元素都会进行渲染，只是简单的基于css进行切换\n一般v-if有更高的切换开销，而v-show有更高的初始渲染开销，因此需要频繁的切换则使用v-show比较好\n如果运行时条件不太可能变则使用v-if较好\n")])])]),t("h3",{attrs:{id:"_2-如何让css只在当前组件中起作用-并且如何进行样式穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何让css只在当前组件中起作用-并且如何进行样式穿透"}},[e._v("#")]),e._v(" 2.如何让CSS只在当前组件中起作用，并且如何进行样式穿透")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("在style标签内加上scoped 属性就表示样式只在当前组件内使用<style scoped>\n样式穿透: 父元素 /deep/||>>> 子元素\n")])])]),t("h3",{attrs:{id:"_3-v-model是什么-怎么使用-实现原理是什么-vue中标签怎么绑定事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-v-model是什么-怎么使用-实现原理是什么-vue中标签怎么绑定事件"}},[e._v("#")]),e._v(" 3.v-model是什么？怎么使用？实现原理是什么？vue中标签怎么绑定事件？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("v-model可以实现双向绑定\n事件绑定 v-on:click 简写 @click\n在移动端click有300ms延迟问题，解决这个问题可以引入faskClick\nnpm install fastclick\nimport FastClick from 'fastclick'\nFastClick.attach(document.body)\n")])])]),t("h3",{attrs:{id:"_4-vue-loader是什么-使用它有什么用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-loader是什么-使用它有什么用途"}},[e._v("#")]),e._v(" 4.vue-loader是什么？使用它有什么用途？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("解释：vue文件的一个加载器，将template/js/style 转换成js模块\n用途：js可以写es6,style样式可以写scss或者less,template等\n")])])]),t("h3",{attrs:{id:"_5-nexttick是做什么的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-nexttick是做什么的"}},[e._v("#")]),e._v(" 5.nextTick是做什么的？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("nextTick是在下次DOM更新循环结束之后执行的延迟回调，在修改数据之后使用nextTick，则可以在回调中获取更新后的DOM\n使用场景：引入swiper 实例化轮播图时\n")])])]),t("h3",{attrs:{id:"_6-vue组件中data为什么必须是函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue组件中data为什么必须是函数"}},[e._v("#")]),e._v(" 6.Vue组件中data为什么必须是函数？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("防止组件与组件之间的数据污染，作为一个函数返回对象，那么每一个data属性都是独立的，互不影响\nVue组件可能存在多个实例，如果使用对象形式定义data,则会导致他们共用一个data对象，那么状态会变更\n将影响所有的组件实例，这时不合理，\n采用函数形式定义initData会将其作为工厂韩式返回全新的data\n有效的避免多个实例之间状态污染问题，Vue根实例创建不存在该限制，因为根实例只有一个\n")])])]),t("h3",{attrs:{id:"_7-对keep-alive的了解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-对keep-alive的了解"}},[e._v("#")]),e._v(" 7.对keep-alive的了解")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("用来缓存组件 提升性能\n用来缓存组件 提升性能 是vue内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染\nkeep-alive它不会在dom树中渲染\n使用时会多两个生命周期函数 activated 激活  deactivated 停用\n使用场景 如进入详情页，每次都是相同的，就可以缓存起来，没必要再次请求\n")])])]),t("h3",{attrs:{id:"_8-vue中key的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-vue中key的作用"}},[e._v("#")]),e._v(" 8.Vue中key的作用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("key的作用主要是为了高效的更新虚拟DOM\n如果节点类型不同，直接干掉前面所有的节点，再创建并插入新的节点，不会在比较这个节点之后的子节点\n\n如果节点类型相同，则会重新设置节点的属性，从而实现节点的更新\n\n举例 A B C D E   在B和C中插入F\n")])])]),t("h3",{attrs:{id:"_9-v-if与v-for的优先级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-v-if与v-for的优先级"}},[e._v("#")]),e._v(" 9.v-if与v-for的优先级")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.v-for优先级高于v-if被解析\n2.如果同时出现每循环都会执行判断条件，是无法避免的，浪费性能\n3.解决办法：在外层嵌套<template></template>在这一层进行判断，内部在进行循环\n")])])]),t("h3",{attrs:{id:"_10-ref是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-ref是什么"}},[e._v("#")]),e._v(" 10.ref是什么")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("来获取dom节点\n确保节点渲染完成\n")])])]),t("h3",{attrs:{id:"_11-双向数据绑定原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-双向数据绑定原理"}},[e._v("#")]),e._v(" 11.双向数据绑定原理")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("vue是通过Object.defineProperty()来实现数据劫持的\nObject.defineProperty(对象，属性，{\n    get(val){},\n    set(val){}\n})\n总结：vue数据双向绑定是通个数据劫持结合发布者-订阅者模式来实现的\n\n1.事件一个监听器Observer,用来劫持并监听所有属性，如有变动，就通知订阅者\n2.实现一个订阅者Watcher,可以收到属性变化通知，并执行相应的函数，从而更新视图\n3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令并根据初始化模板数据以及初始化相应的订阅器\n")])])]),t("h3",{attrs:{id:"_12-vue组件通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-vue组件通信"}},[e._v("#")]),e._v(" 12.vue组件通信")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。\n\n（1）props / $emit 适用 父子组件通信\n\n这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。\n\n（2）ref 与 children 适用 父子组件通信\n\nref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例\n\nchildren：访问父 / 子实例\n\n（3）EventBus （on） 适用于 父子、隔代、兄弟组件通信\n\n这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。\n\n（4）listeners 适用于 隔代组件通信\n\nattrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。\n\nlisteners" 传入内部组件\n\n（5）provide / inject 适用于 隔代组件通信\n\n祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。\n\n（6）Vuex 适用于 父子、隔代、兄弟组件通信\n\nVuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。\n\nVuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。\n\n改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。\n')])])]),t("h3",{attrs:{id:"_13-props和data优先级谁高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-props和data优先级谁高"}},[e._v("#")]),e._v(" 13.props和data优先级谁高")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("props > methods > data >computed > watch\n")])])]),t("h3",{attrs:{id:"_14-computed-methods-watch有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-computed-methods-watch有什么区别"}},[e._v("#")]),e._v(" 14.computed ,methods ,watch有什么区别")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.computed vs methods\ncomputed是有缓存的，methods没有缓存\n2.computed va watch\nwatch是监听到当前数据发生改变，才会执行\ncomputed 是监听某一个属性发生改变才会执行\n")])])]),t("h3",{attrs:{id:"_15-vue常用的指令有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-vue常用的指令有哪些"}},[e._v("#")]),e._v(" 15.vue常用的指令有哪些")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("v-html,v-text,v-if,\nv-show , v-for\nv-bind\nv-model\nv-on\n")])])]),t("h2",{attrs:{id:"三、vue生命周期部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、vue生命周期部分"}},[e._v("#")]),e._v(" 三、Vue生命周期部分")]),e._v(" "),t("h3",{attrs:{id:"_1-vue生命周期有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue生命周期有哪些"}},[e._v("#")]),e._v(" 1.vue生命周期有哪些")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("beforeCreate\ncreated  实例被创建后 $data已经存在\nbeforemount\nmounted 实例被挂在之后$el,$data已经存在\nbeforeUpdate\nupdated 新的数据对象data渲染之后\nbeforeDestroy\ndestroyed  组件销毁后\n\n第一次进入组件或者页面执行哪些生命周期函数\n\nbeforeCreate\ncreated\nbeforeMount\nmounted\n")])])]),t("h2",{attrs:{id:"四、vue请求数据接口部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、vue请求数据接口部分"}},[e._v("#")]),e._v(" 四、Vue请求数据接口部分")]),e._v(" "),t("h2",{attrs:{id:"五、vue路由部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、vue路由部分"}},[e._v("#")]),e._v(" 五、Vue路由部分")]),e._v(" "),t("h3",{attrs:{id:"_1-路由导航守卫有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-路由导航守卫有哪些"}},[e._v("#")]),e._v(" 1.路由导航守卫有哪些")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("全局守卫，\n    router.beforeEach((to,from,next){})  全局前置守卫\n    router.beforeResolve((to,from,next){})  全局解析守卫\n    afterEach((to,from,next){})  全局后置钩子\n路由独享\n    beforeEnter\n组件内的守卫\n    beforeRouteEnter\n    beforeRouteUpdate\n    beforeRouteLeave\n")])])]),t("h3",{attrs:{id:"_2-路由模式有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-路由模式有哪些"}},[e._v("#")]),e._v(" 2.路由模式有哪些")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("hash  \nhistory\n")])])]),t("h3",{attrs:{id:"_3-路由跳转的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-路由跳转的方式"}},[e._v("#")]),e._v(" 3.路由跳转的方式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. router-link\n\n2. this.$router.push() (函数里面调用)\n\n3. this.$router.replace() (用法同push)\n\n4. this.$router.go(n)\n")])])]),t("h3",{attrs:{id:"_4-route和-router的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-route和-router的区别"}},[e._v("#")]),e._v(" 4.$route和$router的区别")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("$router为vueRouter的实例,相当于一个全局路由对象，里面含有很多属性和子对象\n\n$route相当于当前正在跳转的路由对象，nane,path,query,params\n")])])]),t("h3",{attrs:{id:"_5-怎么使用动态路由-怎么获取动态路由的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-怎么使用动态路由-怎么获取动态路由的参数"}},[e._v("#")]),e._v(" 5.怎么使用动态路由,怎么获取动态路由的参数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("在router目录下的index.js文件中对path属性加上 /:id\n\n接收：使用 $route.params.id\n")])])]),t("h2",{attrs:{id:"六、vuex部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、vuex部分"}},[e._v("#")]),e._v(" 六、Vuex部分")]),e._v(" "),t("h3",{attrs:{id:"_1-vuex解决刷新数据丢失的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuex解决刷新数据丢失的问题"}},[e._v("#")]),e._v(" 1.vuex解决刷新数据丢失的问题")]),e._v(" "),t("h3",{attrs:{id:"_1-解释一下vuex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-解释一下vuex"}},[e._v("#")]),e._v(" 1.解释一下vuex")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。\n\n（1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。\n\n（2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。\n\n主要包括以下几个模块：\n\nState：定义了应用状态的数据结构，可以在这里设置默认的初始状态。\n\nGetter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。\n\nMutation：是唯一更改 store 中状态的方法，且必须是同步函数。\n\nAction：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。\n\nModule：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);