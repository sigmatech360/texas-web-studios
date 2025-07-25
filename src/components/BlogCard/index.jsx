import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className="blogCard">
      <div className="blogCardHeader">
        <Link to={`/blog/${props.slug}`}>
          <img src={props.image} alt={props.title} className="img-fluid" />
        </Link>
      </div>
      <div className="blogCardBody">
        <div className="blogCardMeta">
          <div className="blogMetaDetails">
            <BiComment />
            <span>0 Comments</span>
          </div>
          <div className="blogMetaDetails">
            <HiOutlineUserCircle />
            <span>{props.author || "admin"}</span>
          </div>
          <div className="blogMetaDetails"></div>
        </div>
        <div className="blogCardContent">
          <Link to={`/blog/${props.slug}`}>
            <h6 className="blogCardTitle">{props.title}</h6>
          </Link>
          <Link to={`/blog/${props.slug}`} className="blogCardBtn">
            Read More <IoIosArrowRoundForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
