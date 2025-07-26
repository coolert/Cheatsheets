# PhpStorm 效率

整理并归类 PhpStorm 使用中的快捷键、设置路径、实用技巧等，适合部署在 Cheatsheet 页面中查阅。

---

## 🧭 导航与查找

- **快速导航搜索**：`Shift + Shift`
- **最近打开的文件**：`Cmd + E`
- **最近访问文件位置**：`Cmd + Shift + E`
- **上/下一个光标位置跳转**：`Cmd + [` / `Cmd + ]`
- **扩大选区（Expand Selection）**：`Alt + ↑`
- **缩小选区（Shrink Selection）**：`Alt + ↓`
- **最近使用的剪贴板**：`Cmd + Shift + V`
- **包裹代码结构（如 try/catch）**：`Alt + Cmd + T`

---

## 🧱 代码结构与跳转

- **查看文件结构**：`Cmd + F12`
- **跳转到定义 / 实现**：
    - `Cmd + B`（跳转定义）
    - `Cmd + Alt + B`（跳转所有实现）
- **快速查看定义（不跳转）**：`Cmd + Y`
- **结构视图与书签**：
    - 打开结构视图：`Cmd + 7`
    - 添加书签：`F3`，查看所有书签：`Cmd + F3`
    - 设置助记书签：`Alt + F3`，快速跳转：`Ctrl + 1~9`

---

## ⚙️ 自动导入与代码优化

- **自动导入类/函数**：输入名称后 `Alt + Enter`
- **优化 import**：`Ctrl + Alt + O`

---

## 🛠️ 重构工具与代码整理

- **提取变量**：`Cmd + Alt + V`
- **提取常量**：`Cmd + Alt + C`
- **提取方法**：`Cmd + Alt + M`
- **查找与替换**：
    - 当前文件：`Cmd + F`（查找） / `Cmd + R`（替换）
    - 全项目：`Cmd + Shift + F` / `Cmd + Shift + R`

---

## 🐞 调试与运行配置

- PhpStorm 使用「运行配置」控制运行/调试方式
- 可为不同目的保存多个运行配置：
    - 调试单文件
    - 运行测试类
    - 调用 Artisan 命令
    - 请求 HTTP 请求

### ✅ PHPUnit 测试配置步骤

1. 设置 PHPUnit：
    - 设置 → PHP → 测试框架 → 新增配置（本地/远程解释器）
2. 添加运行配置：
    - 运行 → 编辑配置 → 新增 phpunit
    - 设置名称、选择 tests 目录、解释器
3. 运行测试：点击右上角绿色三角
4. 调试测试：点击虫子图标（需配置 Xdebug）

---

## 🌿 Git 与版本控制

- **贮藏改动（Stash）**：Git → 未提交更改 → 搁置更改
- **提交代码**：`Cmd + K`
- **推送代码**：`Cmd + Shift + K`
- **拉取代码**：`Cmd + T`
- **比较差异**：`Cmd + D`
- **回滚更改**：`Cmd + Alt + Z`

---

## 📦 Composer 工具集成与包管理

- 设置路径：设置 → PHP → Composer
- 若使用容器，解释器需选远程解释器

---

## 🧹 代码风格与格式化配置

- **代码格式化快捷键**：`Cmd + Alt + L`
- 设置路径：设置 → 编辑器 → 代码样式 → PHP

---

## 🔍 实时代码检查与问题修复

- 设置路径：设置 → 编辑器 → 检查 → PHP
- 查看问题：`Cmd + 6` 或左下角感叹号图标
- 快速修复：`Alt + Enter`

### 🔧 批量清理与检查技巧

- 代码清理：
    - 文件/目录右键 → 重新设置代码格式
    - 菜单栏：代码 → 代码清理
- 检查代码：
    - 菜单栏：代码 → 检查代码（不会自动清理）

---

## 🪄 代码生成与模板

- **快速生成**：
    - 支持构造函数、getter/setter、PHPDoc、重写方法等
    - 快捷键：`Cmd + N`
- **文件模板**：
    - 设置 → 编辑器 → 文件和代码模板
- **实时模板（代码片段）**：
    - 设置 → 编辑器 → 实时模板

---

## 🐳 Docker 与远程开发支持

- 可配置 Docker 或 SSH 远程解释器
- 提高开发环境与部署环境一致性

---

## 🧰 Makefile 与任务自动化

### 示例 Makefile

```makefile
.PHONY: test stan pint ide

test:
	docker compose exec app php artisan test

stan:
	docker compose exec app vendor/bin/phpstan analyse

pint:
	docker compose exec app vendor/bin/pint --dirty

ide:
	docker compose exec app php artisan ide-helper:generate
```

### 执行方式

```bash
make test    # 运行测试
make stan    # 静态分析
make pint    # 格式化代码
```