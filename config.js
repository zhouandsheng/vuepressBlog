module.exports = {
    title: '我的博客',
   // theme:'vdoing',
    description: 'Just playing around',
    port:9999,
   
    themeConfig: {
      nav: [       
             {text: '指南',link:'/guide/install/install'},
             {text: '面试题',link:'/mianshiti/01面试题'},
             {text: 'vue相关',link:'/vuedoc/vue文档'},
             {text:'js',link:'/jsdoc/jsdoc'},
             {text:'前端',link:'/blog/fontend/'},
             {text:'前端面试题',
              items:[
                {text:'js面试题',link:'/interview/javascript/'},
                {text:'小程序面试题',link:'/interview/minapp/'},
                //{text:'js面试题',link:'/interview/javascipt/'},
                {text:'git指令',link:'/interview/git/'},
                {text:'vue面试题',link:'/interview/vue/'}
              ]
            }
          ],
      sidebar:{
       // '/interview/minapp/':[['','小程序面试题'],['小程序','基础面试题'],'小程序登入'],
        '/blog/fontend/':['myhtml','myjavascript'],
        //'/interview/minapp/':['','小程序','小程序登入'],
        '/interview/javascript/':['','js'],
        '/interview/git/':['','git基本命令','git2'],
        '/interview/vue/':['','vue面试题'],
        '/interview/minapp/':[['','小程序面试题'],['小程序','基础面试题'],'小程序登入'],
        '/interview/vue/':['','vue2.0','vue面试题']
      },
      
      sidebarDepth:2
    }
  }