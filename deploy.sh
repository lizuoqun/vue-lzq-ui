# #!/usr/bin/env sh

# # abort on errors
# set -e

# # build
# npm run docs:build

# # navigate into the build output directory
# cd docs/.vuepress/dist

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/lizuoqun/vue-lzq-ui.git master:gh-pages

# cd -


# 构建
vuepress build docs

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f https://github.com/lizuoqun/vue-lzq-ui-1.git master:gh-pages