import { useEffect, useState } from 'react'
import './App.css'
import News from './components/News'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import {fetchNews, getHeadlines} from "./redux/slice/newsSlice.js"
import Slider from 'react-slick/lib/slider.js'

function App() {
  const {headlines,news,categories} = useSelector((state)=>state);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getHeadlines());
      dispatch(fetchNews("general"));
  },[])
  const settings = {
    dots: false,
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
      <Navbar />
      <section className='container'>
      <div className='my-5 d-flex justify-content-center'>
      {categories?.map((item)=>
      <span onClick={()=>dispatch(fetchNews(item))}
      className="badge text-bg-primary mx-2 h">{item}</span>)}      
      </div>
     
      <Slider {...settings}>
      
      {headlines?.map((item, index) => (
            <News key={index}
              imageUrl={item.urlToImage}
              title={item.title}
              description={item.description}
              date={item.publishedAt}
              source={"BBC"}
            />
          ))}
        </Slider><hr />
        <h3>Today's Update</h3>
        <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px"}}>
        {news?.map((item, index) => (
            <News key={index}
              imageUrl={item.urlToImage}
              title={item.title}
              description={item.description}
              date={item.publishedAt}
              source={"BBC"}
            />
          ))}
          </div>
      </section>
    </>
  )
}

export default App
