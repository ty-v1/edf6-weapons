#!/bin/bash

awslocal dynamodb create-table --cli-input-json file:///schema/table.json
