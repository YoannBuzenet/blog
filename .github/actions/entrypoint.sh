#!/bin/sh -l

echo "Hello $1"
time=$(date)
# echo "time=$time" >> $GITHUB_OUTPUT
echo "time=$BLOG_SSH_PRIVATE_KEY" >> $GITHUB_OUTPUT

