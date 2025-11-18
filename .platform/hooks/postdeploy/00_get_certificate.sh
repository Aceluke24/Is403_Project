#!/usr/bin/env bash
# .platform/hooks/postdeploy/00_get_certificate.sh
sudo certbot -n -d is404inclass-env.eba-dgw88jm4.us-east-1.elasticbeanstalk.com --nginx --agree-tos --email lukeh0@byu.edu