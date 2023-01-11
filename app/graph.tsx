"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export const Graph = () => {
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    d3.select("#scatterplot")
      .append("svg")
      .attr("height", 300)
      .attr("width", 300)
      .selectAll("circle")
      .data([
        { x: 10, y: 10 },
        { x: 20, y: 20 },
        { x: 30, y: 30 },
      ])
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 3);
  }, []);

  return <div id="scatterplot" />;
};
