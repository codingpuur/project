// "use client";

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// // Define types for news items and sentiments
// interface NewsItem {
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string;
// }

// interface Sentiment {
//   text: string;
//   score: number;
// }

// // Component to display sentiment for news items
// function NewsSentiment({ headline, sentiment, score }: { headline: NewsItem, sentiment: string, score: any }) {
//     const formattedScore = !isNaN(score) ? score.toFixed(2) : '0.00';
//   return (
//     <div className="card">
//       <img
//         src={headline.urlToImage}
//         className="card-img-top"
//         alt="News Image"
//       />
//       <div className="card-body">
//         <h5 className="card-title">{headline.title}</h5>
//         <p className="card-text">{headline.description}</p>
//         <p className="text-muted">Sentiment: {sentiment}</p>
//         <p className="text-muted">Score: {formattedScore}%</p>
//         <a href={headline.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
//   const [sentiments, setSentiments] = useState<{ [key: string]: Sentiment }>({});

//   useEffect(() => {
//     // Fetching news items from the API
//     axios.get('https://newsapi.org/v2/top-headlines?language=en&apiKey=deccd21183444d9f968fa8fe28a713eb')
//       .then((response) => {
//         setNewsItems(response.data.articles);
//       })
//       .catch((error) => {
//         console.error('Error fetching news:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Fetch sentiment analysis for each article title
//     newsItems.forEach((article) => {
//       axios.post('http://159.89.167.56/api/analyze-sentiment/', { text: article.title })
//         .then((response) => {
//           setSentiments((prev) => ({
//             ...prev,
//             [article.title]: {
//               text: response.data.sentiment,
//               score: response.data.score,
//             },
//           }));
//         })
//         .catch((error) => {
//           console.error('Error analyzing sentiment:', error);
//         });
//     });
//   }, [newsItems]);

  

//   return (
//     <main className="container min-vh-100 d-flex flex-column align-items-center justify-content-center py-5 bg-ligh">
//       <h1 className="display-4 mb-4">Today's News Sentiment</h1>
//       <div className="row g-4">
//         {newsItems.map((headline, index) => (
//           <div key={index} className="col-md-4">
//             <NewsSentiment 
//               headline={headline} 
//               sentiment={sentiments[headline.title]?.text || 'N/A'} 
//               score={sentiments[headline.title]?.score || 'N/A'}
//             />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';



// Define types for news items and sentiments
interface NewsItem {
  title: string;
  description: string;
  url: string;
  image_url: string;
  text:string;
}

interface Sentiment {
  text: string;
  score: number;
}

// Component to display sentiment for news items
function NewsSentiment({ headline, sentiment, score }: { headline: NewsItem, sentiment: string, score: any }) {
  const formattedScore = !isNaN(score) ? score.toFixed(2) : '0.00';


  return (
    <div className="card">



      <img
        src={headline.image_url}
        className="card-img-top"
        alt="News Image"
      />
      <div className="card-body">
        <h5 className="card-title">{headline.title}</h5>
        <p className="card-text">{headline.description}</p>
        <p className="text-muted">Sentiment: {sentiment}</p>
        <p className="text-muted">Score: {formattedScore}%</p>
        <a href={headline.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [sentiments, setSentiments] = useState<{ [key: string]: Sentiment }>({});

  useEffect(() => {
    // Fetching news items from the new API endpoint
    axios.get('https://api.stockdata.org/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=CbFOVraAbW9pW3aVWiy1r6OVX5IqgNkzIebmK1MU')
      .then((response) => {
        // Map the response data to the NewsItem format
        const newsData = response.data.data.map((item: any) => ({
          title: item.title,
          description: item.description,
          url: item.url,
          image_url: item.image_url,
          
        }));
        setNewsItems(newsData);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch sentiment analysis for each article title
    newsItems.forEach((article) => {
      axios.post('https://nazariya-test.vercel.app/api/analyze-sentiment/', { text: article.title })
        .then((response) => {
          setSentiments((prev) => ({
            ...prev,  
            [article.title]: {
              text: response.data.sentiment,
              score: response.data.score,
            },
          }));
        })
        .catch((error) => {
          console.error('Error analyzing sentiment:', error);
        });
    });
  }, [newsItems]);

  return (
    <main className="container min-vh-100 d-flex flex-column align-items-center justify-content-center py-5 bg-ligh">

      <h1 className="display-4 mb-4">Today's News Sentiment</h1>
      <div className="row g-4">
        {newsItems.map((headline, index) => (
          <div key={index} className="col-md-4">
            <NewsSentiment 
              headline={headline} 
              sentiment={sentiments[headline.title]?.text || 'N/A'} 
              score={sentiments[headline.title]?.score || 'N/A'}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

