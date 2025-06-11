git checkout -- .
git pull
yarn
yarn docs:build
cp vitepress.conf /etc/nginx/conf.d
rm -rf /var/www/html/vitepress
cp -r markdown/.vitepress/dist /var/www/html/vitepress
systemctl reload nginx.service
