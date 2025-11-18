#!/usr/bin/env bash
# .platform/hooks/postdeploy/00_get_certificate.sh
sudo certbot certonly --standalone -n \
    -d is404inclass-env.eba-dgw88jm4.us-east-1.elasticbeanstalk.com \
    --agree-tos \
    --email lukeh0@byu.edu

exit 0