import React from "react";
import { Link } from "react-router-dom";

const FooterItem = ({ className, data }) => {
  return (
    <div className={className}>
      <h2>{data.title}</h2>

      {data.items.map((item, index) => (
        <Link key={index} to={item.link}>
          {item.title} {index}
        </Link>
      ))}
    </div>
  );
};

export default FooterItem;
