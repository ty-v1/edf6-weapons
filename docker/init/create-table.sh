#!/bin/bash

awslocal dynamodb create-table --cli-input-json file://./table.json
