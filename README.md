# angular2-lesson-lib

这是汇智网课程[Angular2入门](http://www.hubwiz.com/course/5599d367a164dd0d75929c76)使用的
库文件，你可以下载到本地练习。

文件清单：

* index.html - 测试文件
* lib/angular2.dev.js - angular2基础框架
* lib/render.dev.js - angular2渲染库
* lib/router.dev.js - angular2路由库
* lib/system@0.16.11.js - systemjs加载库
* lib/system@0.16.11.js.map - systemjs加载库MAP文件
* lib/system.config.js - systemjs配置文件
* lib/es6-module-loader@0.16.6.js - es6模块加载库，systemjs调用它载入es6模块
* lib/es6-module-loader@0.16.6.js - es6模块加载库MAP文件
* lib/traceur.js - es6转码库

## 使用方法

由于systemjs的动态加载机制，需要使用一个简单的Web服务器来访问*index.html*。例如使用Python：

    ~$ git clone https://github.com/hubwiz/angular2-lesson-lib.git
	~$ cd android2-lesson-lib
    ~/android2-lesson-lib$ python -m SimpleHTTPServer

现在可以使用浏览器访问*http://localhost:8000/*来测试了。	