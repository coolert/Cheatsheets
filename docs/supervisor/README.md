# supervisor

## 进程管理

### 启动指定进程

```shell
supervisorctl start <process_name>
```

### 停止指定进程

```shell
supervisorctl stop <process_name>
```

### 重启指定进程

```shell
supervisorctl restart <process_name>
```

### 启动全部进程

```shell
supervisorctl start all
```

### 停止全部进程

```shell
supervisorctl stop all
```

### 重启全部进程

```shell
supervisorctl restart all
```

## 日志查看

### 查看最近部分日志

```shell
supervisorctl tail <process_name>
```

### 查看错误日志

```shell
supervisorctl tail -f <process_name> stderr
```

### 实时查看完整日志

```shell
supervisorctl tail -f <process_name>
```