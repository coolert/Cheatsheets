# 番剧数据更新

## bangumi-data

```shell
php artisan bangumi:update
```

## 离线数据更新

鉴于git安全问题，需要在执行时切换角色

```shell
sudo -u www-data php artisan bangumi:offline-update
```