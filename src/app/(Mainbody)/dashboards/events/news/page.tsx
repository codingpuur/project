"use client"

import { Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// This type definition would typically come from your data fetching layer
type NewsItem = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  url: string;
  source:string
};

// In a real application, you would fetch this data from an API
const mockNewsItems: NewsItem[] = [
  {
    id: "1",
    title: "Tech Stocks Surge Amid Positive Earnings Reports",
    summary: "Major tech companies report better-than-expected quarterly results, driving market optimism.",
    publishedAt: "2023-07-28T14:30:00Z",
    url: "#",
    source:"",
  },
  {
    id: "2",
    title: "Federal Reserve Holds Interest Rates Steady",
    summary: "The central bank maintains current rates, citing economic stability and controlled inflation.",
    publishedAt: "2023-07-28T10:15:00Z",
    url: "#",
    source:"",
  },
  {
    id: "3",
    title: "Oil Prices Fluctuate as Global Demand Shifts",
    summary: "Crude oil markets experience volatility due to changing international trade dynamics.",
    publishedAt: "2023-07-27T16:45:00Z",
    url: "#",
    source:"",
  },
  {
    id: "4",
    title: "Emerging Markets Show Strong Growth Potential",
    summary: "Analysts point to promising economic indicators in several developing economies.",
    publishedAt: "2023-07-27T09:00:00Z",
    url: "#",
    source:"",
  },
  {
    id: "5",
    title: "Cryptocurrency Regulations Tighten Globally",
    summary: "New policies aim to increase oversight and security in digital asset markets.",
    publishedAt: "2023-07-26T11:20:00Z",
    url: "#",
    source:"",
  },
];

export default function StockNews() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from an API
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        // Replace this with the actual API URL
        const response = await fetch("https://api.tradingeconomics.com/calendar?c=guest:guest&f=json");

        if (!response.ok) {
          throw new Error("Failed to fetch news data.");
        }

        const data = await response.json();

        // Transform data if necessary to match the NewsItem structure
        const formattedData: NewsItem[] = data.map((item: any) => ({
          id: item.CalendarId,
          title: item.Event,
          summary: item.summary || item.description,
          publishedAt: item.LastUpdate || item.date,
          url: item.URL || item.link,
          source:item.SourceURL,
        }));

        setNewsItems(formattedData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className="card w-100 max-w-3xl">
      <div className="card-header">
        <h5 className="card-title">Latest Stock News</h5>
        <p className="card-text">Stay updated with the most recent market developments</p>
      </div>
      <div className="card-body overflow-auto" style={{ maxHeight: "400px" }}>
        {newsItems.map((item) => (
          <div key={item.id} className="mb-4">
            <h6 className="font-weight-bold">{item.title}</h6>
            <p className="text-muted mt-1">{item.summary}</p>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="d-flex align-items-center text-muted">
                <Clock className="mr-1" style={{ height: "16px", width: "16px" }} />
                {new Date(item.publishedAt).toLocaleString()}
              </div>
              <a
                href={`${item.source}${item.url}`}
                className="text-primary font-weight-medium"
                style={{ textDecoration: "none" }}
              >
                Read more <ArrowRight className="ml-1" style={{ height: "16px", width: "16px" }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
