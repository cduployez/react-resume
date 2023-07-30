#!/bin/sh

# Replace base href in index.html using the environment variable
sed -i "s|<base href=\"/\">|<base href=\"${BASE_HREF}/\">|g" /usr/share/nginx/html/index.html

exec "${@}"
