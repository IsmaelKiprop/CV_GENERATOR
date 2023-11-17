#!/bin/bash

echo "Hi Ismael, kindly Enter your commit message"
read message


git add .
git commit -m "$message"
git push
