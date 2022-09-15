# vue-hello

1. vue-cli 会自动加载环境变量文件，基于[dotenv](https://github.com/motdotla/dotenv#rules)这个工具
    ```shell
    $ vue-cli-service build --mode development
    ```
    加载哪个配置文件取决于mode参数
2. 在开启代理的模式下，vue-cli的热更新会失败，主要是因为热更新的websocket连接无法正常连接
3. 
