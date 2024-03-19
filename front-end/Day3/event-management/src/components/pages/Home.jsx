import * as React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img1 from "../../assets/images/carosal1.jpg";
import img2 from "../../assets/images/carosal2.jpg";
import img3 from "../../assets/images/carosal3.jpg";
import img4 from "../../assets/images/birthday.jpg";
import img5 from "../../assets/images/wedding.jpg";
import img6 from "../../assets/images/Bachelor.jpg";
import img7 from "../../assets/images/entertainment.jpg";
import img8 from "../../assets/images/decoration.jpg";
import img9 from "../../assets/images/catering.jpg";

const cardData = [
  { img: img4, title: "Birthday Parties" },
  { img: img5, title: "Wedding Events" },
  { img: img6, title: "Bachelor Party" },
  { img: img7, title: "Entertainments" },
  { img: img8, title: "Decorations" },
  { img: img9, title: "Caterings" },
];

export default function Home() {
  return (
    <>
      <div>
        <Navbar fixed="top" />
        <Carousel>
          <Carousel.Item interval={1000}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={img1}
                alt="First slide"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={img2}
                alt="Second slide"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={img3}
                alt="Third slide"
              />
            </Card>
          </Carousel.Item>
        </Carousel>
        <div style={{ backgroundColor: "#1f262a" }}>
          <Container style={{ padding: "20px" }}>
            <Row>
              {cardData.map((item, index) => (
                <Col key={index} md={4}>
                  <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="150px"
                        image={item.img}
                        alt={item.title}
                      />
                      <CardContent
                        sx={{
                          height: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "sans-serif",
                          backgroundColor: "ActiveBorder",
                          color: "whitesmoke",
                          "&:hover": {
                            color: "#FF4433",
                          },
                        }}
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
