import React from 'react'
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";


const Feeds = () => {
  return (
    <>
      <div className="feeds">
        <div className="feedsHeader">
          <div className="feedsTitle">
            <ChatBubbleIcon className="sidebarIcon" />
            Recent General Feeds
          </div>
          <div className="searchInput23">
            <input
              className="searchInput2"
              type="search"
              placeholder="search"
            />
          </div>
        </div>
        <div className="feed2">
          <div className="feedsBody">
            <div className="feedsBodyTitle">
              <img src="/assets/img2.png" alt="img2" className="topAvatar" />
              <p className="topAvatar-p">Moses Olaniye</p>
            </div>
            <p>Tue 24th May 2022 04:01:22</p>
          </div>
          <p className="feedsDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            provident quae sapiente vero deserunt quasi animi asperiores
            voluptatibus, autem quidem aspernatur ab! Provident autem ut beatae,
            obcaecati fuga maxime voluptatum!
          </p>
          <div className="feedsBody">
            <div className="feedsBodyTitle">
              <img src="/assets/img3.png" alt="img3" className="topAvatar" />
              <p className="topAvatar-p">Moses Olaniye</p>
            </div>
            <p>Tue 24th May 2022 04:01:22</p>
          </div>
          <p className="feedsDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            provident quae sapiente vero deserunt quasi animi asperiores
            voluptatibus, autem quidem aspernatur ab! Provident autem ut beatae,
            obcaecati fuga maxime voluptatum!
          </p>
          <div className="feedsBody">
            <div className="feedsBodyTitle">
              <img src="/assets/img2.png" alt="img2" className="topAvatar" />
              <p className="topAvatar-p">Moses Olaniye</p>
            </div>
            <p>Tue 24th May 2022 04:01:22</p>
          </div>
          <p className="feedsDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            provident quae sapiente vero deserunt quasi animi asperiores
            voluptatibus, autem quidem aspernatur ab! Provident autem ut beatae,
            obcaecati fuga maxime voluptatum!
          </p>
          <div className="feedsBody">
            <div className="feedsBodyTitle">
              <img src="/assets/img3.png" alt="img3" className="topAvatar" />
              <p className="topAvatar-p">Moses Olaniye</p>
            </div>
            <p>Tue 24th May 2022 04:01:22</p>
          </div>
          <p className="feedsDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            provident quae sapiente vero deserunt quasi animi asperiores
            voluptatibus, autem quidem aspernatur ab! Provident autem ut beatae,
            obcaecati fuga maxime voluptatum!
          </p>
        </div>
      </div>
    </>
  );
}

export default Feeds