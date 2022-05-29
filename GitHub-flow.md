# GitHub flow

## 工作步骤

### 在本地创建 <FEATURE_NAME> 分支

```bash
git branch <FEATURE_NAME>
git checkout <FEATURE_NAME>
```



### 本地开发阶段

```
git status
```

```
git add --all
git commit --message "close #ISSUE_NUMBER"
```

### 将 <FEATURE_NAME> 分支提交至服务器

```
git push --set-upstream origin <FEATURE_NAME>
```

### 提交 pull request

### 管理员 review code

### 管理员合并分支

### 更新本地 master 分支

```
git checkout master
git pull --rebase
git branch --delete <FEATURE_NAME>
git push origin --delete <FEATURE_NAME>
```

## 其它

### 查看所有分支

```shell
git branch --all
```

### 将远程分支拉取到本地

```shell
git fetch origin REMOTE_BRANCH:LOCAL_BRANCH
```

### 本地分支设置关联到远程分支

```shell
git branch --set-upstream-to origin/REMOTE_BRANCH LOCAL_BRANCH
```
