import React from "react";
import { Col, Row } from "antd";
import { Avatar, Card } from "antd";
import Link from "next/link";

const { Meta } = Card;
const ram = ({ allPcProduct }) => {
  const filterCatagory = "RAM";
  const filterdByCatagory = allPcProduct.filter(
    (pcd) => pcd.catagory === filterCatagory
  );

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-4xl font-bold text-center text-gray-600">
          RAP Catagory
        </h1>
      </div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        {filterdByCatagory?.map((pcp, index) => (
          <Col className="gutter-row" span={8}>
            <Link href={`/product/${pcp?._id}`}>
              <Card
                className=" mx-24 my-10"
                style={{
                  width: 300,
                }}
                cover={<img alt="example" src={pcp?.image} />}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title={pcp?.productName}
                />
                <span>
                  <p className=" mt-3 font-bold">Price: {pcp?.price}</p>
                </span>
                <div className=" mt-3 flex justify-between">
                  <Meta title={pcp?.catagory} /> <Meta title={pcp?.status} />
                  <Meta title={pcp?.avarageRating} />
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ram;

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
