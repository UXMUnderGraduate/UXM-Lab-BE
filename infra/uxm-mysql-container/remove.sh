#!/usr/bin/env sh
docker rm uxm-db-admin
docker rmi phpmyadmin/phpmyadmin:latest

docker rm uxm-db-mysql
docker rmi mysql:8.0.29

docker volume rm uxm-mysql-container_config
docker volume rm uxm-mysql-container_data
