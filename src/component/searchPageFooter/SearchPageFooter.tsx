import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./searchPageFooter.scss";
import BubbleChart from "@material-ui/icons/BubbleChart";

export function SearchPageFooter() {
  return (
    <div className="search-page-footer">
        <div className="footer-content">

      <Typography>Search</Typography>
      <Typography>Trending</Typography>
      <BubbleChart fontSize="large"  />
      <Typography>Learn</Typography>
      <IconButton aria-label="show more" aria-haspopup="true" color="inherit">
        <LinkedInIcon style={{ marginRight: "20px" }} />
        <Typography>LinkedIn</Typography>
      </IconButton>
      </div>

    </div>
  );
}
