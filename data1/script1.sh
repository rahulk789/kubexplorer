while read line; 
do 
    echo $line ;
    echo "$(kubectl "$line" -h)" > tertdata;
done <bruh
