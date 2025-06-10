yarn i
yarn docs:build
cp vitepress.conf /etc/nginx/conf.d
systemctl reload nginx.service
