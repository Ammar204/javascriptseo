import React, { useEffect } from "react";
import * as d3 from "d3";
import "./networkGraph.css";
import { generateNodeAndLink } from "../../../helper/readFileHelper";

export function NetworkGraphJS({ csvRawData }) {
  let mousePosition = {
    x: 0,
    y: 0,
  };

  let nodes = [];
  let links = [];

  useEffect(() => {
    buildGraph();
    window.addEventListener("resize", buildGraph);
    window.addEventListener("mousemove", mousePositionChnaged);

    return () => {
      window.removeEventListener("resize", buildGraph);
      window.removeEventListener("mousemove", mousePositionChnaged);
    };
  });
  const buildGraph = () => {
    d3.select(".network-graph svg").remove();

    const nodeAndLink = generateNodeAndLink(csvRawData);

    nodes = nodeAndLink.nodes;
    links = nodeAndLink.links;




    let w = window.innerWidth;
    let h = 400;


    let focus_node = null,
      highlight_node = null;

    const highlight_trans = 0.1;

    let force = d3.layout.force().linkDistance(100).charge(-1000).size([w, h]);
    const nominal_base_node_size = 8;
    const nominal_text_size = 10;
    const max_text_size = 24;
    const nominal_stroke = 1.5;
    const max_stroke = 4.5;
    const max_base_node_size = 36;
    const min_zoom = 0.1;
    const max_zoom = 7;
    let svg = d3.select(".network-graph").append("svg");
    let zoom = d3.behavior.zoom().scaleExtent([min_zoom, max_zoom]);
    let g = svg.append("g");
    svg.style("cursor", "move");

    let linkedByIndex = {};
    links.forEach(function (d) {
      linkedByIndex[d.source + "," + d.target] = true;
    });

    function isConnected(a, b) {
      return (
        linkedByIndex[a.index + "," + b.index] ||
        linkedByIndex[b.index + "," + a.index] ||
        a.index === b.index
      );
    }

    force.nodes(nodes).links(links).start();

    let link = g
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .style("stroke-width", 1)
      .style("stroke", "#3372ab");

    let node = g
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .call(force.drag);

    node.on("dblclick.zoom", function (d) {
      d3.event.stopPropagation();
      const dcx = window.innerWidth / 2 - d.x * zoom.scale();
      const dcy = window.innerHeight / 2 - d.y * zoom.scale();
      zoom.translate([dcx, dcy]);
      g.attr(
        "transform",
        "translate(" + dcx + "," + dcy + ")scale(" + zoom.scale() + ")"
      );
    });

    let circle = node
      .append("path")

      .attr(
        "d",
        d3.svg
          .symbol()
          .type("circle")
          .size(Math.PI * Math.pow(6, 2))
      )
      .style("fill", "#eb947b");
    let text = g
      .selectAll(".text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("dy", ".35em")
      .style("font-size", nominal_text_size + "px")
      .style("fill", "white")

      .attr("dx", 12)
      // .text(function (d) {
      //   if (d.label === d.link) {
      //     return "\u2002" + d.label;
      //   } else {
      //     return;
      //   }
      // }); label
    const div = d3.select("div.tooltip");


    let clearTooltip;


    node
      .on("mouseenter", function (d) {
        console.log("mouse enter")
        clearTooltip && clearTimeout(clearTooltip)
        set_highlight(d);


        div
          .style("visibility", "visible")
          .transition()
          .duration(200)
          .style("opacity", 0.9);
        const html = `${d.link}`;
        div
          .html(html)
          .style("left", mousePosition.x + "px")
          .style("top", mousePosition.y + "px");
      })
      .on("mousedown", function (d) {
        d3.event.stopPropagation();
        focus_node = d;
        set_focus(d);
        if (highlight_node === null) set_highlight(d);
      })
      .on("mouseout", function (d) {
        console.log("mouse out")


        clearTooltip = setTimeout(() => {
          div.style("visibility", "hidden");
          exit_highlight();
        }, 200);

        
      });

    d3.select(window).on("mouseup", function () {
      if (focus_node !== null) {
        focus_node = null;
        if (highlight_trans < 1) {
          circle.style("opacity", 1);
          text.style("opacity", 1);
          link.style("opacity", 1);
        }
      }

      if (highlight_node === null) exit_highlight();
    });

    function exit_highlight() {
      highlight_node = null;
      if (focus_node === null) {
        svg.style("cursor", "move");
        circle.style("stroke", "none");
        link.style("stroke", "#3372ab");
      }
    }

    function set_focus(d) {
      if (highlight_trans < 1) {
        circle.style("opacity", function (o) {
          return isConnected(d, o) ? 1 : highlight_trans;
        });

        text.style("opacity", function (o) {
          return isConnected(d, o) ? 1 : highlight_trans;
        });

        link.style("opacity", function (o) {
          return o.source.index === d.index || o.target.index === d.index
            ? 1
            : highlight_trans;
        });
      }
    }

    function set_highlight(d) {
      svg.style("cursor", "pointer");
      if (focus_node !== null) d = focus_node;
      highlight_node = d;

      link.style("stroke", function (o) {
        return o.source.index === d.index || o.target.index === d.index
          ? "#ffffff"
          : "#3372ab";
      });
    }

    zoom.on("zoom", function () {
      let stroke = nominal_stroke;
      if (nominal_stroke * zoom.scale() > max_stroke)
        stroke = max_stroke / zoom.scale();
      link.style("stroke-width", stroke);
      circle.style("stroke-width", stroke);

      if (nominal_base_node_size * zoom.scale() > max_base_node_size)
        circle.attr(
          "d",
          d3.svg
            .symbol()
            .type("circle")
            .size(Math.PI * Math.pow(6, 2))
        );

      text.attr("dx", 8);

      let text_size = nominal_text_size;
      if (nominal_text_size * zoom.scale() > max_text_size)
        text_size = max_text_size / zoom.scale();
      text.style("font-size", text_size + "px");
      text.style("fill", "white");

      g.attr(
        "transform",
        "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"
      );
    });

    svg.call(zoom);

    resize();

    force.on("tick", function () {
      node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
      text.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

      link
        .attr("x1", function (d) {
          return d.source.x;
        })
        .attr("y1", function (d) {
          return d.source.y;
        })
        .attr("x2", function (d) {
          return d.target.x;
        })
        .attr("y2", function (d) {
          return d.target.y;
        });

      node
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    });

    function resize() {
      const width =
          window.innerWidth ,
        height = 400;
      svg.attr("width", width).attr("height", height);

      force
        .size([
          force.size()[0] + (width - w) / zoom.scale(),
          force.size()[1] + (height - h) / zoom.scale(),
        ])
        .resume();
      w = width;
      h = height;
    }
  };

  const mousePositionChnaged = (evt) => {
    mousePosition = {
      x: evt.clientX,
      y: evt.clientY,
    };
  };
  return (
    <div className="graph-root">
      <div className="tooltip"></div>

      <div className="network-graph"></div>
    </div>
  );
}
