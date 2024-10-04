#!/bin/bash

cd $(dirname $0)
flask --app main run --host=0.0.0.0
