import { css } from '@rxdi/lit-html';

export const style = css`
  .transition {
    -webkit-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-fast {
    -webkit-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-slow {
    -webkit-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  /* CLEARFIX */
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .center-element {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .center-left {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .center-top {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .box-sizing {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .toc-wrapper {
    width: 250px;
    padding-left: 32px;
    box-sizing: border-box;
    position: fixed;
    top: 65px;
    right: 0px;
    background-color: #22272c;
    border-radius: 10px;
    z-index: 1001;
  }
  .toc-wrapper ul {
    position: relative;
    padding: 0;
  }
  .toc-wrapper ul::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background: #efefef;
  }
  .toc-wrapper li {
    display: block;
    position: relative;
    padding-left: 30px;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 6px;
    cursor: pointer;
  }
  .toc-wrapper li:hover {
    color: #37a5bc;
  }
  .toc-wrapper .current {
    color: #37a5bc;
    font-weight: 600;
  }
  .toc-wrapper .current::before {
    background: #37a5bc;
    border-color: #37a5bc;
    border-width: 1px;
    left: -3px;
  }
  .toc-wrapper li::before {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: '';
    background: #fdfdfd;
    border: 2px solid #efefef;
    left: -4px;
    width: 6px;
    height: 6px;
    top: 50%;
    display: inline-block;
    position: absolute;
  }
  .toc-wrapper li:last-of-type::before {
    top: auto;
    bottom: 0;
  }
`;
