## 使用npm / cnpm

    // 获取node/npm版本号：
    $ node -v
    $ npm -v
    // 获取node仓库地址、重置仓库地址：
    $ npm get registry
    $ npm config set registry https://registry.npmjs.org/
    // 安装node.js最新版本：
    $ npm install n -g
    $ n latest     // 使用n模块，安装最新的node.js版本。


## 使用淘宝镜像

    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    $ npm config set registry https://registry.npm.taobao.org
    $ cnpm install [module name]
    $ npm config get registry               // 验证cnpm仓库切换是否成功


## vue环境搭建【vue-cli】

    $ npm install  -g  vue-cli     // 安装vue命令行工具
    $ vue init webpack my-project-name           // 使用webpack脚手架来初始化vue项目、项目初始化
    $ cd my-project-name      // 进入项目根目录
    $ npm install                      // 为初始项目安装package.json中的模块依赖
    $ npm run dev                    // 运行vue项目
    $ npm run build                 // 打包vue项目，存放至/dist目录中


## angular环境搭建【angular-cli】

    $ npm install -g typescript       //安装TypeScript
    $ npm install -g angular-cli      //安装angular-cli
    $ ng new demo-name        //创建一个angular项目，名字叫demo-name
    $ ng serve          // 在项目文件的根目录下执行该命令，运行该项目
    $ ng generate component hello-world       //创建<hello-world>组件


## react环境搭建【create-react-app】

    $ cnpm install -g create-react-app    // 安装create-react-app，自动创建的项目是基于Webpack ES6
    $ create-react-app my-app        // 初始化项目，项目名字叫“my-app”
    $ cd my-app                   // 进入项目根目录
    $ npm start                    // 运行项目
    $ npm run build             // 打包react项目，存放至/dist目录中


## svn命令行

http://blog.csdn.net/yangzhongxuan/article/details/7018168



2017-10-06
