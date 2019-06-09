import { css } from '@rxdi/lit-html';

export const style = css`
  .view {
    margin: 140px auto;
  }
  .content {
    width: 940px;
    text-align: center;
  }
  .ide {
    max-width: 1400px;
    margin: 60px auto;
    margin-top: 0px;
    padding: 50px;
  }
  .container {
    margin: 60px auto;
    margin-bottom: 0px;
  }

  .content {
    margin-top: 60px;
  }

  .box {
    background-color: white;
    color: black;
    padding: 30px;
    width: 300px;
    margin-right: 20px;
    box-shadow: 0 5px 55px rgba(162, 162, 162, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .plane {
    background: url('../../assets/images/plane.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    box-shadow: 0 5px 55px rgba(162, 162, 162, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    height: 500px;
  }

  .iframe {
    box-shadow: 0 5px 55px rgba(162, 162, 162, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    margin: 0 auto;
    max-width: 1400px;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }

`;
