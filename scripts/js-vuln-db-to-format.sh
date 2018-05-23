#!/bin/bash

if [ ! -d "js-vuln-db" ]; then
    git clone --depth 1 https://github.com/tunz/js-vuln-db
fi

MODE=$1

case $MODE in
'js')
    echo "Using $MODE mode"
    ;;
'html')
    echo "Using $MODE mode"
    ;;
*)
    echo "Only \"js\" and \"html\" formats supported. Got \"$MODE\" instead;"
    exit 1
    ;;
esac

TARGET_DIR="js-vuln-db-$MODE"

if [ -d "$TARGET_DIR" ]; then
    rm -rf "$TARGET_DIR"
fi

mkdir -p "$TARGET_DIR"


for fullfile in $(find ./js-vuln-db -name "CVE-*.md")
do
    filename=$(basename "$fullfile" ".md")
    # extract code from .md file and transform `print() -> console.log()`
    extracted=$(cat "$fullfile" | codedown javascript | sed -e 's/print/console.log/g')
    output_path="./$TARGET_DIR/$filename.$MODE"
    
    if [ $MODE == 'js' ]; then
        echo "$extracted" >> "$output_path";
    else
        echo "<script>$extracted</script>" >> "$output_path";
    fi
done