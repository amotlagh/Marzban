#!/bin/bash

# Your Telegram bot token and user ID
bot_token="6945349225:AAFziERiCLSsdpNSK8t9pVuSx8bid2GVk_o"
user_id="48103507"

# Define the file path
file_path="/root/Marzban/db.sqlite3"

# Define the Telegram API URL for sending documents
url="https://api.telegram.org/bot$bot_token/sendDocument"

# Send the file using curl
curl -F chat_id="$user_id" -F document=@"$file_path" $url


# chmod +x send_to_telegram.sh
# crontab -e
# 0 * * * * /root/Marzban/send_to_telegram.sh
