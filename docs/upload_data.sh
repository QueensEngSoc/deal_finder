#! /bin/bash
import_deals="mongoimport --host KDeals-shard-0/kdeals-shard-00-00-gkguj.mongodb.net:27017,kdeals-shard-00-01-gkguj.mongodb.net:27017,kdeals-shard-00-02-gkguj.mongodb.net:27017 --ssl --username ESSDEV --password essdev1 --authenticationDatabase admin --db KDeals --collection deals --type JSON --file ./deal_finder/docs/deals_data.json --jsonArray"
import_retailers="mongoimport --host KDeals-shard-0/kdeals-shard-00-00-gkguj.mongodb.net:27017,kdeals-shard-00-01-gkguj.mongodb.net:27017,kdeals-shard-00-02-gkguj.mongodb.net:27017 --ssl --username ESSDEV --password essdev1 --authenticationDatabase admin --db KDeals --collection retailers --type JSON --file ./deal_finder/docs/retailer_data.json --jsonArray"

print_usage() {
    printf "Usage: Pass -d or -r to import deals/retailers respectively from appropriate local JSON to the mlab MongoDB
            \n ./upload_data.sh -d
            \n ./upload_data.sh -r\n"
}

while getopts 'dr' flag; do
    case "${flag}" in
        d) eval $import_deals
        r) eval $import_retailers
        *) print_usage
        exit 1 ;;
    esac
done