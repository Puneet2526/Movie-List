const Home = () => {



  let imgArr = [
    {
      image: "https://wallpaperaccess.com/full/2187097.jpg"
    },
    {
      image: "https://shubhanchal.com/wp-content/uploads/2021/06/wp4112166.jpg"
    },
    {
      image: "https://flxt.tmsimg.com/assets/p185128_b_v8_ah.jpg"
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BOGYwYTA5M2QtMTk3Zi00ZjdjLWFkNDUtYzg4MjM0ZGI0MGU1XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg"
    }
  ]






  return (
    <div className="data">
      <div className="series">
        {imgArr.map((value) => {
          return (
            <img src={value.image} alt="" height="500px" width="350px" />
          )
        })}

        {/* <img src="https://wallpaperaccess.com/full/2187097.jpg"  alt="" />
            <img src="https://shubhanchal.com/wp-content/uploads/2021/06/wp4112166.jpg" alt="" />
            <img src="https://flxt.tmsimg.com/assets/p185128_b_v8_ah.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/M/MV5BOGYwYTA5M2QtMTk3Zi00ZjdjLWFkNDUtYzg4MjM0ZGI0MGU1XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg" alt="" /> */}


      </div>




    </div>
  );
}

export default Home;