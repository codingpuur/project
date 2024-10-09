"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

const tradingTerms = [
  { term: "Bull Market", definition: "A market characterized by rising prices and optimism." },
  { term: "Bear Market", definition: "A market characterized by falling prices and pessimism." },
  { term: "Volatility", definition: "The degree of variation of a trading price series over time." },
  { term: "Liquidity", definition: "The degree to which an asset can be quickly bought or sold without affecting its price." },
  { term: "Margin", definition: "Borrowed money used to invest in financial instruments." },
];

const videos = [
  { title: "Introduction to Trading", duration: "5:30", url: "https://www.youtube.com/embed/your_video_id_1" },
  { title: "Understanding Market Trends", duration: "7:15", url: "https://www.youtube.com/embed/your_video_id_2" },
  { title: "Basic Chart Patterns", duration: "6:45", url: "https://www.youtube.com/embed/your_video_id_3" },
];

export default function TradingBasics() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Trading Basics for Beginners</h2>
          <p className="card-text">Learn the fundamentals of trading with our interactive guide</p>
        </div>
        <div className="card-body">
          <ul className="nav nav-tabs" id="tradingTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="flowchart-tab" data-bs-toggle="tab" data-bs-target="#flowchart" type="button" role="tab">Flowchart</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="terminology-tab" data-bs-toggle="tab" data-bs-target="#terminology" type="button" role="tab">Terminology</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="videos-tab" data-bs-toggle="tab" data-bs-target="#videos" type="button" role="tab">Short Videos</button>
            </li>
          </ul>

          <div className="tab-content mt-4" id="tradingTabsContent">
            <div className="tab-pane fade show active" id="flowchart" role="tabpanel">
              <h3>Trading Journey Flowchart</h3>
              <div className="w-full overflow-auto">
                <p>Flowchart representation goes here (you can replace this with an image or text).</p>
              </div>
            </div>

            <div className="tab-pane fade" id="terminology" role="tabpanel">
              <h3>Trading Terminology</h3>
              <ul className="list-group">
                {tradingTerms.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{item.term}:</strong> {item.definition}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-pane fade" id="videos" role="tabpanel">
              <h3>Educational Videos</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="list-group">
                    {videos.map((video, index) => (
                      <button
                        key={index}
                        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${activeVideo.title === video.title ? "active" : ""}`}
                        onClick={() => setActiveVideo(video)}
                      >
                        <span>
                          <PlayCircle className="me-2" />
                          {video.title}
                        </span>
                        <span className="badge bg-secondary">{video.duration}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src={activeVideo.url}
                      title={activeVideo.title}
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-2 text-muted">Now Playing: {activeVideo.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
