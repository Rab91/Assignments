import { useEffect, useState } from 'react'
import './App.css'
import News from './components/News'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getHeadlines,fetchNews } from './redux/slice/newsSlice'
import Slider from "react-slick";

function App() {
  const {headlines,news,category}= useSelector((state)=>state);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getHeadlines());
    dispatch(fetchNews("general"));
  },[])
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    <div>
      <Navbar />
      <section className='container'>
        <div className='my-5' style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {
          category.map((item)=>
            <span 
            className="badge text-bg-primary mx-2 h"
            onClick={() => dispatch(fetchNews(item))}
            >{item}</span>
        )
        }
        </div>
        <Slider {...settings}>
        {
          headlines.map((item,index)=>
            <News 
            imageUrl={item.urlToImage}
            title={item.title}
            description={item.description}
            date ={item.publishedAt}
            source={"BBC"}
            />
          )
        }
       </Slider>
       <hr />
       <h3>Today's Update</h3>
       <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            rowGap: "10px",
          }}>
       {
          news.map((item,index)=>
            <News 
            imageUrl={item.urlToImage}
            title={item.title}
            description={item.description}
            date ={item.publishedAt}
            source={"BBC"}
            />
          )
        }
        </div>
      </section>  
    </div>
    </>
  )
}

export default App
