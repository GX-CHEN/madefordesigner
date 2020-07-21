cd '/root/madefordesigner' || exit
git pull

# deploy frontend portion
cd '/root/madefordesigner/client' || exit
npm install
npm run build || exit
sudo cp -r build/ /var/www/html/madefordesigner/
sudo service nginx reload