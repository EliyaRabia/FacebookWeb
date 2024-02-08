function Carousel({pictures}) {
  return (
    <div id="carouselExample" class="carousel slide">
      {pictures.map((picture) => (
        <div className="carousel-item active">
          <img
            src={picture.picture}
            className="card-img-top"
            style={{ width: "10rem" }}
          ></img>
        </div>
      ))}

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

