import React from 'react'

const News = ({title,description,imageUrl,date,source}) => {
  function formatDate(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(dateString);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }
  return (
    <div className="card" style={{ width: "18rem", height: "25rem"}}>
    <img src={imageUrl || "https://images.macrumors.com/t/sR7O_7ZZL32V48AU_NYT8SRj__o=/1600x/article-new/2020/05/apple-news-banner.png"} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title" style={{fontSize: "20px"}}>{title && title.substr(0,30)}...</h5>
      <p className="card-text" style={{fontSize: "12px"}}>
       {description && description.substr(0,100)}...
      </p>
      <span className="badge rounded-pill text-bg-warning mx-2">{source}</span>
      <span className="badge rounded-pill text-bg-info">{formatDate(date)}</span>

    </div>
  </div>
  )
}

export default News