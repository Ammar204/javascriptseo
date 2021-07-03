import { readString } from "react-papaparse";
import { rawData, node, link } from "../interface";

interface nodeAndLink {
  nodes: node[];
  links: link[];
}

export function isAllFileCSV(files: FileList): boolean {
  for (let i = 0; i < files.length; i++) {
    if (files[i].name.split(".").pop()?.toLowerCase() !== "csv") {
      return false;
    }
  }
  return true;
}
export function readFile(file: File): Promise<any[]> {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.onload = function () {
      const { data } = readString(reader.result as string, { header: true });
      resolve(data);
    };
    reader.readAsBinaryString(file);
  });
}

export function generateNodeAndLink(combineFileData: rawData[]): nodeAndLink {
  let nodes: node[] = [];
  let links: link[] = [];
  let flags: string[] = [];
  let nodeId = 0;
  let sourceHash: Record<string, number> = {}; // out
  let destinationHash: Record<string, number> = {}; //in
  combineFileData.forEach((data, idx) => {
    if (!flags.includes(data.Destination)) {
      nodes.push({
        id: nodeId++,
        in: 0,
        out: 0,
        link: data.Destination,
      });
      flags.push(data.Destination);
    }

    if (!flags.includes(data.Source)) {
      nodes.push({
        id: nodeId++,
        in: 0,
        out: 0,
        link: data.Source,
      });
      flags.push(data.Source);
    }

    if (!sourceHash[data.Source]) {
      sourceHash[data.Source] = 1;
    } else {
      sourceHash[data.Source]++;
    }

    if (!destinationHash[data.Destination]) {
      destinationHash[data.Destination] = 1;
    } else {
      destinationHash[data.Destination]++;
    }
  });

  nodes = nodes.map((node) => ({
    id: node.id,
    link: node.link,
    in: (node.link && destinationHash[node.link]) || 0,
    out: (node.link && sourceHash[node?.link]) || 0,
  }));

  combineFileData.forEach((data) => {
    const sourceNode = nodes.find((node) => node.link === data.Source);
    const destinationNode = nodes.find(
      (node) => node.link === data.Destination
    );

    links.push({ source: sourceNode?.id, target: destinationNode?.id });
  });

  return {
    nodes,
    links,
  };
}
