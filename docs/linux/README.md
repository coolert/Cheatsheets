# Linux 常用命令

## 文件操作

```bash
# 磁盘还有多少空间
df -h

# 某个目录占多大
du -sh /path

# 看文件详情和大小
ls -lh
```

## 端口信息

```bash
# 看哪些端口正在监听，以及对应进程
ss -tulpn

# 端口占用
lsof -i:80
```

## 系统资源

```bash
# 剩余内存
free -h

# 进程与资源使用
top/htop
```
