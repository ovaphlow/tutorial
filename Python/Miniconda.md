# Miniconda

## 安装

[下载地址](https://docs.conda.io/en/latest/miniconda.html#linux-installers)

### Linux

```shell
source Miniconda3-latest-Linux-x86_64.sh
```

根据安装时所选的设置，可能需要运行

```shell
conda init zsh
```

```shell
exoprt PATH=~/miniconda3/bin:$PATH
```

## 虚拟环境

### 初始化

```shell
conda create --name ENV_NAME python
```

### 激活

```shell
conda activate ENV_NAME
```

## 安装库

```shell
conda install pandas
```
