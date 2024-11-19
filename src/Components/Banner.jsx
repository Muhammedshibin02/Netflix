// import React, { useEffect, useState } from 'react'
// import instance from '../Instance'
// import requests from '../Request'
// import './row.css'

// function Banner() {
//     const [banner,setBanner]=useState([])
//      const base_url ="https://image.tmdb.org/t/p/original/"
//     const fetchdata=async()=>{
//         const response=await instance.get(requests.fetchNetflixOriginals)
//         console.log(response);
//         setBanner(response.data.results[
//             Math.floor(Math.random()*response.data.results.length)
//         ])
       

        

//     }
//     useEffect(()=>{
//         fetchdata()
//     },[])

//     console.log(banner);
    
//   return (
//     <div>
//       <div className='banner'
       
//         style={{
//             backgroundSize:"cover",
//             backgroundImage:`url(${base_url}${banner?.backdrop_path})`
//         }} >
       
//       </div>
//     </div>
//   )
// }

// export default Banner
import React, { useEffect, useState } from 'react';
import instance from '../Instance';
import requests from '../Request';
import './row.css';

function Banner() {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    try {
      const response = await instance.get(requests.fetchNetflixOriginals);
      const randomBanner = response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ];
      setBanner(randomBanner);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Loading state or error fallback
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!banner) {
    return <div>Failed to load banner.</div>;
  }

  return (
    <div>
      <div
        className='banner'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${banner?.backdrop_path || ''})`,
          height: "448px", // Example height, adjust as needed
          position: "relative",
        }}
      >
        {/* You can add a title or description here */}
        <div className='netflix_img'>
            <img src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" alt="" />
        </div>
        <div className="banner-content">
          
          <h1>{banner?.title || banner?.name || "No title available"}</h1>
          <p>{banner?.overview || "No description available."}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
