# crontab

crontab 配置每个用户是独立的，所以可以指定用户操作

## 查看任务

```bash
crontab -l
```

## 编辑

```bash
crontab -e
# 指定用户
sudo -u www-data crontab -e
```