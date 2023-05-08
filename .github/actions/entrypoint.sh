#!/bin/sh -l
#k
printenv
echo "Hello $1"
echo "key=$BLOG_SSH_PRIVATE_KEY"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT

