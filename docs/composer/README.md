# Composer

## 常用命令

| **命令** | **用途** |
| --- | --- |
| install | 安装依赖（根据 lock） |
| update | 更新依赖并写入 lock |
| require/remove | 添加/移除依赖 |
| dump-autoload | 重建类映射表 |
| show | 查看依赖列表和详情 |
| outdated | 查看可更新包 |
| validate | 校验 composer.json |
| global | 安装 CLI 工具到全局 |

### 常见参数

| 参数                          | 作用说明                                                                 | 使用场景示例                                                                 |
|-----------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------|
| `--no-dev`                  | 不安装 `require-dev` 中的依赖                                           | **生产环境部署**，避免安装开发或测试用包                                    |
| `--prefer-dist`             | 优先使用 `.zip` 或 `.tar` 包下载依赖，避免使用 Git 克隆                 | **构建/生产部署**，下载更快、节省磁盘空间                                   |
| `--no-interaction`          | 禁用交互提示，自动接受默认选项                                         | **CI/CD、自动化部署脚本** 使用                                               |
| `--optimize-autoloader`或`-o`| 生成优化的 classmap 自动加载器                                          | **线上环境推荐**，加快 PSR-4 加载速度                                        |
| `--classmap-authoritative`  | 仅使用 classmap 加载器，不再扫描文件系统                                | **提升性能**，适用于类文件固定不变的生产环境                                 |
| `--no-scripts`              | 不执行 `composer.json` 中定义的 `scripts`（如 post-install）           | **禁用自动化脚本**，用于 CI/CD 环境或避免副作用                             |
| `--ignore-platform-reqs`    | 忽略 PHP 版本、扩展、系统依赖等平台要求                                 | **绕过环境限制**，例如测试或在不兼容环境中临时执行                          |
| `--dry-run`                 | 模拟执行安装流程，不实际写入文件或安装依赖                             | **预览变更/验证依赖** 是否冲突，提前发现潜在问题                            |

### 生产环境命令优化

```bash
## 安装
composer install --no-dev --prefer-dist --no-interaction --optimize-autoloader --classmap-authoritative
## 重建类映射表
composer dump-autoload -o --classmap-authoritative
```

## 自动加载

### 配置解析

```json
//composer.json配置示例
"autoload": {
  "psr-4": {
    "App\\": "app/"
  },
  "classmap": [
    "database/",
    "app/Legacy/"
  ],
  "files": [
    "app/Support/helpers.php"
  ]
}
```

| 类型       | 格式                           | 解释                    |
|----------|------------------------------|-----------------------|
| psr-4    | "App\\": "app/"              | 最常用，类名和目录结构一致         |
| classmap | "classmap": ["database/"]    | 自动扫描所有 PHP 文件生成映射     |
| files    | "files": ["app/helpers.php"] | 立即执行文件，通常用于函数定义，如助手函数 |

### 主要文件

| **文件名** | **作用** |
| --- | --- |
| autoload.php | 入口文件，负责加载其他所有加载器 |
| autoload_psr4.php | PSR-4 加载规则映射（数组） |
| autoload_classmap.php | classmap 映射（类名到文件路径） |
| autoload_files.php | 需要自动引入的文件（files） |
| autoload_static.php | 优化模式下的静态映射文件（配合 -o 参数） |

### 加载顺序与逻辑

1. 先看 classmap（autoload_classmap.php）有没有这个类。
2. 没找到，就去看 PSR-4 映射（autoload_psr4.php），拼接路径并扫描目录。
3. 如果 --optimize-autoloader 被启用，则 autoload_static.php 会替代前面两个文件，以单文件数组查找提升性能，但是保留fallback
4. 如果 --classmap-authoritative 启用，则仅使用 static/classmap 进行查找，并禁用fallback

## 依赖冲突与解决方式

### 常见冲突
| 类型 | 描述 |
| --- | --- |
| ✅ 版本冲突 | 两个依赖包依赖相同组件但版本不一致，如 A 依赖 `guzzle ^7.0`，B 依赖 `guzzle ^6.5` |
| ✅ PHP 扩展冲突 | 缺失必要扩展，如 `ext-json`、`ext-pdo`，或版本不兼容 |
| ✅ 平台 PHP 版本差异 | 项目要求 `php >= 8.1`，但本地或生产环境为 7.4 |
| ✅ 稳定性策略不当 | 使用 `dev-master` 时未正确设置 `minimum-stability` 和 `prefer-stable` |
| ✅ 依赖链复杂 | 多层嵌套依赖，冲突源头难以快速定位 |
| ✅ 报错信息不清晰 | Composer 报错信息难以直观定位问题 |

### 使用命令

```bash
# 查看指定包的依赖来源
composer why 包名

# 查看为何无法安装某个版本
composer why-not 包名 版本号

# 检查两个包是否存在互斥关系
composer prohibits 包A 包B

# 预演更新操作（不实际变更）
composer update --dry-run

# 查看当前依赖的完整树结构
composer show --tree

# 获取详细调试日志
composer update --verbose

```

### 实践建议

- ✅ 避免使用  或 `dev-master`，推荐使用 `^` 或 `~` 控制精确版本范围
- ✅ 将 `composer.lock` 納入版本控制，确保依赖一致性
- ✅ 设置合理稳定性策略，允许开发版本依赖但优先使用稳定版本：

```json
{
  "minimum-stability": "dev",
  "prefer-stable": true
}

```

- ✅ 明确声明 PHP 扩展依赖，避免部署出错（特别是在 Docker 中）：

```json
{
  "require": {
    "ext-json": "*",
    "ext-pdo": "*"
  }
}

```