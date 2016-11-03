import React from "react";

export default class Googlemap extends React.Component {
  componentDidMount() {
    var myCenter = new google.maps.LatLng(49.2830111, -123.1239475);
    var mapProp = {
      center:myCenter,
      zoom:13,
      scrollwheel:false,
      draggable:false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
      position:myCenter,
    });
    marker.setMap(map);
  } 

  render() {
    return (
      <div>
        <div id="googleMap"></div>
      </div>
    );
  }
}
