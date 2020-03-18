import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Pin from "./Pin"
import styled from "styled-components";



const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledGridList = styled(GridList)`
width: 80%;
height 100%;
`
const StyledGridListTile = styled(GridListTile)`
border-radius: 30px;
`



const useStyles = makeStyles(theme => ({
 
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background: "#a6b07e",
    fontWeight: 600
      // "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      // "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "#c97064"
  }
}));

export default function Menu(props) {
  const classes = useStyles();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) setIsMobile(true);
  }, []);

  return (
  
   
  );
}
