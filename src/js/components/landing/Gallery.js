import React from "react";

export default class Gallery extends React.Component {
  componentDidMount() {
    $('.carousel').carousel({
      interval: 5000, //changes the speed
      pause: false
    })
    $('.carousel .item').each(function(){
      let next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });
  }

  render() {
    return (
      <div class="container-fluid bg-grey">
        <div class="row">
          <div class="col-md-12 center-block">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <div class="col-xs-4">
                    <img src="img/gallery-wheat.jpg" class="img-responsive" />
                  </div>
                </div>
                <div class="item">
                  <div class="col-xs-4">
                    <img src="img/gallery-farm.jpg" class="img-responsive" />
                  </div>
                </div>
                <div class="item">
                  <div class="col-xs-4">
                    <img src="img/gallery-grain.jpg" class="img-responsive" />
                  </div>
                </div>
                <div class="item">
                  <div class="col-xs-4">
                    <img src="img/gallery-harvest.jpg" class="img-responsive" />
                  </div>
                </div>
              </div>
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <i class="glyphicon glyphicon-chevron-left"></i>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <i class="glyphicon glyphicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
