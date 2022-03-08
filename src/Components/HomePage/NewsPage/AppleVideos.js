import React, { useState, useEffect } from 'react';
import "./News.css";

const AppleVideos = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(

            `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6`
        ).then((response) => response.json())
            .then((data) => {
                const fetchedYouTubeData = data.items;
                setVideos(fetchedYouTubeData);
            })
            ;
    }, []);
    // console.log(videos);
    return (
        <div>
            <div className="allNews-wrapper">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-md-12">
                            <div className="title-wrapper bold News-title-wrapper">
                                &ldquo; Latest Apple #Youtube Videos &rdquo;
                                <br />
                            </div>
                        </div>
                        {videos.map((singleVideo, i) => {
                            let vidId = singleVideo.id.videoId;
                            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                            let videoWrapper = (
                                <div key={i} className="col-sm-12 col-md-4">
                                    <div className="singleNewsWrapper">
                                        <div className="NewsThumbnail">
                                            <a href={vidLink} target="_blank">
                                                <img src={singleVideo.snippet.thumbnails.high.url} />
                                            </a>
                                        </div>
                                        <div className="NewsInfoWrapper">
                                            <div className="NewsTitle">
                                                <a href={vidLink} target="_blank">
                                                    {singleVideo.snippet.title}
                                                </a>
                                            </div>
                                            <div className="NewsDesc">
                                                {singleVideo.snippet.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                            return videoWrapper;
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}
export default AppleVideos;