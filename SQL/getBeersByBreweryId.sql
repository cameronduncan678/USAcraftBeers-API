SELECT beers.name AS name, style, city, state
FROM beers
     JOIN breweries
        ON beers.brewery_id = breweries.brewery_id
WHERE beers.brewery_id = £BREWERYID£;