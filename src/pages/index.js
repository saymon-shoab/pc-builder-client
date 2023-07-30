import { Inter } from "next/font/google";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { Avatar, Card } from "antd";
import Hero from "@/components/hero/Hero";
const { Meta } = Card;

export default function Home({ allPcProduct }) {
  const firstSixPcP = allPcProduct.slice(0, 6);
  return (
    <>
      <Hero />
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-4xl font-bold text-center text-gray-600">
          Product Section
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
        {firstSixPcP?.map((pcp, index) => (
          <Col className="gutter-row" span={8}>
            <Card
              className=" mx-24 my-10"
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  src={pcp?.image}
                />
              }
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
                <Meta
                  title={pcp?.catagory}
                  // description={pcp?.price}
                />{" "}
                <Meta
                  title={pcp?.status}
                  // description={pcp?.price}
                />
                <Meta
                  title={pcp?.avarageRating}
                  // description={pcp?.price}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-frz8zqn6j-saymon-shoab.vercel.app/api/v1/pc"
  );
  const data = await res.json();
  console.log("all product data", data);
  return {
    props: {
      allPcProduct: data.data,
    },
  };
};
