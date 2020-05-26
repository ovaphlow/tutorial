# GitHub flow

## 工作步骤

### 在本地创建 <FEATURE_NAME> 分支

```bash
git branch <FEATURE_NAME>
git checkout <FEATURE_NAME>
```

### 将 <FEATURE_NAME> 分支上传至服务器

```bash
git push --set-upstream origin <FEATURE_NAME>
```

### 本地开发阶段

```bash
git status
```

```bash
git add --all
git commit --message="..."
```

```bash
git push
```

### 提交 pull request

### 更新本地 master 分支

```bash
git checkout master
git pull --rebase
git branch --delete <FEATURE_NAME>
git push origin --delete <FEATURE_NAME>
```
