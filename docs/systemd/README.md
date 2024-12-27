# systemd 常用命令

## 启动

```bash
systemctl start <service>
```

## 停止

```bash
systemctl stop <service>
```

## 重启

```bash
systemctl restart <service>
```

## 重新加载服务配置

```bash
systemctl reload <service>
```

## 查看服务状态

```bash
systemctl status <service>
```

## 开机自启

```bash
systemctl enable <service>
```

## 取消开机自启

```bash
systemctl disable <service>
```

## 列出所有运行的服务

```bash
systemctl list-units --type=service
```

## 列出所有服务(包含未加载)

```bash
systemctl list-unit-files --type=service
```