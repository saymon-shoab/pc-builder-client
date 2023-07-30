import React from "react";
import { Col, Row } from "antd";
import { Avatar, Card } from "antd";
import Link from "next/link";
const { Meta } = Card;
const motherboard = ({ allPcProduct }) => {
  return (
    <div>
      <h1>all motherboard hear</h1>
    </div>
  );
};

export default motherboard;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-frz8zqn6j-saymon-shoab.vercel.app/api/v1/pc"
  );
  const data = await res.json();
  // console.log("all product data", data);
  return {
    props: {
      allPcProduct: data.data,
    },
  };
};
