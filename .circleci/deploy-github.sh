git config user.name "$GH_NAME"
git config user.email "$GH_EMAIL"

git checkout master
git pull origin master

find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv _site/* .
rm -R _site/

git add -fA
git commit --allow-empty -m "$(git log dev-1.0 -1 --pretty=%B)"
git push origin master

echo "deployed successfully"