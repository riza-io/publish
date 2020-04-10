#!/bin/bash
if [ "$(ls -A dist)" ]; then
	echo "dist is not empty"
	exit 1
fi
