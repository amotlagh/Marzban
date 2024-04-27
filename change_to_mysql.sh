#!/bin/bash

# Prompt for database credentials
read -p "Enter the database name: " db_name
read -p "Enter the database user: " db_user
read -p "Enter the database password: " db_password
echo

# Install MySQL Server and SQLite3
apt install mysql-server sqlite3 -y

# Run the MySQL secure installation with default answers
mysql_secure_installation <<EOF
y
0
y
y
y
y
EOF

# Start MySQL shell and set up the database and user
mysql -u root -p -e "SET GLOBAL validate_password.policy = LOW;"
mysql -u root -p -e "CREATE DATABASE \`${db_name}\`;"
mysql -u root -p -e "CREATE USER '${db_user}'@'%' IDENTIFIED WITH mysql_native_password BY '${db_password}';"
mysql -u root -p -e "GRANT ALL ON \`${db_name}\`.* TO '${db_user}'@'%';"
mysql -u root -p -e "FLUSH PRIVILEGES;"

# Exit MySQL shell
mysql -u root -p -e "exit;"

# Edit the .env file with nano editor
nano ~/Marzban/.env

# Add the following lines to the .env file
echo "SQLALCHEMY_DATABASE_URL = \"mysql+pymysql://${db_user}:${db_password}@127.0.0.1/${db_name}\"" >> ~/Marzban/.env
echo "MYSQL_ROOT_PASSWORD = \"${db_password}\"" >> ~/Marzban/.env

# Dump the data from the SQLite database and prepare the SQL file
sqlite3 /root/Marzban/db.sqlite3 '.dump --data-only' | sed "s/INSERT INTO \([^ ]*\)/REPLACE INTO \`\\1\`/g" > /tmp/dump.sql

# Restart the Marzban service
systemctl restart marzban

# Navigate to the Marzban directory and run Alembic upgrade
cd ~/Marzban/
alembic upgrade head

# Import the SQL dump file into MySQL
mysql -u "${db_user}" -p"${db_password}" -h 127.0.0.1 "${db_name}" -e "SET FOREIGN_KEY_CHECKS = 0; SET NAMES utf8mb4; SOURCE /tmp/dump.sql;"

# Remove the SQL dump file
rm /tmp/dump.sql
