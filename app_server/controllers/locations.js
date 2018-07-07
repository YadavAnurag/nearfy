// get home page

module.exports.homelist = (req, res, next)=>{
    res.render('locations-list', {
        title:'NearFi - Find a place to work with wifi',
        pageHeader:{
            title:'NearFi',
            strapline: 'Find a place to work with wifi '
        },
        locations:[{
            name: 'darkMoon',
            address:'Tagore Bhawan Hostel',
            facilities:['Hot drinks', 'Cold-coffee', 'Food'],
            rating: 4,
            distance:'30m'
        },{
            name: 'MyAccess Point',
            address:'Tagore Bhawan Hostel',
            facilities:['Hot drinks', 'Cold-coffee'],
            rating: 2,
            distance:'100m'
        },{
            name: 'darkMoon',
            address:'Tagore Bhawan Hostel',
            facilities:['Primium Wifi', 'Cold-coffee', 'Food'],
            rating: 3,
            distance:'80m'
        }]
    });
}

// get Location info page
module.exports.locationInfo = (req, res, next)=>{
    res.render('location-info', {title:'Location Info'});
}

//get  add review page

module.exports.addReview = (req, res, next)=>{
    res.render('location-review-form', {title: 'Add Review'});
}