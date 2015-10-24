## 配置须知

环境依赖：

- `node`
- `ruby`

#### 镜像配置

```bash
#ruby
gem sources --remove https://rubygems.org/
gem sources -a http://ruby.taobao.org/

#vim ~/.npmrc
registry = https://registry.npm.taobao.org
```

#### 安装依赖包

```bash
gem install sass

gem install compass

npm install -g gulp

npm install
```

#### 安装额外依赖

```bash
npm install package_name --save
npm install package_name --dev-save
```

## 启动调试环境

```bash
gulp
```

## 开发包说明
gulp 是任务运行环境，用来进行任务调度
del 删除文件夹及文件
gulp-changed 检查文件变化
gulp-jade jade编译
gulp-compass compass编译
gulp-image 图片压缩
watchify 与browserify联合使用，监听Js变化，实现browserify即时打包
browserify 用来实现require js 的模块
vinyl-source-stream 把 browserify 输出的数据进行准换，使之流符合 gulp 的标准
vinyl-buffer 缓存文件内容
gulp-util 日志管理
lodash.assign 类似underscore
gulp-uglify js压缩
babelify 本来的主要作用是进行 ES6 的编译，但是我们这里是使用它的 JSX 编译功能
browser-sync 多终端同时测试服务，同时可以实现监听功能