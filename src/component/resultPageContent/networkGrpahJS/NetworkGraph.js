import React, { useEffect } from "react";
import * as d3 from "d3";
import "./networkGraph.css";

export function NetworkGraphJS() {
  let mousePosition = {
    x: 0,
    y: 0,
  };

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
    const data = {
      per: 100,
      linksData: {
        "http://books.toscrape.com/ ": [
          { text: "Books to Scrape", href: "index.html" },
          { text: "Home", href: "index.html" },
          { text: "Books", href: "catalogue/category/books_1/index.html" },
          {
            text: "Travel",
            href: "catalogue/category/books/travel_2/index.html",
          },
          {
            text: "Mystery",
            href: "catalogue/category/books/mystery_3/index.html",
          },
          {
            text: "Historical Fiction",
            href: "catalogue/category/books/historical-fiction_4/index.html",
          },
          {
            text: "Sequential Art",
            href: "catalogue/category/books/sequential-art_5/index.html",
          },
          {
            text: "Classics",
            href: "catalogue/category/books/classics_6/index.html",
          },
          {
            text: "Philosophy",
            href: "catalogue/category/books/philosophy_7/index.html",
          },
          {
            text: "Romance",
            href: "catalogue/category/books/romance_8/index.html",
          },
          {
            text: "Womens Fiction",
            href: "catalogue/category/books/womens-fiction_9/index.html",
          },
          {
            text: "Fiction",
            href: "catalogue/category/books/fiction_10/index.html",
          },
          {
            text: "Childrens",
            href: "catalogue/category/books/childrens_11/index.html",
          },
          {
            text: "Religion",
            href: "catalogue/category/books/religion_12/index.html",
          },
          {
            text: "Nonfiction",
            href: "catalogue/category/books/nonfiction_13/index.html",
          },
          {
            text: "Music",
            href: "catalogue/category/books/music_14/index.html",
          },
          {
            text: "Default",
            href: "catalogue/category/books/default_15/index.html",
          },
          {
            text: "Science Fiction",
            href: "catalogue/category/books/science-fiction_16/index.html",
          },
          {
            text: "Sports and Games",
            href: "catalogue/category/books/sports-and-games_17/index.html",
          },
          {
            text: "Add a comment",
            href: "catalogue/category/books/add-a-comment_18/index.html",
          },
          {
            text: "Fantasy",
            href: "catalogue/category/books/fantasy_19/index.html",
          },
          {
            text: "New Adult",
            href: "catalogue/category/books/new-adult_20/index.html",
          },
          {
            text: "Young Adult",
            href: "catalogue/category/books/young-adult_21/index.html",
          },
          {
            text: "Science",
            href: "catalogue/category/books/science_22/index.html",
          },
          {
            text: "Poetry",
            href: "catalogue/category/books/poetry_23/index.html",
          },
          {
            text: "Paranormal",
            href: "catalogue/category/books/paranormal_24/index.html",
          },
          { text: "Art", href: "catalogue/category/books/art_25/index.html" },
          {
            text: "Psychology",
            href: "catalogue/category/books/psychology_26/index.html",
          },
          {
            text: "Autobiography",
            href: "catalogue/category/books/autobiography_27/index.html",
          },
          {
            text: "Parenting",
            href: "catalogue/category/books/parenting_28/index.html",
          },
          {
            text: "Adult Fiction",
            href: "catalogue/category/books/adult-fiction_29/index.html",
          },
          {
            text: "Humor",
            href: "catalogue/category/books/humor_30/index.html",
          },
          {
            text: "Horror",
            href: "catalogue/category/books/horror_31/index.html",
          },
          {
            text: "History",
            href: "catalogue/category/books/history_32/index.html",
          },
          {
            text: "Food and Drink",
            href: "catalogue/category/books/food-and-drink_33/index.html",
          },
          {
            text: "Christian Fiction",
            href: "catalogue/category/books/christian-fiction_34/index.html",
          },
          {
            text: "Business",
            href: "catalogue/category/books/business_35/index.html",
          },
          {
            text: "Biography",
            href: "catalogue/category/books/biography_36/index.html",
          },
          {
            text: "Thriller",
            href: "catalogue/category/books/thriller_37/index.html",
          },
          {
            text: "Contemporary",
            href: "catalogue/category/books/contemporary_38/index.html",
          },
          {
            text: "Spirituality",
            href: "catalogue/category/books/spirituality_39/index.html",
          },
          {
            text: "Academic",
            href: "catalogue/category/books/academic_40/index.html",
          },
          {
            text: "Self Help",
            href: "catalogue/category/books/self-help_41/index.html",
          },
          {
            text: "Historical",
            href: "catalogue/category/books/historical_42/index.html",
          },
          {
            text: "Christian",
            href: "catalogue/category/books/christian_43/index.html",
          },
          {
            text: "Suspense",
            href: "catalogue/category/books/suspense_44/index.html",
          },
          {
            text: "Short Stories",
            href: "catalogue/category/books/short-stories_45/index.html",
          },
          {
            text: "Novels",
            href: "catalogue/category/books/novels_46/index.html",
          },
          {
            text: "Health",
            href: "catalogue/category/books/health_47/index.html",
          },
          {
            text: "Politics",
            href: "catalogue/category/books/politics_48/index.html",
          },
          {
            text: "Cultural",
            href: "catalogue/category/books/cultural_49/index.html",
          },
          {
            text: "Erotica",
            href: "catalogue/category/books/erotica_50/index.html",
          },
          {
            text: "Crime",
            href: "catalogue/category/books/crime_51/index.html",
          },
          {
            text: "",
            href: "catalogue/a-light-in-the-attic_1000/index.html",
          },
          {
            text: "A Light in the ...",
            href: "catalogue/a-light-in-the-attic_1000/index.html",
          },
          { text: "", href: "catalogue/tipping-the-velvet_999/index.html" },
          {
            text: "Tipping the Velvet",
            href: "catalogue/tipping-the-velvet_999/index.html",
          },
          { text: "", href: "catalogue/soumission_998/index.html" },
          { text: "Soumission", href: "catalogue/soumission_998/index.html" },
          { text: "", href: "catalogue/sharp-objects_997/index.html" },
          {
            text: "Sharp Objects",
            href: "catalogue/sharp-objects_997/index.html",
          },
          {
            text: "",
            href: "catalogue/sapiens-a-brief-history-of-humankind_996/index.html",
          },
          {
            text: "Sapiens: A Brief History ...",
            href: "catalogue/sapiens-a-brief-history-of-humankind_996/index.html",
          },
          { text: "", href: "catalogue/the-requiem-red_995/index.html" },
          {
            text: "The Requiem Red",
            href: "catalogue/the-requiem-red_995/index.html",
          },
          {
            text: "",
            href: "catalogue/the-dirty-little-secrets-of-getting-your-dream-job_994/index.html",
          },
          {
            text: "The Dirty Little Secrets ...",
            href: "catalogue/the-dirty-little-secrets-of-getting-your-dream-job_994/index.html",
          },
          {
            text: "",
            href: "catalogue/the-coming-woman-a-novel-based-on-the-life-of-the-infamous-feminist-victoria-woodhull_993/index.html",
          },
          {
            text: "The Coming Woman: A ...",
            href: "catalogue/the-coming-woman-a-novel-based-on-the-life-of-the-infamous-feminist-victoria-woodhull_993/index.html",
          },
          {
            text: "",
            href: "catalogue/the-boys-in-the-boat-nine-americans-and-their-epic-quest-for-gold-at-the-1936-berlin-olympics_992/index.html",
          },
          {
            text: "The Boys in the ...",
            href: "catalogue/the-boys-in-the-boat-nine-americans-and-their-epic-quest-for-gold-at-the-1936-berlin-olympics_992/index.html",
          },
          { text: "", href: "catalogue/the-black-maria_991/index.html" },
          {
            text: "The Black Maria",
            href: "catalogue/the-black-maria_991/index.html",
          },
          {
            text: "",
            href: "catalogue/starving-hearts-triangular-trade-trilogy-1_990/index.html",
          },
          {
            text: "Starving Hearts (Triangular Trade ...",
            href: "catalogue/starving-hearts-triangular-trade-trilogy-1_990/index.html",
          },
          { text: "", href: "catalogue/shakespeares-sonnets_989/index.html" },
          {
            text: "Shakespeare's Sonnets",
            href: "catalogue/shakespeares-sonnets_989/index.html",
          },
          { text: "", href: "catalogue/set-me-free_988/index.html" },
          {
            text: "Set Me Free",
            href: "catalogue/set-me-free_988/index.html",
          },
          {
            text: "",
            href: "catalogue/scott-pilgrims-precious-little-life-scott-pilgrim-1_987/index.html",
          },
          {
            text: "Scott Pilgrim's Precious Little ...",
            href: "catalogue/scott-pilgrims-precious-little-life-scott-pilgrim-1_987/index.html",
          },
          {
            text: "",
            href: "catalogue/rip-it-up-and-start-again_986/index.html",
          },
          {
            text: "Rip it Up and ...",
            href: "catalogue/rip-it-up-and-start-again_986/index.html",
          },
          {
            text: "",
            href: "catalogue/our-band-could-be-your-life-scenes-from-the-american-indie-underground-1981-1991_985/index.html",
          },
          {
            text: "Our Band Could Be ...",
            href: "catalogue/our-band-could-be-your-life-scenes-from-the-american-indie-underground-1981-1991_985/index.html",
          },
          { text: "", href: "catalogue/olio_984/index.html" },
          { text: "Olio", href: "catalogue/olio_984/index.html" },
          {
            text: "",
            href: "catalogue/mesaerion-the-best-science-fiction-stories-1800-1849_983/index.html",
          },
          {
            text: "Mesaerion: The Best Science ...",
            href: "catalogue/mesaerion-the-best-science-fiction-stories-1800-1849_983/index.html",
          },
          {
            text: "",
            href: "catalogue/libertarianism-for-beginners_982/index.html",
          },
          {
            text: "Libertarianism for Beginners",
            href: "catalogue/libertarianism-for-beginners_982/index.html",
          },
          {
            text: "",
            href: "catalogue/its-only-the-himalayas_981/index.html",
          },
          {
            text: "It's Only the Himalayas",
            href: "catalogue/its-only-the-himalayas_981/index.html",
          },
          { text: "next", href: "catalogue/page-2.html" },
        ],
        "https://friskhost.com/": [
          {
            text: "[email protected]",
            href: "/cdn-cgi/l/email-protection#c8a1a6aea788aebaa1bba3a0a7bbbce6aba7a5",
          },
          { text: "Facebook", href: "#" },
          { text: "Twitter", href: "#" },
          { text: "Google", href: "#" },
          { text: "RSS", href: "https://friskhost.com/feed/" },
          { text: "Facebook", href: "#" },
          { text: "Twitter", href: "#" },
          { text: "Google", href: "#" },
          { text: "RSS", href: "https://friskhost.com/feed/" },
          { text: "About us", href: "https://friskhost.com/about-us/" },
          { text: "Contact us", href: "https://friskhost.com/contact-us/" },
          {
            text: "Terms & Conditions",
            href: "https://friskhost.com/terms-conditions/",
          },
          {
            text: "Privacy Policy",
            href: "https://friskhost.com/privacy-policy/",
          },
          { text: "0 Items", href: "https://friskhost.com/cart/" },
          {
            text: '<img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://friskhost.com/wp-content/uploads/2020/05/frisk-logo-copy.png" alt="Frisk Host" data-height-percentage="70" />',
            href: "https://friskhost.com/",
          },
          { text: "Home", href: "https://friskhost.com/" },
          {
            text: "Hosting Plans",
            href: "https://my.friskhost.com/cart.php",
          },
          {
            text: "Linux Hosting Plans",
            href: "https://my.friskhost.com/cart.php?gid=1",
          },
          {
            text: "Windows Hosting Plans",
            href: "https://my.friskhost.com/cart.php?gid=2",
          },
          {
            text: "WordPress Hosting Plans",
            href: "https://my.friskhost.com/cart.php?gid=3",
          },
          {
            text: "Domains",
            href: "https://my.friskhost.com/cart.php?a=add&domain=register",
          },
          {
            text: "Domain Renewal",
            href: "https://my.friskhost.com/cart.php?gid=renewals",
          },
          {
            text: "Domain Transfer",
            href: "https://my.friskhost.com/cart.php?a=add&domain=transfer",
          },
          { text: "Client Area", href: "https://my.friskhost.com/" },
          {
            text: "Your Services",
            href: "https://my.friskhost.com/clientarea.php?action=services",
          },
          {
            text: "Your Domains",
            href: "https://my.friskhost.com/clientarea.php?action=domains",
          },
          {
            text: "Announcments",
            href: "https://my.friskhost.com/announcements.php",
          },
          {
            text: "Update Details",
            href: "https://my.friskhost.com/clientarea.php?action=details",
          },
          {
            text: "Deposite Funds",
            href: "https://my.friskhost.com/clientarea.php?action=addfunds",
          },
          {
            text: "Submit A Ticket",
            href: "https://my.friskhost.com/submitticket.php",
          },
          {
            text: "Knowledgebase",
            href: "https://my.friskhost.com/knowledgebase.php",
          },
          {
            text: "Support",
            href: "https://my.friskhost.com/submitticket.php",
          },
          {
            text: "Your Tickets",
            href: "https://my.friskhost.com/supporttickets.php",
          },
          { text: "Login", href: "https://my.friskhost.com/clientarea.php" },
          { text: "Register", href: "https://my.friskhost.com/register.php" },
          {
            text: "Get Web Hosting",
            href: "https://my.friskhost.com/cart.php",
          },
          { text: "All Services", href: "https://my.friskhost.com/cart.php" },
          {
            text: "Buy Now",
            href: "https://my.friskhost.com/cart.php?a=add&pid=1",
          },
          {
            text: "Buy Now",
            href: "https://my.friskhost.com/cart.php?a=add&pid=2",
          },
          {
            text: "Buy Now",
            href: "https://my.friskhost.com/cart.php?a=add&pid=3",
          },
          {
            text: "Let's Chat on Whatsapp",
            href: "https://web.whatsapp.com/send?phone=923171139072&text=Hi,%20I%20am%20Interested%20in%20Frisk%20host%20Hosting%20Services.",
          },
          { text: "Get Started", href: "https://my.friskhost.com/cart.php" },
          { text: "About us", href: "https://friskhost.com/about-us/" },
          { text: "Contact us", href: "https://friskhost.com/contact-us/" },
          {
            text: "Terms & Conditions",
            href: "https://friskhost.com/terms-conditions/",
          },
          {
            text: "Privacy Policy",
            href: "https://friskhost.com/privacy-policy/",
          },
          { text: "", href: "#" },
          { text: "Follow", href: "#" },
          { text: "Follow", href: "#" },
          { text: "Follow", href: "#" },
          { text: "Follow", href: "#" },
          { text: "Follow", href: "skype:?call" },
          { text: "Frisk Host", href: "https://friskhost.com/" },
          {
            text: "Email : [email protected]",
            href: "/cdn-cgi/l/email-protection#60090e060f2006091314080f13144e030f0d",
          },
          { text: "Phone: (+92) 317 1139 072)", href: "tel:923171139072" },
          { text: "", href: "tel:923418335184" },
          { text: "Phone: (+92) 305 558 1288)", href: "tel:923055581288" },
        ],
        "https://www.fiverr.com/": [
          { text: "Customer Support", href: "mailto:support@fiverr.com" },
        ],
        "https://eliteprephk.com/": [
          { text: "", href: "/index.html" },
          { text: "Home", href: "/index.html" },
          { text: "IB Courses", href: "#" },
          { text: "IB Chemistry Tutor", href: "/courses/chemistry.html" },
          { text: "IB Biology Tutor", href: "/courses/biology.html" },
          { text: "IB Physics Tutor", href: "/courses/physics.html" },
          { text: "IB English Tutor", href: "/courses/english.html" },
          { text: "IB Buisness Tutor", href: "/courses/buisness.html" },
          { text: "IB Math Tutor", href: "/courses/math.html" },
          { text: "IB Economic Tutor", href: "/courses/economic.html" },
          { text: "TOK Tutor", href: "/courses/tok.html" },
          { text: "IGCSE", href: "/igcse.html" },
          { text: "Blogs", href: "/blog" },
          { text: "Book a trial lesson", href: "/book a trial lesson.html" },
          { text: "Book A Free Trail", href: "/book a trial lesson.html" },
          { text: "Chemistry", href: "/courses/chemistry.html" },
          { text: "Physics", href: "/courses/physics.html" },
          { text: "Biology", href: "/courses/biology.html" },
          { text: "English", href: "/courses/english.html" },
          { text: "Math", href: "/courses/math.html" },
          { text: "Economics", href: "/courses/economic.html" },
          { text: "Buisness", href: "/courses/buisness.html" },
          { text: "TOK", href: "/courses/tok.html" },
          { text: "IB Chemistry Tutor", href: "/courses/chemistry.html" },
          { text: "IB English Tutor", href: "/courses/english.html" },
          { text: "IB Biology Tutor", href: "/courses/biology.html" },
          { text: "IB Maths Tutor", href: "/courses/math.html" },
          { text: "IB Physics Tutor", href: "/courses/physics.html" },
          { text: "IB Buisness Tutor", href: "/courses/buisness.html" },
          { text: "IB Economics Tutor", href: "/courses/economic.html" },
          { text: "TOK Tutor", href: "/courses/tok.html" },
          { text: "Book A free Trial", href: "/book-a-trial-lesson.html" },
          {
            text: "created by itcarver.com",
            href: "https://www.itcarver.com/",
          },
        ],
      },
    };

    const { linksData } = data;

    const rootNode = {
      userID: 0,
      in: 0,
      out: Object.keys(linksData).length,
      link: "root",
      label: "root",
    };
    let nodes = [rootNode];
    let links = [];
    let indexOfLinkNode = 1;

    Object.keys(linksData).forEach((node, i) => {
      const urlIndex = indexOfLinkNode;
      nodes[urlIndex] = {
        userID: urlIndex,
        in: 1,
        out: linksData[node].length,
        link: node,
        label: node,
        type: "circle",
      };

      links.push({ source: 0, target: urlIndex });
      indexOfLinkNode++;

      linksData[node].forEach((retriveLink) => {
        nodes[indexOfLinkNode] = {
          userID: indexOfLinkNode,
          in: 1,
          out: 0,
          link: retriveLink.href,
          label: retriveLink.text,
        };
        links.push({ source: urlIndex, target: indexOfLinkNode });
        indexOfLinkNode++;
      });
    });

    let w = window.innerWidth;
    let h = window.innerHeight;

    const nodeColor = d3.rgb("#e4a45b"),
      fill = [nodeColor.darker(), nodeColor.brighter()];

    let focus_node = null,
      highlight_node = null;

    const highlight_trans = 0.1;

    let force = d3.layout.force().linkDistance(60).charge(-300).size([w, h]);
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
          .size(function (d) {
            const r = d.link === d.label ? 14 : 10;
            return Math.PI * Math.pow(r, 2);
          })
      )
      .style("fill", function (d, i) {
        if (d.userID === 0) {
          return fill[0];
        } else if (d.label === d.link) {
          return fill[1];
        } else {
          return "#eb947b";
        }
      });
    let text = g
      .selectAll(".text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("dy", ".35em")
      .style("font-size", nominal_text_size + "px")
      .style("fill", "white")

      .attr("dx", 12)
      .text(function (d) {
        if (d.label === d.link) {
          return "\u2002" + d.label;
        } else {
          return;
        }
      });
    const div = d3.select("div.tooltip");

    node
      .on("mouseover", function (d) {
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
        div.transition().duration(500).style("visibility", "hidden");
        exit_highlight();
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
            .size(function (d) {
              const r = d.link === d.label ? 14 : 10;
              return Math.PI * Math.pow(r, 2);
            })
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
          window.innerWidth !== 600
            ? window.innerWidth - 300
            : window.innerWidth,
        height = window.innerHeight;
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
