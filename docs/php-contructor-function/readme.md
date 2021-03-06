<!-- Date: 2016-10-03 10:25 -->

# php 的面向对象

# 修饰符

| 修饰符    | 作用                                                                |
| --------- | ------------------------------------------------------------------- |
| class     | 声明一个类                                                          |
| public    | 声明这个字段或方法可以在类外访问，如果不加这个修饰符，默认是 public |
| private   | 私有化一个字段或方法，只有类内可以访问，类外不可访问                |
| const     | 声明一个常量                                                        |
| static    | 声明一个静态变量                                                    |
| final     | 声明类不能被扩展，或者声明一个方法不能被重写                        |
| abstract  | 声明一个抽象类                                                      |
| interface | 声明一个接口                                                        |

# 构造方法

1.方法名和类名一致的情况下，属于构造方法

2.构造方法在实例化的时候就会自动运行

3.但是 PHP5 以后有新的创建构造方法的方法

    __construct(){}

# 析构方法

1.析构方法是在每一个类实例后，会自动执行

2.一般可用于清理内存中对象(脚本执行完毕的时候会自动清理)。而如果有脚本执行完毕后并没有清理的，比如数据库数据等，就有必要使用析构方法。

    __destruct(){}

# 私有变量的赋值和取值

`set 和`get 方法私有了，还是可以执行是因为：

当从外部访问字段，发现是私有字段的时候，会自动检查拦截器

因此拦截器会自动执行的，不需要完全暴露给外部

因此`get 和`set 是特殊的内置方法

# 父类的继承

父类中 public 定义的字段和方法可以被子类直接访问到

父类中 private 定义的字段和方法，不能被子类直接访问，除非使用 protected 修饰符

子类想要使用父类中的方法，可以使用父类::方法名 或者 parent::方法名

# 抽象类

抽象类是给子类来继承的，实现一种规范和资源的共享

抽象类只能被继承，不能被实例化

抽象方法必须被子类重写

抽象类里的普通方法不需要重写，子类会直接继承下来

只要类里面有一个方法是抽象方法，那么这个类就必须加上 abstract

抽象方法是不需要打开的，而且后面要加上分号

# 接口

类只能支持单继承，不能实现多继承，但是接口可以

接口是为了规范实现他的子类，以达到统一的目的

1.类全部为抽象方法（不需要声明 abstract）

2.接口抽象方法必须是 public

3.成员（字段）必须是常量

4.接口里的所有方法都是抽象方法，不能写方法体

5.接口的抽象方法不需要写 abstract

6.如果要继承额多个类的方法规范，就可以使用接口

7.如果要共享一个方法体的内容，那么就用抽象类

# 魔术函数

## \_\_autoload(\$className){}

PHP 引入了`autoload()内置方法来自动包含类文件。`autoload()应该被写成单个参数的方法。当 PHP 引擎遇到试图实例化未知类的操作时，会调用\_\_autoload()方法，并将类名当作字符串参数传递给它。

# \_\_call($\_methodName,$args){}

PHP 采用了`call()内置方法来屏蔽对象调用方法时产生的错误。当对象调用一个不存在的方法时，会自动调用`call()方法

## \_\_toString(){}

PHP 使用`toString()内置方法来打印对象的引用。没有使用`toString()的对象是产生一个错误，当打印对象的时候会自动调用\_\_toString()方法。

## \_\_clone(){}

PHP 可以在类中定义一个`clone()内置方法来调整对象的克隆行为。当一个对象被克隆的时候自动执行`clone()方法，而复制的对象可以在其方法体内进行调整。

# 类函数和对象函数

| 函数                | 用法                                                                               |
| ------------------- | ---------------------------------------------------------------------------------- |
| class_exists()      | 函数接受表示类的字符串，检查并返回布尔值。如果类存在，返回 true ，否则返回 false。 |
| get_class()         | 函数获取对象的类名，如果不是对象，则返回 false。                                   |
| get_class_methods() | 函数获取类中的方法(公共的)，以数组的形式返回出来。                                 |
| get_class_vars()    | 函数获取类中的字段(公共的)，以数组的形式返回出来                                   |
| get_parent_class()  | 函数获取子类的父类，如果没有返回 false。                                           |
| interface_exists()  | 函数确定接口是否存在，如果存在返回 true，否则返回 false。                          |
| is_a()              | 函数确定对象是否是类或者是否是这类的父类时，返回 ture，否则返回 false。            |
| is_subclass_of()    | 函数确定对象是否是类的子类，是返回 ture，否则返回 false。                          |
| method_exists()     | 函数确定对象的方法是否存在，是返回 ture，否则返回 false。                          |
