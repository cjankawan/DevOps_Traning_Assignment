#!/bin/bash

# === Config ===
MONGO_CONTAINER="devops_traning_assignment-mongo-1"  # Replace with your actual container name (check with `docker ps`)
BACKUP_DIR="./db_backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_NAME="backup_$TIMESTAMP"

# === Ensure backup directory exists ===
mkdir -p "$BACKUP_DIR"

# === Run mongodump inside the Mongo container ===
docker exec "$MONGO_CONTAINER" mongodump \
  --username mongo_username \
  --password mongo_password \
  --authenticationDatabase admin \
  --out "/data/db/$BACKUP_NAME"

# === Copy backup from container to host ===
docker cp "$MONGO_CONTAINER":/data/db/$BACKUP_NAME "$BACKUP_DIR"

# === Success Message ===
if [ $? -eq 0 ]; then
  echo "Backup successful: $BACKUP_DIR/$BACKUP_NAME"
else
  echo "Backup failed"
fi
