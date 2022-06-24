while read line; 
do 
    echo "$line : [" >> tert;
    echo "$(kubectl $line -h)" >> tert ;
    echo "]," >> tert

done <bruh
