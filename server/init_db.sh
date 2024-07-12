#!/bin/sh

set -e

TABLE_NAME="NewsTable"

# Check if the table exists
TABLE_EXISTS=$(awslocal dynamodb list-tables | grep -w $TABLE_NAME)

if [ -z "$TABLE_EXISTS" ]; then
    echo "Creating table $TABLE_NAME..."
    awslocal dynamodb create-table \
        --table-name $TABLE_NAME \
        --attribute-definitions AttributeName=id,AttributeType=S \
        --key-schema AttributeName=id,KeyType=HASH \
        --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1
else
    echo "Table $TABLE_NAME already exists."
fi
