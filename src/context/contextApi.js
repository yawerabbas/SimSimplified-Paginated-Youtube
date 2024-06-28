import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import ReactPaginate from "react-paginate";
import chatimg from "../images/chat.png";
import reactimg from "../images/like.png";
export const Context = createContext();

export const AppContext = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const { data } = await axios(
        "https://internship-service.onrender.com/videos?page=0"
      );

      setSearchResults(data.data.posts);
    };
    fetchDataFromApi();
  }, []);
  const fetchdata = async (currentPage) => {
    const { data } = await axios(
      `https://internship-service.onrender.com/videos?page=${currentPage}`
    );

    return data.data.posts;
  };
  const handlePageClick = async (data) => {
    // console.log(data.selected);
    let currentPage = data.selected;
    // console.log(currentPage);
    const videosfromapi = await fetchdata(currentPage);
    // console.log(videos);

    setSearchResults(videosfromapi);
  };

  return (
    <div>
      <div className="row m-2 ">
        {searchResults.map((item) => {
          return (
            <div key={item.postId} className="card bg-black ">
              <div className="thumbnail">
                <ReactPlayer
                  url={item.submission.mediaUrl}
                  controls
                  width="90%"
                  light={item.submission.thumbnail}
                  style={{ backgroundColor: "#000000" }}
                  playing={true}
                />
              </div>
              <h2 className="card-title text-center h5 ">
                {" "}
                {item.submission.title}
              </h2>
              <h6 className="card-subtitle mb-1 text-black font-bold font-sans">
                @{item.creator.handle}
              </h6>
              <div className="rowdiv">
                <div className="rowdiv">
                  <img
                    className="h-full hidden dark:md:block imgmar"
                    src={reactimg}
                    alt="reactions"
                    width="25px"
                    
                  />
                  <h1> {item.reaction.count}</h1>
                </div>
                <div className="barcmnt rowdiv">
                  <img
                    className="h-full hidden dark:md:block imgmar "
                    src={chatimg}
                    alt="reactions"
                    width="30px"
                    height="30px"
                  />
                  <h4> {item.comment.count}</h4>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text font-sans">
                  {item.submission.description}
                </p>
              </div>
            </div>
          );
        })}
        
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      
    </div>
  );
};
