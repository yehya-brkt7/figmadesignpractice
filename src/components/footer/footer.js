import React from "react";
import style from "./footer.module.css";
import Grid from "@mui/material/Grid";

const Footersection = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        marginTop="200px"
        backgroundColor="#E7ECFF"
      >
        <Grid item xs={12} className={style.semicircle}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} marginTop="200px" marginBottom="200px">
          <span className={style.title}>A Price To Suit Everyone</span>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <p className={style.price}> $40</p>
          <span className={style.info}>UI Design Kit</span>
          <p className={style.description}>See, One price. Simple</p>
          <button className={style.button}>Purchase Now</button>
        </Grid>

        <Grid item xs={3}></Grid>

        <Grid container>
          <Grid item xs={0.75}></Grid>
          <Grid item xs={3} container justifyContent="flex-start">
            <span className={style.companyname}>@2020 Yourcompany</span>
          </Grid>
          <Grid item xs={0.75}></Grid>
          <Grid item xs={3}>
            <span className={style.Landie}>Landie</span>
          </Grid>
          <Grid item xs={0.75}></Grid>
          <Grid
            item
            xs={3}
            marginBottom="100px"
            container
            justifyContent="flex-end"
          >
            <button className={style.button}>Purchase Now</button>
          </Grid>
          <Grid item xs={0.75}></Grid>
          <Grid item xs={0.75}></Grid>
          <Grid className={style.line} item xs={10.5}>
            <span></span>
          </Grid>
          <Grid item xs={0.75}></Grid>
          <Grid item xs={0.22}></Grid>

          <Grid item xs={12} md={3} container justifyContent="center">
            <div className={style.navbar}>
              <div className={style["navbar-items"]}>
                <ul>
                  <div>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </div>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid
            item
            xs={12}
            md={3}
            container
            justifyContent="space-around"
            marginTop="20px"
          >
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5.5V3.5C9 2.948 9.448 2.5 10 2.5H11V0H9C7.343 0 6 1.343 6 3V5.5H4V8H6V16H9V8H11L12 5.5H9Z"
                  fill="#B0B8BC"
                />
              </svg>
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5 1.75C3.5 2.7165 2.7165 3.5 1.75 3.5C0.783502 3.5 0 2.7165 0 1.75C0 0.783502 0.783502 0 1.75 0C2.7165 0 3.5 0.783502 3.5 1.75ZM0 5H3.578V16H0V5ZM13.2998 5.12119C13.2954 5.11973 13.2909 5.11825 13.2864 5.11678C13.2616 5.10856 13.2367 5.10033 13.21 5.093C13.162 5.082 13.114 5.073 13.065 5.065C12.875 5.027 12.667 5 12.423 5C10.337 5 9.014 6.517 8.578 7.103V5H5V16H8.578V10C8.578 10 11.282 6.234 12.423 9V16H16V8.577C16 6.915 14.861 5.53 13.324 5.129C13.3159 5.12643 13.3078 5.12382 13.2998 5.12119Z"
                fill="#B0B8BC"
              />
            </svg>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1.87225C15.405 2.13325 14.771 2.30625 14.11 2.39025C14.79 1.98425 15.309 1.34625 15.553 0.577252C14.919 0.955252 14.219 1.22225 13.473 1.37125C12.871 0.730252 12.013 0.333252 11.077 0.333252C9.261 0.333252 7.799 1.80725 7.799 3.61425C7.799 3.87425 7.821 4.12425 7.875 4.36225C5.148 4.22925 2.735 2.92225 1.114 0.931252C0.831 1.42225 0.665 1.98425 0.665 2.58925C0.665 3.72525 1.25 4.73225 2.122 5.31525C1.595 5.30525 1.078 5.15225 0.64 4.91125C0.64 4.92125 0.64 4.93425 0.64 4.94725C0.64 6.54125 1.777 7.86525 3.268 8.17025C3.001 8.24325 2.71 8.27825 2.408 8.27825C2.198 8.27825 1.986 8.26625 1.787 8.22225C2.212 9.52125 3.418 10.4763 4.852 10.5073C3.736 11.3803 2.319 11.9063 0.785 11.9063C0.516 11.9063 0.258 11.8943 0 11.8613C1.453 12.7983 3.175 13.3333 5.032 13.3333C11.068 13.3333 14.368 8.33325 14.368 3.99925C14.368 3.85425 14.363 3.71425 14.356 3.57525C15.007 3.11325 15.554 2.53625 16 1.87225Z"
                fill="#B0B8BC"
              />
            </svg>
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.456 0.758748C14.415 0.812748 14.886 0.954748 15.32 1.72675C15.772 2.49775 16 3.82575 16 6.16475V6.16775V6.17275C16 8.50075 15.772 9.83875 15.321 10.6017C14.887 11.3737 14.416 11.5137 13.457 11.5787C12.498 11.6337 10.089 11.6667 8.002 11.6667C5.911 11.6667 3.501 11.6337 2.543 11.5777C1.586 11.5127 1.115 11.3727 0.677 10.6007C0.23 9.83775 0 8.49975 0 6.17175V6.16975V6.16675V6.16375C0 3.82575 0.23 2.49775 0.677 1.72675C1.115 0.953748 1.587 0.812748 2.544 0.757748C3.501 0.693748 5.911 0.666748 8.002 0.666748C10.089 0.666748 12.498 0.693748 13.456 0.758748ZM11 6.16675L6 3.16675V9.16675L11 6.16675Z"
                fill="#B0B8BC"
              />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8ZM12.833 3.7C12.833 3.99437 12.5944 4.233 12.3 4.233C12.0057 4.233 11.767 3.99437 11.767 3.7C11.767 3.40564 12.0057 3.167 12.3 3.167C12.5944 3.167 12.833 3.40564 12.833 3.7Z"
                fill="#B0B8BC"
              />
            </svg>
          </Grid>
          <Grid item xs={0.75}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footersection;
