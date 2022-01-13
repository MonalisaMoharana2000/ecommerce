import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  LinkedIn,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "./responsive";
import logo from "./munu/my.png";
import { Link } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          {" "}
          <img
            src={logo}
            title="Dhanes"
            style={{ width: 300, height: "300" }}
          />
        </Logo>
        <Desc>
          How do homeless people always seem to get the shopping cart that has
          all four good wheels?
        </Desc>
        <SocialContainer>
          {/* <SocialIcon color="E4405F"  >
              
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest /> */}
          {/* </SocialIcon> */}
          <a
            href="https://www.facebook.com/dhanes.munu.96"
            target="_blank"
            rel="noopener"
            aria-label="Stalk us on Facebook"
            class="site-socials__link"
            data-v-838467fa=""
          >
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <path
              d="M10 1.668A8.333 8.333 0 008.7 18.234V12.41H6.582v-2.409H8.7V8.165c0-2.09 1.244-3.242 3.146-3.242.912 0 1.867.162 1.867.162v2.05H12.66c-1.034 0-1.357.643-1.357 1.302v1.562h2.31l-.37 2.41h-1.94v5.823a8.333 8.333 0 00-1.301-16.564z"
              fill="currentColor"
              data-v-838467fa=""
            ></path>
          </a>
          <a
            href="https://www.instagram.com/dhanesmunu/"
            target="_blank"
            rel="noopener"
            aria-label="Stalk us on Facebook"
            class="site-socials__link"
            data-v-838467fa=""
          >
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </a>
          <a
            href="https://twitter.com/setha_dhaneswar"
            target="_blank"
            rel="noopener"
            aria-label="Stalk us on Twitter"
            class="site-socials__link"
            data-v-838467fa=""
          >
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <path
              d="M16.361 6.664c.011.146.011.291.011.436 0 4.438-3.377 9.55-9.55 9.55a9.484 9.484 0 01-5.155-1.507c.27.031.53.042.81.042a6.725 6.725 0 004.168-1.434 3.363 3.363 0 01-3.139-2.328c.208.031.416.052.634.052.301 0 .604-.042.884-.114a3.356 3.356 0 01-2.691-3.294v-.042c.447.25.966.405 1.516.426a3.352 3.352 0 01-1.496-2.795c0-.624.166-1.195.456-1.694a9.547 9.547 0 006.922 3.513 3.814 3.814 0 01-.083-.77 3.355 3.355 0 013.357-3.356c.966 0 1.839.405 2.452 1.06a6.63 6.63 0 002.13-.81 3.35 3.35 0 01-1.476 1.85 6.729 6.729 0 001.933-.52 7.205 7.205 0 01-1.683 1.735z"
              fill="currentColor"
              data-v-838467fa=""
            ></path>
          </a>
          <a
            href="https://github.com/Dhaneswar-setha"
            target="_blank"
            rel="noopener"
            aria-label="Stalk us on Github"
            class="site-socials__link"
            data-v-838467fa=""
          >
            <SocialIcon color="160609">
              <GitHub />
            </SocialIcon>
            <path
              d="M9.992 1.49a8.734 8.734 0 00-8.742 8.735 8.744 8.744 0 005.855 8.252c.46.115.39-.211.39-.434v-1.514c-2.651.31-2.759-1.443-2.936-1.736-.36-.613-1.21-.77-.955-1.063.603-.31 1.218.079 1.931 1.131.516.764 1.522.635 2.031.508.112-.459.35-.869.678-1.187-2.746-.492-3.89-2.168-3.89-4.16 0-.967.318-1.856.943-2.573-.399-1.181.037-2.193.096-2.344 1.134-.101 2.314.813 2.406.885.644-.174 1.38-.265 2.205-.265.828 0 1.566.095 2.217.271.22-.168 1.314-.953 2.369-.857.056.15.482 1.138.107 2.304.633.72.955 1.616.955 2.584 0 1.996-1.152 3.674-3.906 4.159a2.49 2.49 0 01.744 1.777v2.197c.016.176 0 .35.293.35a8.744 8.744 0 005.95-8.283c0-4.829-3.915-8.737-8.74-8.737z"
              fill="currentColor"
              data-v-838467fa=""
            ></path>
          </a>
          <a
            href="https://www.linkedin.com/in/dhaneswar-setha-737279224/"
            target="_blank"
            rel="noopener"
            aria-label="Stalk us on Linkedin"
            class="site-socials__link"
            data-v-838467fa=""
          >
            <SocialIcon color="55ACEE">
              <LinkedIn />
            </SocialIcon>
            <path
              d="M5.313 19V6.855H1.24V19h4.073zM3.277 5.196c1.42 0 2.305-.932 2.305-2.098C5.555 1.907 4.698 1 3.304 1 1.911 1 1 1.907 1 3.098c0 1.166.884 2.098 2.25 2.098h.027zM7.567 19h4.073v-6.782c0-.363.027-.726.134-.985.295-.725.965-1.476 2.09-1.476 1.474 0 2.063 1.113 2.063 2.746V19H20v-6.964c0-3.73-2.01-5.466-4.689-5.466-2.197 0-3.162 1.218-3.698 2.047h.027V6.855H7.568c.053 1.14 0 12.145 0 12.145z"
              fill="currentColor"
              data-v-838467fa=""
            ></path>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            {" "}
            <a href="/" class="" style={{ textDecoration: "none" }}>
              Home
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/about"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              About
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/menaccesory"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              Men Accesory
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/womenaccesory"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              Women Accesory
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/jewelery"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              Jewelery
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/electronics"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              Electronics
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              My Account
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              Order Tracking
            </a>
          </ListItem>
          <ListItem>
            {" "}
            <a
              href="/"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              Wishlist
            </a>
          </ListItem>
          <ListItem>
            <a
              href="/termsofservice"
              data-v-78bdb40c=""
              class=""
              style={{ textDecoration: "none" }}
            >
              Terms
            </a>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 754082 Barachana,
          Jajpur-Odisha
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 8917376596
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          dhaneswarsetha.123@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
