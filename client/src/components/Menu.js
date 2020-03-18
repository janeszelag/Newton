import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Pin from "./Pin";
import styled from "styled-components";

import AutoResponsive from 'autoresponsive-react';

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export default function Menu(props) {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])


  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: width || document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  }

  return (
    <div className="albumPanel">
    <AutoResponsive  {...getAutoResponsiveProps()}>
      {
        props.resources.map((i, index) => {
          let style = {
            width: i.w === 'w1' ? 190 : 390,
            height: i.w === 'w1' ? 240 : 490
          };
          return (
            <a key={index} href="#" className={`${i.w} album item`} style={style}>
              <img className="a-cont j_ACont" src="images/a.jpg"/>
              <img className="a-cover" src={i.img_url}/>
              <p className="a-mask">{index}<i></i></p>
              <p className="a-layer">
              
                <span className="al-title">{i.title}</span>
               
              </p>
              <p className="a-more j_ALMore"></p>
            </a>
          );
        })
      }
    </AutoResponsive>
  </div>
  );
}
