#!/bin/bash

# Your Telegram bot token and user ID
bot_token="YourBotToken"
user_id="YourUserID"

# Define the file path
file_path="/root/Marzban/db.sqlite3"

# Define the Telegram API URL for sending documents
url="https://api.telegram.org/bot$bot_token/sendDocument"

# Send the file using curl
curl -F chat_id="$user_id" -F document=@"$file_path" $url



# chmod +x dbbackup.sh
# crontab -e
# 0 * * * * /root/Marzban/dbbackup.sh
