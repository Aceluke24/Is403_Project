#!/usr/bin/env bash
# .platform/hooks/postdeploy/00_get_certificate.sh

certbot certonly --webroot -w /var/app/current \
  -d is404inclass-env.eba-dgw88jm4.us-east-1.elasticbeanstalk.com \
  --agree-tos --email lukeh0@byu.edu -n

systemctl reload nginx