
# Setup .env File
    - PORT=3000
    - MONGO_USER=mongo_username
    - MONGO_PASSWORD=mongo_password
    - MONGO_PORT=27017
    - MONGO_IP=mongo


# Run the Project
    - docker-compose up -d --build


# Access the App
    - http://localhost:3000, or
    - http://<your-local-ip>:3000


# Stop the Containers
    - docker-compose down


# MongoDB sample data inserting script
    - docker-compose exec node-app node user_create_script.js

# Viewing created data
    - docker-compose exec node-app node list_user.js


# MongoDB Backup Script
    - chmod +x mongo_backup.sh
    - ./mongo_backup.sh

# Backup location
    - "./db_backups"

# Bitbucket repository link
    - https://bitbucket.org/cjankawan/devops_traning_assignment
