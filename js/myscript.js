alert('Weclome to my Blog');

var name = prompt('Please enter your name');

var nat = prompt('Where are you from?');

console.log(traveled);

function traveled() {


    var traveled = prompt('Have you ever traveled?');
    if (traveled == "no") {
        alert('Want to explore my world?');
    } else if (traveled == "yes") {
        alert('Welcome to my World!');
    } else {
        alert('Something went wrong!')
    }
    //document.write ("<h2>"+alert+"</h2>");

    //input
    var framed = prompt('What would you want framed?');
    var userOrder = '';
    //processing
    while (framed !== 'graffiti' && framed !== 'city') {
        framed = prompt('What would you want framed?');
    }
    if (framed == 'graffiti') {
        userOrder = '<img id="graffiti" src="https://images.pexels.com/photos/1137752/pexels-photo-1137752.jpeg?cs=srgb&dl=pexels-jy-lee-1137752.jpg&fm=jpg">';
    }
    else if (framed == 'city') {
        userOrder = '<img id="city" src="https://i.pinimg.com/originals/96/f1/74/96f1747c3f0651b17ded6d9f3c1e6e09.jpg">';
    }

    var photoNumber = prompt('How many photos do you want framed?');
    for (var i = 1; i <= photoNumber; i++) {
        if (userOrder == 'graffiti') {
            userOrder = userOrder + '<img id="graffiti" src="https://images.pexels.com/photos/1137752/pexels-photo-1137752.jpeg?cs=srgb&dl=pexels-jy-lee-1137752.jpg&fm=jpg">';
        } else if (userOrder == 'city') {
            userOrder = userOrder + '<img id="city" src="https://i.pinimg.com/originals/96/f1/74/96f1747c3f0651b17ded6d9f3c1e6e09.jpg">';
        }
        document.write('<p>' + userOrder + '</p>');
    }

    //output
    //document.write(userOrder);



    //processing
    //for (var i = 1; i <= numberOfPhotos; i++) {
    // if ( == 'yes') {
    //userOrder = userOrder + 
    //}
}
traveled();