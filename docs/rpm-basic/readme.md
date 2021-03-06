<!-- Date: 2017-11-20 23:32 -->

# rpm 包管理基础

#### RPM 包命名规则

-   软件包名
-   软件版本
-   软件发布次数
-   适合的 Linux 平台
-   适合的硬件平台
-   包扩展名

#### RPM 包安装

```
rpm -ivh 包全名
-i: install
-v: verbose 显示安装详情
--nodeps 不检查依赖（安装的时候强烈建议不要使用）
RPM包的升级和卸载
```

#### 升级：

```
rpm -Uvh 包全名
-u: update 升级
```

#### 卸载：

```
rpm -e 包名
-e: erase 卸载
```

#### RPM 包查询

```
rpm -q 包名
-q: query 查询
-a: all 查询所有安装的包
```

#### RPM 包详情查询

```
rpm -qi 包名
-q: query
-i: information
-p: package 查询未安装包的信息 这里要用包全名
```

#### RPM 包安装位置

```
rpm -ql 包名(包全名)
-l: list   查询软件包的安装位置或者要安装的位置
```

#### 查询系统文件属于哪个软件包

```
rpm -qf 文件名
-f: file  文件名
```

#### RPM 包默认安装位置

```
/etc/           配置文件安装目录
/usr/bin/       可执行的命令安装目录
/usr/lib/       程序所使用的函数库保存位置
/usr/share/doc/ 基本的软件使用手册保存位置
/usr/share/man/ 帮助文件保存位置
```

#### 校验 RPM 安装包

```
rpm -V 包名
-V： verify 校验
```

#### 校验信息：

```
S   文件打下是否被改变
M   文件的权限是否被改变
5   MD5是否改变
D   设备的主从代码是否改变
L   文件的路径是否改变
U   文件的属主（所有者）是否改变
G   文件的属组是否改变
T   文件的修改时间是否被改变
```

#### 文件类型：

```
c   配置文件
d   普通文档
g   鬼（ghost file）文件，很少见，就是该文件不应该被这个RPM包含
L   授权文件
r   描述文件
```

#### RPM 包中文件提取

```
rpm2cpio 包全名 | cpio -idv 文件绝对路径
- rpm2cpio 将RPM包转换为cpio格式的命令
- cpio      是一个标准工具，用于创建软件档案文件，和从档案文件中提取文件
    -i: copy-in模式，还原
    -d: 还原时自动新建目录
    -v：显示还原过程
```
